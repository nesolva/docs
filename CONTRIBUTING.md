# Contributing

1. Create a branch and edit or add pages under `es/` (and `en/` once it exists).
2. Add every new page to `docs.json`. A page that isn't in the navigation fails the checks.
3. Run the checks in the [README](README.md#checks) and preview with `npx mint@latest dev`.
4. Open a pull request. CI runs the same checks.

## What belongs here

This site documents what end users and organization administrators see and do: steps, settings they control, the
messages the products show and what to do about them. It doesn't document internals, how the products work inside,
or anything that isn't released. When in doubt, leave it out and ask in the pull request.

`scripts/check-public-content.sh` must pass on every page.
