# brandondevere.com

Brandon DeVere's professional headquarters — not a portfolio, not a blog. Built with [Astro](https://astro.build), content authored as Markdown, deployed to GitHub Pages.

## Structure

```
src/
├── content/
│   ├── work/      Markdown case studies (challenge → thinking → workflow → solution → outcome → lessons)
│   └── writing/   Curated essays — quality over quantity, no publishing schedule
├── content.config.ts   Zod schemas for the two collections
├── components/    Nav, Footer, shared UI
├── layouts/       BaseLayout (nav + footer shell)
├── pages/         Route files — home, work, writing, about, resume, contact
└── styles/        tokens.css (design tokens) + global.css
```

## Adding content

Add a new `.md` file to `src/content/work/` or `src/content/writing/` with the required frontmatter (see existing files or `src/content.config.ts` for the schema), commit, and push to `main` — GitHub Actions builds and deploys automatically. No CMS, no database, no publishing schedule.

## Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. The custom domain (`brandondevere.com`) is set via `public/CNAME`; DNS must point at GitHub Pages and "Enforce HTTPS" must be enabled in the repo's Pages settings.
