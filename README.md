# Verginius.github.io

A minimalist personal portfolio and data visualization hub, designed with a retro-terminal aesthetic. This static site automatically fetches and displays data from various platforms to showcase my work in development, photography, and translation.

## 🌟 Features

### 1. Repositories (GitHub Integration)
- **Dynamic Stats**: Visualizes contribution data including Commits, Code Reviews, Pull Requests, and Issues.
- **Auto-Fetching**: Uses the [GitHub API](https://docs.github.com/en/rest) to fetch and filter original repositories.
- **Smart Caching**: Implements local storage caching to minimize API rate limit hits.

### 2. Photography Portfolio
- **Gallery Layout**: Features a "Hero Image" layout with a main viewing area and a thumbnail strip.
- **Interactive**: rapid switching between photos and full-screen viewing.
- **Pagination**: Client-side pagination for browsing photo collections.

### 3. Translations (ParaTranz Integration)
- **Project Tracking**: Fetches real-time data from the [ParaTranz API](https://paratranz.cn/).
- **User Stats**: Displays aggregate statistics for translations, edits, reviews, and comments.
- **CORS Handling**: Intelligent fallback mechanism using proxies (CodeTabs) to bypass CORS restrictions for static sites.

### 4. Design & Core
- **Aesthetic**: Minimalist Black & White theme using `JetBrains Mono` and `Fira Code` fonts.
- **Responsive**: Fully responsive grid layouts adapting to mobile and desktop.
- **Dark Mode**: Automatic system theme detection.

## 🛠️ Tech Stack

- **HTML5**: Semantic structure split across multiple pages (`repositories`, `photography`, `translations`).
- **CSS3**: Custom CSS Variables, Grid/Flexbox layouts, and animations.
- **JavaScript (ES6+)**: 
  - Vanilla JS (No frameworks).
  - `fetch` API with `Promise.all` / `Promise.allSettled` for parallel data loading.
  - Proxy integration for cross-origin requests.

## 🚀 Usage

This project is hosted on GitHub Pages.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Verginius/Verginius.github.io.git
   ```

2. **Open locally**:
   - You can open `index.html` (which redirects to `repositories.html`) or specific pages in your browser.
   - **Note on CORS**: The Translations module may require a local server or the proxy fallback to work correctly due to browser security policies.

3. **Customization**:
   - `repositories.html`: Update `GITHUB_USERNAME`.
   - `translations.html`: Update `USER_ID`.
   - `photography.html`: Update the `photoFiles` array.

## 📄 License

This project is open source. Feel free to use the code as a template for your own portfolio.
