# Martins Okanlawon · Portfolio

A clipboard-and-paper portfolio built with Next.js 16, React 19 and Tailwind CSS v4.

```bash
bun install
bun run dev      # http://localhost:3000
bun run build
bun run format
```

## Editing content

- **All text** (summary, services, projects, experience, contacts) lives in `src/lib/site.ts`.
- **Portrait carousel:** drop photos into `public/portraits/`. Every image there is shown, sorted by file name (`01.jpg`, `02.jpg`, ...). Portrait (4:5) photos look best.
- **Project screenshots** live in `public/projects/`.
