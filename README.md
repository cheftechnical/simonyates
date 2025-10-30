# Simon Yates – Personal Site

A React + TypeScript + Vite project for my resume/portfolio site.

## Requirements
- Node.js 22 (enforced via `.nvmrc` and `"engines"`)
  - Use nvm: `nvm install 22 && nvm use 22`
- Yarn v1

## Install / Run
```bash
# install deps
yarn install --check-files

# dev server
yarn dev

# typecheck + production build
yarn build

# preview the production build
yarn preview
```

## Storybook (minimal, v10 core)
This repo uses a minimal Storybook 10 setup (core + links), primarily for ad‑hoc component review.
```bash
yarn storybook
```
Notes:
- Stories are excluded from production typecheck/build.
- Some older stories may still need v10 API cleanups; not required for prod builds.

## CI
GitHub Actions runs on pushes/PRs:
- Install (cached)
- Typecheck (`tsc --noEmit`)
- Production build (`vite build`)

## Linting and Formatting
- ESLint with `eslint-plugin-perfectionist` enforces:
  - Sorted imports/named imports
  - Alphabetized object keys and destructured properties (matches personal style)
- Run:
```bash
yarn lint
```

## Performance
- Vite vendor code‑splitting (`react`, `router`, `mui`, `d3`, `date-fns`)
- Route‑level code splitting via `React.lazy` + `Suspense` in `Root`

## Security hygiene
- Resolutions to pin safe versions for transitive deps:
  - `form-data@^4`
  - `braces@^3.0.3`

## Tech notes
- React pinned to 18.x to align with MUI 5 (temporary). Tailwind migration planned.
- Node 22 on Vercel; local dev also uses Node 22.

## Changelog
- 2025‑10‑30: Node 22 upgrade, dependency updates, Storybook v10 minimal, CI added, lint rules, vendor/route splitting.
- 2024‑02‑01: Initial notes.