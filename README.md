# Vaultera Documentation

Official VitePress documentation for the Vaultera protocol.

## Requirements

- Node.js 20+
- npm

## Local development

```bash
npm ci
npm run docs:dev
```

## Production build

```bash
npm run docs:build
npm run docs:preview
```

The generated site is written to `docs/.vitepress/dist`.

## Deployment

- Vercel uses `vercel.json` and serves the site from the domain assigned to the project.
- GitHub Pages uses `.github/workflows/deploy-pages.yml` and serves the site at `https://vaultera-dev.github.io/vaultera-docs/`.
- The legacy Drone pipeline remains available for branch-based `gh-pages` deployment but should not be enabled alongside the GitHub Actions Pages deployment.
