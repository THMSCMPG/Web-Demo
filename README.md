# Your Site

This repository now serves user-facing pages as plain `.html` files so every page uses the same shared CSS/JS and renders consistently.

## Pages & Templates

- Main catalog: `index.html`
- Main site pages: `example-home.html`, `about.html`, `work.html`, `blog.html`
- Blog post pages: `/blog/*.html`
- Project pages: `/work/*.html`
- Reusable client templates: `/templates/*.html`
- Template browser: `templates/index.html`

### How to create a new page

1. Copy the closest file from `/templates/`.
2. Rename it to your new page filename (for example: `my-new-page.html`).
3. Replace the placeholder headline/body/CTA text.
4. Add a link to the new page from the relevant navigation/index page.

### Required assets in every page `<head>`

All pages should include:

- `https://fonts.googleapis.com` / `https://fonts.gstatic.com` font preconnect + stylesheet
- `/Web-Demo/assets/css/main.css`
- Theme/accent script/style block used in existing HTML pages
- `/Web-Demo/assets/js/main.js` before `</body>`

## Local preview (optional)

Because the site is now static HTML, you can preview it with any static server, or continue using GitHub Pages deployment.
