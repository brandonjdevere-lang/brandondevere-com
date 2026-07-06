## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Project Brief

This is Brandon DeVere's professional headquarters — not a portfolio, not a blog. Visitors should leave understanding three things: how Brandon thinks, the kinds of problems he enjoys solving, and how he thoughtfully uses AI as one tool among many (never his identity).

**Identity statement:** "I build stories and systems that help people understand complicated things well enough to actually use them. AI is simply one of the tools I use to make that happen."

**Design principle:** the finished site must balance "writer" and "systems-builder" — never too literary (precious/blog-like), never too techy (sterile/startup-generic). This governs both visual design and copywriting tone.

**Three Work categories** (maps to the `category` field in `src/content.config.ts`): `clarity` (taking hard-to-explain ideas and making them usable), `systems` (turning tribal-knowledge processes into documented systems), `communication` (helping capable people communicate their value).

**Content rules:**
- Writing section stays fully curated — only his best work, no exceptions.
- Work case studies carry the "learning in public" value — each one should show the process (what he tried, what changed his mind, what he learned), not just the polished outcome. The "lessons learned" section is load-bearing, not optional.
- No fixed publishing cadence. Durability over reach — never write content to fill a schedule or chase algorithms.
- Resume page stays traditional and scannable (dates, titles, accomplishments). About page carries the narrative/throughline instead — it should never read as "a resume in prose."
- No standalone "AI" page in navigation. AI philosophy lives inside real Work case studies (especially the "AI Editorial Workflow" case study), never as an abstract manifesto page.

**Design tokens** live in `src/styles/tokens.css`: warm paper background (`#faf8f4`), soft ink text (`#1e1d1a`), a single restrained accent (`#2e3e3c`, muted teal-charcoal — deliberately not blue, to avoid a "SaaS/corporate" read). Typography: Source Serif 4 for headings (chosen over trendier serifs like Fraunces specifically to avoid a "modern startup/Substack" signal), Inter for body/UI, IBM Plex Mono for metadata only. Whitespace is treated as a feature — generous section spacing (`--section-gap`), not a gap to close.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
