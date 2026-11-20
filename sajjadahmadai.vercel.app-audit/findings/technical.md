# Technical SEO — 78/100

## What works
- robots.txt allows all with sitemap
- All 25 pages in sitemap and 200
- HTTPS 308 + HSTS preload
- Real 404s
- 24/25 canonicals correct

## Findings
| Severity | Finding | Evidence | Fix |
|---|---|---|---|
| High | /cv canonical points to homepage | app/cv/page.tsx has no canonical and inherits '/' from the root layout. | Add alternates.canonical '/cv'. |
| Medium | Missing security headers | Live responses lack CSP, X-Content-Type-Options, Referrer-Policy and X-Frame-Options; HSTS is present. | Add headers() in next.config.ts. |
| Low | Sitemap lastmod is build time | 21 URLs get the deploy timestamp as lastmod. | Use real content dates or omit lastmod. |
