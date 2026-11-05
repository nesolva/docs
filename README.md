# Nesolva help site

Source for [docs.nesolva.com](https://docs.nesolva.com): guides and troubleshooting for people who use Ailita and
Alfred, and for the administrators of their organizations. Built with [Mintlify](https://mintlify.com).

## Structure

- `es/`: pages in Spanish (default language). `en/` comes later with the same paths.
- `snippets/`: reusable blocks, such as the help card at the end of every page.
- `docs.json`: site configuration and navigation.
- `scripts/`: checks that run on every pull request.
- `docs/`: internal planning, not published.

## Preview locally

Mintlify needs Node 20 or 22.

```bash
npx mint@latest dev
```

## Checks

```bash
bash scripts/check-public-content.sh   # blocks content that must not be public
node scripts/check-nav.mjs             # every page is in docs.json and every docs.json entry has a file
npx mint@latest broken-links
```

The same checks run in CI (`.github/workflows/docs-check.yml`).
