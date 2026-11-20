# Performance (CWV) — 65/100

## What works
- Hero image uses next/image with priority
- next/font for fonts

## Findings
| Severity | Finding | Evidence | Fix |
|---|---|---|---|
| High | Heavy blog images | 1.5-2.0 MB PNG covers in raw <img>; 685 KB avatar shown at 40px. Estimated, no field data. | Use next/image or WebP/AVIF. |
| Low | Home JS weight | About 596 KB uncompressed JS chunks. | Review once CrUX data is available. |
