# Verginius.github.io

A minimalist personal portfolio with a retro-terminal aesthetic. Built as a static site hosted on GitHub Pages.

## Pages

| Page | URL | Description |
|---|---|---|
| Resume | `index.html` | CV rendered from Markdown |
| Repositories | `repositories.html` | GitHub repos & contribution stats |
| Translations | `translations.html` | ParaTranz translation projects |
| Photography | `photography.html` | Photo gallery |

## Features

### Resume
- CV content stored in `assets/data.db` (SQLite), rendered via `marked.js`.

### Repositories (GitHub API)
- Fetches original repos and contribution stats (Commits, PRs, Reviews, Issues).
- Local storage caching (1 hour) to reduce API rate limit hits.

### Photography
- Hero image + thumbnail strip layout with client-side pagination.
- Images stored compressed in `assets/data.db` (114 MB originals → 8.3 MB).
- Loaded at runtime via `sql.js` as Blob URLs — no image files committed to the repo.

### Translations (ParaTranz API)
- Fetches user stats and project list from ParaTranz.
- CORS fallback via CodeTabs proxy.

### Design
- Black & White minimalist theme, `JetBrains Mono` / `Fira Code` fonts.
- CSS Variables with automatic dark mode (`prefers-color-scheme`).
- Responsive grid layouts for mobile and desktop.

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS (ES6+)** — no frameworks
- **sql.js** — SQLite in the browser (WebAssembly)
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
assets/data.db   ← the only binary asset (~8 MB)
```

## Local Development

Because `assets/data.db` is loaded via `fetch`, a local HTTP server is required (the `file://` protocol blocks it):

```bash
# Python
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Updating Content

- **CV**: Edit `docs/LI Zhengxuan_Cpp_CV.md`, then run `python build_db.py` and commit `assets/data.db`.
- **Photos**: Add/remove files in `photography/`, then run `python build_db.py` and commit `assets/data.db`.
- **GitHub username**: Update `GITHUB_USERNAME` in `repositories.html`.
- **ParaTranz user**: Update `USER_ID` in `translations.html`.

