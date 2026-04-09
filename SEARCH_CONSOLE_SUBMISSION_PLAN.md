# Search Console Submission Plan

Updated: 2026-04-08
Owner: Lux Traveler SEO
Scope: Deployment-ready indexing queue and first 14-day follow-up checkpoints.

## Submission order (execute top to bottom)

1. https://luxtraveler.eu/sitemap.xml
2. https://luxtraveler.eu/nl/wandelen-in-luxemburg
3. https://luxtraveler.eu/nl/wandelroutes-luxemburg
4. https://luxtraveler.eu/nl/wandelweekend-luxemburg
5. https://luxtraveler.eu/nl/wandelen-met-kinderen-luxemburg
6. https://luxtraveler.eu/nl/beginners-wandelroutes-luxemburg
7. https://luxtraveler.eu/nl/seizoenswandelroutes-luxemburg
8. https://luxtraveler.eu/nl/regenachtige-dag-luxemburg
9. https://luxtraveler.eu/nl/mullerthal-wandeling
10. https://luxtraveler.eu/nl/overnachten-bij-wandelroutes-luxemburg
11. https://luxtraveler.eu/en/hiking-in-luxembourg
12. https://luxtraveler.eu/en/luxembourg-hiking-trails
13. https://luxtraveler.eu/nl/blog
14. https://luxtraveler.eu/en/blog

## Why this order

- Start with sitemap to accelerate URL discovery.
- Prioritize the Dutch core funnel (hub, routes, weekend, new growth pages).
- Then submit supporting Dutch and English pages.
- Submit blog indexes after core transaction + information pages.

## 14-day follow-up schedule

1. Day 2
- Check indexing state for items 2 through 8.
- If any page is still "Discovered - currently not indexed", re-request indexing for that URL.

2. Day 7
- Compare impressions and CTR for:
  - /nl/wandelen-in-luxemburg
  - /nl/wandelroutes-luxemburg
  - /nl/wandelweekend-luxemburg
- Flag pages with high impressions and below-cluster CTR.

3. Day 14
- Apply Month 1 metadata variants from SEO_CTR_TEST_RUNBOOK.md to the top 2 low-CTR pages.
- Keep one variant per page and re-check after 14 additional days.

## Dependencies

- Deploy checklist: DEPLOY_INDEXING_CHECKLIST.txt
- CTR test process: SEO_CTR_TEST_RUNBOOK.md
