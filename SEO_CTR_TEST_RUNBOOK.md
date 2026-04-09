# Monthly CTR + Internal Anchor Refresh Runbook

Updated: 2026-04-08
Owner: Lux Traveler SEO

## Goal

Increase organic clicks by testing page titles and meta descriptions monthly, then reinforcing winning pages with fresher internal anchor text.

## Scope

Priority pages:
- /nl/wandelen-in-luxemburg
- /nl/wandelroutes-luxemburg
- /nl/wandelweekend-luxemburg
- /nl/wandelen-met-kinderen-luxemburg
- /nl/seizoenswandelroutes-luxemburg
- /nl/beginners-wandelroutes-luxemburg
- /nl/regenachtige-dag-luxemburg

## Monthly cadence

1. Export Search Console data (last 28 days) for pages above.
2. Pick top 2 pages with high impressions but below-average CTR.
3. Create one new title + description variant for each selected page.
4. Ship metadata updates and wait 14 days.
5. Compare CTR deltas vs previous 14-day baseline.
6. Keep winners and roll insights into internal anchor text updates.

## CTR test tracker template

| Month | Page | Baseline CTR | Variant | 14-day CTR | Winner | Action |
|---|---|---:|---|---:|---|---|
| 2026-05 | /nl/wandelen-in-luxemburg | 0.0% | v1 title/meta | 0.0% | TBD | TBD |
| 2026-05 | /nl/wandelroutes-luxemburg | 0.0% | v1 title/meta | 0.0% | TBD | TBD |

## Month 1 variant drafts (ready to test)

Target page: /nl/wandelen-in-luxemburg
- Current title:
   Wandelen in Luxemburg | Complete gids voor Nederlanders
- Variant title (v1):
   Wandelen in Luxemburg: Complete NL Gids + Beste Regio's (2026)
- Current description:
   Primaire Nederlandse informatieve pagina voor wandelen in Luxemburg, met routes, reistips, en verblijf in Grevenmacher.
- Variant description (v1):
   Plan je wandeltrip vanuit Nederland: ontdek de beste regio's, routekeuze per niveau en slimme verblijfstips in Grevenmacher.

Target page: /nl/wandelroutes-luxemburg
- Current title:
   Wandelroutes Luxemburg | Afstanden, duur en niveau
- Variant title (v1):
   12 Mooie Wandelroutes in Luxemburg: Afstand, Duur en Moeilijkheid
- Current description:
   Bekijk de beste wandelroutes in Luxemburg met afstand, moeilijkheid en praktische informatie voor Nederlandse toeristen.
- Variant description (v1):
   Vergelijk route-afstanden, wandeltijd en niveau in 1 overzicht. Kies snel de beste Luxemburg-route voor je weekend.

## Internal anchor refresh workflow

After confirming a CTR winner page:

1. Add at least 2 new internal anchors pointing to winner page.
2. Use intent-specific anchor text, not repeated exact matches.
3. Update links from:
   - NL hub page
   - Footer guides column
   - 2 related Dutch cluster pages
4. Re-crawl impacted URLs in Search Console URL Inspection.

## Anchor text bank (rotate monthly)

For /nl/wandelen-in-luxemburg:
- complete NL wandelgids
- hoofdgids wandelen in Luxemburg
- overzichtspagina voor NL wandelaars

For /nl/wandelroutes-luxemburg:
- vergelijk alle wandelroutes
- routeoverzicht op afstand en niveau
- praktische routekeuze Luxemburg

For /nl/wandelen-met-kinderen-luxemburg:
- gezinsvriendelijke wandelroutes
- wandelen met kinderen plannen
- kindvriendelijke route-inspiratie

For /nl/beginners-wandelroutes-luxemburg:
- makkelijke wandelroutes voor starters
- eerste wandelweekend zonder stress
- beginnersvriendelijke routekeuze

For /nl/seizoenswandelroutes-luxemburg:
- beste routes per seizoen
- lente-zomer-herfst routeplanning
- seizoensgids voor Luxemburg

For /nl/regenachtige-dag-luxemburg:
- regenachtige dag fallback-plan
- slecht weer wandelalternatieven
- regen-proof weekendplanning

## Guardrails

- Test only one title+description variant per page at a time.
- Do not change URL slugs during CTR tests.
- Keep page intent stable while testing snippets.
- If CTR falls for 2 consecutive cycles, roll back to previous winner.
