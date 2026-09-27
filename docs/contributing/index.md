# Contributing

## Add or update a page

1. Create or edit a Markdown file under `docs/`.
2. Add new pages to the appropriate sidebar in `docs/.vitepress/config.ts`.
3. Run `npm run docs:dev` while editing.
4. Run `npm run docs:build` before opening a pull request.

## Documentation conventions

- Use one top-level heading per page.
- Prefer short sections and descriptive headings.
- Use contract, function, role, and event names exactly as implemented.
- Mark assumptions and planned behavior clearly.
- Never add private keys, tokens, internal credentials, or sensitive deployment data.

The `gh-pages` branch contains generated output and must not be edited manually.
