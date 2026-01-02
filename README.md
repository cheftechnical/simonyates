# Simon Yates – Personal Site

A Next.js (App Router) + React + TypeScript project for my resume/portfolio site.

## Requirements
- Node.js 22 (enforced via `.nvmrc` and `"engines"`)
  - Use nvm: `nvm install 22 && nvm use 22`
- npm (recommended for Next.js)

## Install / Run
```bash
# install deps
npm install

# dev server
npm run dev

# production build
npm run build

# run the production server (after build)
npm run start
```

## Storybook (minimal, v10 core)
This repo uses a minimal Storybook 10 setup (core + links), primarily for ad‑hoc component review.
```bash
npm run storybook
```
Notes:
- Stories are excluded from production typecheck/build.
- Some older stories may still need v10 API cleanups; not required for prod builds.

## Linting and Formatting
- ESLint with `eslint-plugin-perfectionist` enforces:
  - Sorted imports/named imports
  - Alphabetized object keys and destructured properties (matches personal style)
- Run:
```bash
npm run lint
```

## Performance
- Next.js handles route-level code splitting automatically.
- Keep heavy dependencies (e.g. `d3`, MathJax) localized to pages/components that need them.

## Tailwind color tokens (single source of truth)
- Define brand colors once as CSS variables in `src/styles/tailwind.css`:
```css
@layer base {
  :root {
    --color-gray-700: #515151;
    --color-red-500: #A93030;
    --color-lime-50: #F8FAEF;
    /* ... */
  }
}
```
- Reference those variables in `tailwind.config.ts` so utilities use the same values:
```ts
// tailwind.config.ts
export default {
  theme: {
    colors: {
      gray: { 700: 'var(--color-gray-700)' },
      red: { 500: 'var(--color-red-500)' },
      lime: { 50: 'var(--color-lime-50)' },
      // ...
    },
  },
};
```
- Use standard utilities in components:
```tsx
<div className="text-gray-700 bg-lime-50">Content</div>
```
This keeps hex values in one place (CSS), while Tailwind utilities reference those tokens everywhere.

## Security hygiene
- Resolutions to pin safe versions for transitive deps:
  - `form-data@^4`
  - `braces@^3.0.3`

## Tech notes
- React 19 with Tailwind CSS (MUI removed)
- Node 22 on Vercel; local dev also uses Node 22.

## Changelog
- 2025‑10‑30: Node 22 upgrade, dependency updates, Storybook v10 minimal, CI added, lint rules, vendor/route splitting.
- 2024‑02‑01: Initial notes.



## Favicon
```bash
python3 - << 'EOF'
from PIL import Image
imgs = [Image.open("public/favicon-16x16.png"), Image.open("public/favicon-32x32.png")]
imgs[0].save("public/favicon.ico", sizes=[(16,16),(32,32)])
EOF
```

### Iconography design direction
Yeah, the direction being: the frame thickness matches the thickness of the head/tail of the "S" curve (1:1).

This is true for the 16 px version where I literally just extend from the horizontal line outwards to the edge of the canvas, and for the 72 px vector, which is conveniently 2 pt thick.

For the vector, I had a 1 pt outline stroke on the "S", which overshoots the frame by 1 pt on either end. The canvas is then the size of the frame + 1 pt in all directions from centre.
