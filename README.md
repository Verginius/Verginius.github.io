# Verginius.github.io

My personal portfolio and repository hub, designed with a minimalist, retro-terminal aesthetic. This static site automatically fetches and displays my original projects from GitHub.

## 🌟 Features

- **Dynamic Content**: Uses the [GitHub API](https://docs.github.com/en/rest) to fetch user profile information and repository lists.
- **Smart Filtering**: Automatically displays only original repositories (excluding forks).
- **Responsive Design**: Adapts layout for desktop and mobile screens.
- **Theme Support**: Automatically respects system dark/light mode preferences.
- **Typography**: Uses `JetBrains Mono` and `Fira Code` for a consistent coding environment feel.

## 🛠️ Tech Stack

- **HTML5**: Semantic structure.
- **CSS3**: Custom styling with CSS Variables for theming and Flexbox/Grid for layout.
- **JavaScript (ES6+)**: Vanilla JS for API fetching and DOM manipulation (No frameworks required).

## 🚀 Usage

This project is tailored for GitHub Pages.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Verginius/Verginius.github.io.git
   ```

2. **Open locally**:
   Simply open `index.html` in your web browser to view the site. Note that GitHub API rate limits may be stricter when running locally without authentication.

3. **Customization**:
   - Update the `GITHUB_USERNAME` constant in the `<script>` section of `index.html` to display your own repositories.
   - Modify CSS variables in the `:root` section to change the color scheme.

## 📄 License

This project is open source. Feel free to use the code as a template for your own portfolio.
