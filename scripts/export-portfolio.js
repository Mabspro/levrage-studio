/**
 * Reads PORTFOLIO_MANIFEST.json and writes data/portfolio.public.json
 * for the LevrAge Studios marketing site.
 *
 * Visibility: project.studio_public.export + project.studio_public.section
 *
 * Usage:
 *   node scripts/export-portfolio.js
 *   PORTFOLIO_MANIFEST=/path/to/PORTFOLIO_MANIFEST.json node scripts/export-portfolio.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MANIFEST_PATH =
  process.env.PORTFOLIO_MANIFEST ||
  path.join(process.env.USERPROFILE || '', '.openclaw', 'workspace', 'PORTFOLIO_MANIFEST.json');
const OUT_PATH = path.join(ROOT, 'data', 'portfolio.public.json');

function getUrl(project) {
  const v = project.vercel;
  if (v?.url) return v.url.startsWith('http') ? v.url : `https://${v.url}`;
  const map = readVercelMap();
  const mapped = map[project.id];
  if (mapped?.production_urls?.[0]) {
    const u = mapped.production_urls[0];
    return u.startsWith('http') ? u : `https://${u}`;
  }
  return null;
}

let _vercelByManifest = null;
function readVercelMap() {
  if (_vercelByManifest) return _vercelByManifest;
  _vercelByManifest = {};
  try {
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    for (const p of manifest.vercel_project_map?.projects || []) {
      if (p.manifest_id) _vercelByManifest[p.manifest_id] = p;
    }
  } catch {
    /* optional */
  }
  return _vercelByManifest;
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

function resolveStatus(project) {
  const s = mapStatus(project);
  if (s) return s;
  if (project.vercel?.live || getUrl(project)) return 'live';
  return 'selected';
}

function main() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error(`Manifest not found: ${MANIFEST_PATH}`);
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
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
      url: getUrl(project),
      blurb: (project.role || project.note || '').split('\n')[0].slice(0, 280),
      section,
      status: resolveStatus(project),
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
    manifest_path: MANIFEST_PATH,
    schema: 'id, name, url, blurb, section, status, sort',
    filter_note: 'studio_public.export + studio_public.section on each manifest project.',
    count: items.length,
    items,
    bySection,
  };

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(output, null, 2) + '\n');
  console.log(`Wrote ${items.length} entries → ${OUT_PATH}`);
  for (const s of sections) {
    console.log(`  ${s}: ${bySection[s].length}`);
  }
}

main();
