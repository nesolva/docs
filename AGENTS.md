# Documentation project instructions

## About this project

- Public help site for Nesolva products, built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter under `es/` (Spanish, default) and later `en/`
- Configuration lives in `docs.json`
- Preview with `npx mint@latest dev` (Node 20 or 22)
- Checks: `bash scripts/check-public-content.sh`, `node scripts/check-nav.mjs`, `npx mint@latest broken-links`

## Terminology

- **Ailita**: identity product. **Ailita ID** is the sign-in and personal account site ("Mi cuenta").
  **Ailita Backoffice** is the console for organization administrators.
- **Alfred**: invoice capture product.
- **Organización**: the customer's organization. Its people are "miembros"; administrators are "administradores".
- **Segundo factor / verificación en dos pasos**: the authenticator app, backup codes or a passkey.
- Use the products' exact UI labels, in **bold**.

## Style preferences

- Spanish in voseo ("ingresá", "revisá"), the same register as the products
- Active voice, second person
- Keep sentences concise — one idea per sentence
- Sentence case for headings
- Bold for UI elements: Click **Configurar**
- Code formatting for file names, commands and paths

## Content boundaries

- Document only what end users and organization administrators see and do
- `scripts/check-public-content.sh` must pass
