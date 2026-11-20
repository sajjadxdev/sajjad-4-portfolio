# SEO Action Plan: sajjadahmadai.vercel.app

Health score: **68/100**. Ordered by priority. The effort column is a rough estimate.

## Critical
None. Nothing blocks indexing of the site as a whole.

## High (this week)
| # | Action | Where | Effort |
|---|---|---|---|
| 1 | Give `/cv` its own canonical (`alternates: { canonical: "/cv" }`) | `app/cv/page.tsx` | 5 min |
| 2 | Add `images` to every page-level `openGraph` (18 pages show no share image) | services, locations, blog pages | 30 min |
| 3 | Serve blog covers and author avatars through `next/image` (1.5–2 MB PNGs and a 685 KB avatar today) | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/about/page.tsx` | 30 min |
| 4 | Expand the 10 service pages to 600–1,000 words: a real example, stack, timeline, FAQ | `app/services/[slug]/page.tsx` | 1–2 days |
| 5 | Decide on location pages: merge them, or give each unique content (doorway risk today) | `app/locations/*` | half a day |

## Medium (this month)
| # | Action | Effort |
|---|---|---|
| 6 | Fix the homepage H1 spacing ("thatworks") | 2 min |
| 7 | Shorten 15 titles over 60 characters (blog titles up to 100) | 30 min |
| 8 | Move `ProfilePage` schema out of the root layout to home and About only | 20 min |
| 9 | Fix the conflicting `addressRegion` in the About page Person schema | 2 min |
| 10 | Internal links: a "Latest articles" strip on home, related-service links in posts, locations in the footer | 2 h |
| 11 | Add security headers (CSP, nosniff, Referrer-Policy, frame options) via `next.config.ts` | 1 h |
| 12 | Make a real 1200×630 Open Graph image (current one is 1000×1000 but declared 1200×630) | 30 min |
| 13 | Back up or soften CV claims ("100,000+ documents", "+40%") | 30 min |

## Low (backlog)
- Trim 7 meta descriptions over 160 characters.
- Use real `lastmod` dates in the sitemap.
- Add `/llms.txt`.
- Add `Service` + `areaServed` schema on location pages, if they stay.
- Add project case-study pages (`/work/<project>`), the strongest trust signal for a freelancer.
- Delete unused images in `public/`.

## Next steps
- Connect Google Search Console (and optionally a CrUX API key) so the next audit has real indexation and Core Web Vitals data.
- Re-run this audit after deploying the new design.
