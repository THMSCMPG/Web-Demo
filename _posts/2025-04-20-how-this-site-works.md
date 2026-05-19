---
title: "How This Site Works"
date:  2025-04-20
description: "A plain-English explanation of the tools behind this site."
tags:  [Behind the Scenes]
---

This site runs on [Jekyll](https://jekyllrb.com) and is hosted on [GitHub Pages](https://pages.github.com).
Both are free.

## Why this setup

- **No monthly fees.** GitHub Pages hosting costs nothing.
- **No CMS to log in to.** Writing happens directly in this folder.
- **Fast.** Just static HTML — no database, no server processing.
- **Safe.** Every change is saved in Git history. You can always roll back.

## The only things you ever touch

| What you want to do | What you do |
|---|---|
| Change site name / tagline | Edit `_config.yml` |
| Write a blog post | Add a `.md` file to `_posts/` |
| Add a project | Add a `.md` file to `_projects/` |
| Update your About page | Edit `about.md` |
| Add an image | Drop it in `assets/img/` |

Everything else — the layout, navigation, styling, and all the code — is managed separately and updates automatically.

## What happens after you commit

GitHub sees the new file, runs Jekyll, and rebuilds the HTML.
The live site updates within about 60 seconds.
