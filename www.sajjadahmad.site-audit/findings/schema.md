# Schema / Structured Data — 85/100

## What works
- Person+WebSite sitewide
- ProfilePage home only
- Service+FAQPage on 10 services
- BlogPosting+FAQPage on 19 posts
- All JSON-LD valid

## Findings
| Severity | Finding | Evidence | Fix |
|---|---|---|---|
| Low | No Blog/ItemList on /blog | Blog index has no list schema. | Add Blog + ItemList. |
| Low | No Service on locations | Location pages lack Service/areaServed. | Add if pages stay. |
