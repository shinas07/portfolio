# Shinas Aman — Portfolio

Personal portfolio of Shinas Aman, full-stack engineer (Python · TypeScript), Delhi, India.

**Live:** https://portfolio-five-gamma-722rq3ixd7.vercel.app/

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static generation)
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first config, design tokens in `globals.css`)
- [Motion](https://motion.dev) for scroll-triggered animation

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/          # routes, layout, design tokens (globals.css)
│   └── work/     # project case-study pages
├── components/   # sections and shared UI
└── lib/          # content data — identity, experience, projects
```

All site content lives in `src/lib` as typed modules — update `site.ts`,
`experience.ts` or `projects.ts` and every section stays in sync.
