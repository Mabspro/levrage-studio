/**
 * Reads PORTFOLIO_MANIFEST.json and writes data/portfolio.public.json
 * for the LevrAge Studios marketing site.
 *
 * Visibility: project.studio_public.export + project.studio_public.section
 *
 * Manifest resolution (first match wins):
 *   1. PORTFOLIO_MANIFEST env var
 *   2. data/portfolio.manifest.json (committed — used on Vercel/CI)
 *   3. ~/.openclaw/workspace/PORTFOLIO_MANIFEST.json (local agent workspace)
 *
 * After a successful export from (3), the snapshot at (2) is refreshed so the
 * next commit keeps CI in sync. Run `npm run export-portfolio` before pushing
 * when you change studio_public flags in the openclaw manifest.
 *
 * Usage:
 *   node scripts/export-portfolio.js
 *   PORTFOLIO_MANIFEST=/path/to/PORTFOLIO_MANIFEST.json node scripts/export-portfolio.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BUNDLED_MANIFEST = path.join(ROOT, 'data', 'portfolio.manifest.json');
const OPENCLAW_MANIFEST = path.join(
  process.env.USERPROFILE || process.env.HOME || '',
  '.openclaw',
  'workspace',
  'PORTFOLIO_MANIFEST.json'
);
const OUT_PATH = path.join(ROOT, 'data', 'portfolio.public.json');

function resolveManifestPath() {
  if (process.env.PORTFOLIO_MANIFEST) {
    return { path: process.env.PORTFOLIO_MANIFEST, source: 'env' };
  }
  if (fs.existsSync(BUNDLED_MANIFEST)) {
    return { path: BUNDLED_MANIFEST, source: 'bundled' };
  }
  if (OPENCLAW_MANIFEST && fs.existsSync(OPENCLAW_MANIFEST)) {
    return { path: OPENCLAW_MANIFEST, source: 'openclaw' };
  }
  return null;
}

function syncBundledSnapshot(fromPath) {
  try {
    fs.copyFileSync(fromPath, BUNDLED_MANIFEST);
    console.log(`Synced manifest snapshot → ${BUNDLED_MANIFEST}`);
  } catch (err) {
    console.warn(`Could not sync manifest snapshot: ${err.message}`);
  }
}

function getUrl(project, vercelByManifest) {
  const v = project.vercel;
  if (v?.url) return v.url.startsWith('http') ? v.url : `https://${v.url}`;
  const mapped = vercelByManifest[project.id];
  if (mapped?.production_urls?.[0]) {
    const u = mapped.production_urls[0];
    return u.startsWith('http') ? u : `https://${u}`;
  }
  return null;
}

function buildVercelMap(manifest) {
  const map = {};
  for (const p of manifest.vercel_project_map?.projects || []) {
    if (p.manifest_id) map[p.manifest_id] = p;
  }
  return map;
}

function mapStatus(project) {
  const s = project.status;
  if (s === 'active') return 'live';
  if (s === 'stalled' || s === 'client_work_stalled') return 'selected';
  if (s === 'scaffolding' || s === 'client_work_scaffolding') return 'experiment';
  if (project.tier === 7 && s === 'dormant') return 'selected';
  if (project.tier === 4 && s === 'dormant') return 'experiment';
  if (project.tier === 1 && s === 'dormant') return 'live';
  return null;
}

function resolveStatus(project, vercelByManifest) {
  const s = mapStatus(project);
  if (s) return s;
  if (project.vercel?.live || getUrl(project, vercelByManifest)) return 'live';
  return 'selected';
}

function main() {
  const resolved = resolveManifestPath();

  if (!resolved) {
    if (fs.existsSync(OUT_PATH)) {
      console.warn(
        'No manifest found; using committed data/portfolio.public.json (skip re-export).'
      );
      console.warn(
        'Add data/portfolio.manifest.json or set PORTFOLIO_MANIFEST for fresh exports.'
      );
      return;
    }
    console.error(
      'Manifest not found. Expected one of:\n' +
        `  PORTFOLIO_MANIFEST\n` +
        `  ${BUNDLED_MANIFEST}\n` +
        `  ${OPENCLAW_MANIFEST}`
    );
    process.exit(1);
  }

  const { path: manifestPath, source } = resolved;
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const vercelByManifest = buildVercelMap(manifest);
  const generated = new Date().toISOString();
  const items = [];

  for (const project of manifest.projects || []) {
    const sp = project.studio_public;
    if (!sp?.export) continue;

    const section = sp.section;
    if (!section) {
      console.warn(`Skip ${project.id}: studio_public.export true but no section`);
      continue;
    }

    items.push({
      id: project.id,
      name: project.name,
      url: getUrl(project, vercelByManifest),
      blurb: (project.role || project.note || '').split('\n')[0].slice(0, 280),
      section,
      status: resolveStatus(project, vercelByManifest),
      sort: sp.sort ?? 99,
    });
  }

  items.sort((a, b) => (a.sort ?? 99) - (b.sort ?? 99));

  const sections = ['platform', 'institutional', 'flagships', 'client_mvps', 'labs', 'community'];
  const bySection = Object.fromEntries(
    sections.map((s) => [s, items.filter((i) => i.section === s)])
  );

  const output = {
    generated,
    manifest_path: manifestPath,
    manifest_source: source,
    schema: 'id, name, url, blurb, section, status, sort',
    filter_note: 'studio_public.export + studio_public.section on each manifest project.',
    count: items.length,
    items,
    bySection,
  };

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(output, null, 2) + '\n');
  console.log(`Read manifest (${source}): ${manifestPath}`);
  console.log(`Wrote ${items.length} entries → ${OUT_PATH}`);
  for (const s of sections) {
    console.log(`  ${s}: ${bySection[s].length}`);
  }

  if (source === 'openclaw' || source === 'env') {
    syncBundledSnapshot(manifestPath);
  }
}

main();
