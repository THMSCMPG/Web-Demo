# Your Site

This is your complete website. Everything you need to update it yourself is in this folder.
You only ever need to edit the files listed below — nothing else.

---

## The files you work with

| File / Folder | What it is | When you edit it |
|---|---|---|
| `_config.yml` | Global settings | Change site name, tagline, social links, accent colour |
| `index.md` | Homepage | Change your headline, sub-headline, or call-to-action |
| `about.md` | About page | Update your bio |
| `_posts/` | Blog posts | Add a new `.md` file here for every new post |
| `_projects/` | Portfolio projects | Add a new `.md` file here for every new project |
| `assets/img/` | Images | Drop any image files here |

**Never touch:** `_layouts/`, `_includes/`, `assets/css/`, `assets/js/`

---

## How to write a blog post

1. Go into the `_posts/` folder.
2. Duplicate any existing post.
3. Rename the file using this exact pattern: `YYYY-MM-DD-your-post-title.md`
   - Example: `2025-06-15-summer-update.md`
   - The date controls where it appears in the list — newest first.
4. Open the file and update the front matter (the block between the `---` lines):

```yaml
---
title: "Your Post Title"
date:  2025-06-15
description: "One sentence that appears in search results and link previews."
tags:  [Updates]          # one or more tags in this format
cover: /assets/img/your-image.jpg   # delete this line if no cover image
---
```

5. Write your post below the second `---` in Markdown.
6. Save and commit. Your post is live within about 60 seconds.

---

## How to add a project

Same idea. Go into `_projects/`, duplicate an existing file, rename it, and fill in:

```yaml
---
title: "Project Name"
description: "One sentence summary."
date:   2025-06-01
client: "Client Name"
year:   2025
role:   "Design & Development"
tags:   [Small Business]
cover:  /assets/img/your-cover.jpg    # optional but recommended
url_live: https://example.com         # optional
---
```

Then write about the project below the second `---`.

---

## How to add an image

1. Drop the image file into the `assets/img/` folder.
2. Reference it anywhere in Markdown like this:

```markdown
![Description of image](/assets/img/your-filename.jpg)
```

Or set it as a cover in a post or project's front matter:

```yaml
cover: /assets/img/your-filename.jpg
```

**Tip:** Keep images under 1MB for fast page loads.
Tools like [Squoosh](https://squoosh.app) (free, in-browser) can compress them.

---

## How to change your site name or colours

Open `_config.yml`. The top half is all clearly labelled and commented.
The `accent_color` line controls the brand colour used for links, tags, and highlights.

---

## How to preview locally (optional)

If you want to see changes before pushing them live:

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000` in your browser.
This requires Ruby — if you don't have it set up, just push and preview on GitHub Pages directly.

---

## Something broke?

Before reaching out, check:

1. Is the file named correctly? (`YYYY-MM-DD-title.md` for posts)
2. Is the front matter valid? (No missing `---`, no stray tabs)
3. Did the GitHub Pages build succeed? (Go to your repo → Actions tab — a green check means it worked)

If all three look fine and it's still broken, get in touch.
