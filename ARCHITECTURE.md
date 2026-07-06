# Architecture

This document records the key decisions behind brandondevere.com and the reasoning for each — so the "why" survives even after the person who made the decision forgets it. Assume this site will still be actively maintained five years from now; when in doubt, favor the maintainable choice over the quick one.

## Purpose

This is Brandon DeVere's professional headquarters — not a portfolio, not a blog. It should still be true and still be worth maintaining in five years, regardless of who he's working for or what he's building at the time.

A visitor should leave understanding three things:

1. How Brandon thinks.
2. The kinds of problems he enjoys solving.
3. How he thoughtfully uses AI to help people build better systems, content, and businesses.

**Identity statement:** "I build stories and systems that help people understand complicated things well enough to actually use them. AI is simply one of the tools I use to make that happen."

The site should never read as a job-search page or a marketing page — quiet confidence, not a pitch.

## Primary Audience

If forced to pick one reader to write the homepage for, it's a **thoughtful hiring manager at an AI-native company** — not because the site is primarily about job-seeking, but because that reader is asking the same underlying question every visitor asks: "How does this person think, and would I trust them with important problems?" The theory: if the homepage earns that reader's trust, every other audience (recruiters, business owners, real estate professionals, consulting clients, podcast listeners, future collaborators) finds their own value further into the site without needing a separate homepage narrative.

## Why Astro

Astro is built for content-first sites. It ships near-zero JavaScript by default, which directly serves the "fast, calm, minimal" design goal, and it reads Markdown natively for the Work and Writing collections without extra plumbing. Interactive components can be added later exactly where needed, without paying a framework tax everywhere else.

**Rejected:** Next.js (heavier than this site needs — more JS and configuration for the same result). Plain static HTML/CSS/JS (no templating, meaning every new Work or Writing entry would require hand-duplicating markup instead of generating from a Markdown file).

## Why Markdown + Git

Every Work case study and Writing piece is a Markdown file with frontmatter, committed to this repo. No database, no CMS subscription, no third-party vendor that has to still exist — and be worth paying for — in 2031. Fully portable, fully versioned, and consistent with the site's own "durability over reach" content philosophy applied to its own infrastructure.

**Rejected:** a Git-based CMS UI (e.g. Decap CMS) and a hosted headless CMS (e.g. Sanity/Contentful) — both add a dependency in exchange for a nicer editing form, which wasn't worth the trade for a single-author site with no fixed publishing schedule.

## Why GitHub Pages

Deployment should be free, boring, and require no infrastructure to maintain. GitHub Pages, driven by a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the Astro site and deploys the static output, fits that exactly — the same repo that holds the code and content also hosts the deploy pipeline.

One real constraint discovered during setup: GitHub Pages on the free plan only serves from **public** repositories. Rather than pay for GitHub Pro to keep the repo private, the repo was made public — Brandon wants the source code itself to be part of his portfolio, visible to the same hiring-manager audience the site is written for.

## Navigation Structure

```
Home · Work · Writing · About · Resume · Contact
```

Deliberately simple for v1. Notably, **there is no standalone "AI" nav item** — see below.

## Design System

- **Whitespace is a design token, not an afterthought.** A generous spacing scale (`--space-*` in `src/styles/tokens.css`) and real vertical rhythm between page sections (`--section-gap`, ~96–144px on desktop) so every page "breathes" rather than feeling stacked.
- **Design principle:** the finished site must balance "writer" and "systems-builder" — never too literary (precious, blog-like) and never too techy (sterile, startup-generic). This governs typography, color, and copywriting tone alike.

## Typography

Three fonts, each doing a specific job:

- **Source Serif 4** — headings and pull quotes. Chosen deliberately over trendier editorial serifs like Fraunces, which currently read as "modern indie SaaS / Substack" — the opposite of timeless. Source Serif 4 is quieter and more restrained.
- **Inter** — body copy and UI. Neutral, highly legible, disappears into the reading experience. The "systems-builder" counterweight to the serif's warmth.
- **IBM Plex Mono** — metadata only (dates, category tags). A small, deliberate nod to the technical/systems side without ever touching body copy.

All three are self-hosted via `@fontsource` packages rather than loaded from Google Fonts or another external host — no runtime dependency on a third party just to render text.

## Color Palette

| Role | Value | Notes |
|---|---|---|
| Background (paper) | `#faf8f4` | warm off-white, not stark white |
| Surface | `#f1eee7` | cards, secondary surfaces |
| Text — primary (ink) | `#1e1d1a` | soft near-black |
| Text — secondary (muted) | `#6f6b63` | captions, metadata |
| Border | `#e4e0d6` | hairlines, dividers |
| Accent | `#2e3e3c` | muted teal-charcoal — links and small highlights only |

The accent is deliberately not blue. Blue, even muted, tends to read as "corporate SaaS." A dark, desaturated teal-charcoal reads closer to ink or aged brass — durable and calm rather than techy. Used sparingly (links, hover states) and never as large color blocks or gradients.

## Content Philosophy

- **No fixed publishing cadence.** Work and Writing grow whenever there's something worth documenting, not on a schedule. Twenty pieces that still matter in five years beats two hundred written to fill a calendar.
- **Durability over reach.** No content-factory or algorithm-chasing work belongs on this site, regardless of how well it performed elsewhere.
- **Writing is fully curated.** If an essay is published there, it represents Brandon's best thinking and best writing — full stop.
- **Work carries the "learning in public" value instead.** Each case study follows: Challenge → How I Thought About It → The Workflow → The Solution → The Outcome → What I Learned. The "lessons learned" section is load-bearing, not optional polish — it's the specific mechanism that shows Brandon's thinking evolving rather than presenting him as someone who always gets it right.
- **Resume vs. About are deliberately different registers.** Resume stays traditional and scannable (what he's done). About carries the throughline narrative (why he's done it) rather than reading as "a resume in prose."

## Why AI Lives Inside Work, Not as a Separate Nav Item

AI is a tool Brandon uses, not his identity — giving it a standalone nav item would contradict that positioning and risk framing the whole site around AI rather than around how he thinks. Instead, his approach to AI is demonstrated through a real Work case study — "AI Editorial Workflow" — covering his philosophy, prompt development, and human-review process. Visitors discover how he works with AI by seeing it in practice, not by reading an abstract manifesto page.

## Deployment Status

- Repo: [github.com/brandonjdevere-lang/brandondevere-com](https://github.com/brandonjdevere-lang/brandondevere-com) (public)
- GitHub Actions workflow for Pages deployment exists (`.github/workflows/deploy.yml`) and `public/CNAME` is already set to `brandondevere.com`, but **GitHub Pages has not been enabled and DNS has not been pointed at it.** This is deliberate — launch is being held until the foundation and initial content are reviewed. Do not enable Pages or wire DNS without explicit approval.
