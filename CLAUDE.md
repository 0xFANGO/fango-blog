# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: Start development server at `localhost:4321`
- `npm run build`: Build production site to `./dist/`
- `npm run preview`: Preview production build locally
- `npm run astro`: Run Astro CLI commands

## Deployment

- Automatic deployment to GitHub Pages via GitHub Actions
- Triggered on push to `main` branch
- Update `site` URL in `astro.config.mjs` to match your GitHub Pages URL

## Architecture

This is an Astro blog site with the following structure:

- **Content Management**: Blog posts are stored in `src/content/blog/` as Markdown/MDX files with frontmatter validation via `src/content.config.ts`
- **Blog Schema**: Posts require `title`, `description`, `pubDate`, and optionally `updatedDate` and `heroImage`
- **Site Configuration**: Global constants in `src/consts.ts` (SITE_TITLE, SITE_DESCRIPTION)
- **RSS Feed**: Generated from blog collection at `/rss.xml` via `src/pages/rss.xml.js`
- **Routing**: Dynamic blog routes handled by `src/pages/blog/[...slug].astro`
- **Layouts**: Main blog post layout in `src/layouts/BlogPost.astro`
- **Integrations**: Uses @astrojs/mdx for enhanced Markdown and @astrojs/sitemap for SEO

The site uses Astro's content collections API to manage blog posts with type-safe frontmatter validation.