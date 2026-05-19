# levrage.studio custom domain

Target Vercel project: **levrage-studio** (`Mabspro/levrage-studio`)  
Current default URL: `https://levrage-studio.vercel.app`

## Vercel dashboard (≈5 min)

1. Open [vercel.com](https://vercel.com) → project **levrage-studio**
2. **Settings** → **Domains**
3. Add **`levrage.studio`** and **`www.levrage.studio`** (recommended: redirect www → apex or vice versa)
4. Copy the DNS records Vercel shows (usually one of):
   - **A** `@` → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`
5. At your domain registrar (where `levrage.studio` is registered), add those records
6. Wait for SSL provisioning (often minutes, up to 48h for DNS propagation)

## After DNS is live

Set in Vercel **Environment Variables** (Production):

```
NEXT_PUBLIC_SITE_URL=https://levrage.studio
START_BUILD_LINK=https://levrage.studio#start-a-build
```

Redeploy once variables are set.

## CLI alternative (optional)

```bash
npm i -g vercel
cd D:\Projects\levrage-studios
vercel login
vercel link   # select levrage-studio
vercel domains add levrage.studio
vercel domains add www.levrage.studio
```

Cursor does not auto-configure DNS without Vercel CLI auth or dashboard access — use the dashboard steps above.
