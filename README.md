# Verginius.github.io

A minimalist personal portfolio with a retro-terminal aesthetic. Built as a static site hosted on GitHub Pages.

## Pages

| Page | File | Description |
|---|---|---|
| Resume | `index.html` | CV rendered from Markdown |
| Repositories | `repositories.html` | GitHub repos & contribution stats |
| Translations | `translations.html` | ParaTranz translation projects |
| Photography | `photography.html` | Photo gallery |

## Features

### Shared Layout (`assets/common.js` / `assets/common.css`)
- Shared site header rendered by `common.js`: name, bio (education & skills), and navigation links.
- Navigation links: Resume, Repositories, Translations, Photography, GitHub, Email.
- Active page highlighting applied automatically based on `window.location.pathname`.
- Black & White minimalist theme, `JetBrains Mono` / `Fira Code` fonts (Google Fonts).
- CSS Variables with automatic dark mode (`prefers-color-scheme: dark`).

### Resume
- CV Markdown stored in `assets/data.db` (SQLite `documents` table), fetched and rendered via `marked.js`.

### Repositories (GitHub API)
- Fetches original repos and contribution stats (Commits, PRs, Reviews, Issues) for `Verginius`.
- `localStorage` caching (1 hour TTL) to reduce GitHub API rate limit hits.

### Photography
- Hero image + thumbnail strip layout with client-side pagination (6 photos per page).
- Photos sorted by filename in descending order.
- Images stored compressed in `assets/data.db` (max 1920px, JPEG quality 75).
- Loaded at runtime via `sql.js` as Blob URLs — no image files committed to the repo.
- Current `data.db` size: **8.3 MB**.

### Translations (ParaTranz API)
- Fetches user stats and project list from ParaTranz for user `2888`.
- CORS fallback via [CodeTabs proxy](https://api.codetabs.com/v1/proxy).

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS (ES6+)** — no frameworks
- **sql.js v1.10.3** — SQLite in the browser (WebAssembly)
- **marked.js** — Markdown → HTML rendering
- **GitHub API / ParaTranz API** — dynamic data

## Asset Pipeline

Photos and CV are not committed directly. Instead, run the build script to pack them into the SQLite database:

```bash
python build_db.py
```

This compresses photos (max 1920px, JPEG quality 75) and stores the CV Markdown into `assets/data.db`.

**Files excluded from git** (see `.gitignore`):
```
docs/
photography/
build_db.py
```

**Files committed:**
```
assets/data.db   ← the only binary asset (currently ~8.3 MB)
```

## Local Development

Because `assets/data.db` is loaded via `fetch`, a local HTTP server is required (the `file://` protocol blocks it):

```bash
# Python
python -m http.server 8080
```

Then open `http://localhost:8080`.

