# Schema / Structured Data — 70/100

## What works
- Person, WebSite, BreadcrumbList, Service, BlogPosting, FAQPage present
- All JSON-LD parses

## Findings
| Severity | Finding | Evidence | Fix |
|---|---|---|---|
| Medium | ProfilePage on every page | Injected by the root layout, including blog posts and services. | Limit to home and About. |
| Medium | Conflicting Person addressRegion | About says Khyber Pakhtunkhwa; layout says Islamabad Capital Territory, same @id. | Use Islamabad Capital Territory. |
