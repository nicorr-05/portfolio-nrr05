# nicorr-05/portfolio

Personal site of Nicolás Restrepo, Forward Deployed Engineer. Next.js (App Router), TypeScript and Tailwind CSS, fully static, deployed on Vercel.

## Run locally

Requires Node 20.9 or later.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Content

- `src/content/profile.ts`: summary, experience, stack.
- `src/content/cases.ts`: the two case studies, used verbatim.
- `public/cv/`: the three CV PDFs, named `nicolas-restrepo-fde.pdf`, `nicolas-restrepo-senior-swe.pdf` and `nicolas-restrepo-tech-lead.pdf`.
- `src/lib/site.ts`: contact links and `SITE_URL`. Change `SITE_URL` when a custom domain is attached; metadata, the sitemap and robots.txt all read from it.

## Deploy to Vercel

1. Push this repo to GitHub as `nicorr-05/portfolio`.
2. In Vercel, import the repo. The framework preset is detected; no environment variables are needed.
3. Enable Web Analytics in the project's Analytics tab (the `<Analytics />` component is already in the layout).
4. Optional: attach a custom domain, then update `SITE_URL` in `src/lib/site.ts`.

Or from the CLI: `npx vercel` for a preview and `npx vercel --prod` for production.
