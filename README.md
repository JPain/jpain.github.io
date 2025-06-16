# James Pain's Personal Website & Blog

Welcome to the source code for [jpain.io](https://jpain.io) - my personal website and blog where I write about web development, AI, user experience, and technology.

## About

This site is built with [Eleventy](https://www.11ty.dev/) and focuses on sharing insights about:

- **AI & Machine Learning**: Practical applications, model efficiency, and the intersection of AI with web development
- **Web Development**: CSS tricks, JavaScript insights, frameworks like React and Next.js
- **User Experience**: Thoughts on AI UX, design patterns, and building better digital products  
- **Projects**: Behind-the-scenes looks at building real-world applications

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jpain/jpain.github.io.git
   cd jpain.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The site will be available at `http://localhost:8080`

4. **Build for production:**
   ```bash
   npm run build
   ```

## Technology Stack

This site is built with modern web technologies for performance and maintainability:

- **[Eleventy v3](https://www.11ty.dev/)** - Static site generator with zero-JavaScript output
- **Performance First** - Optimized for speed with automated image optimization, lazy loading, and minimal CSS
- **Modern Image Formats** - Automatic AVIF/WebP generation with fallbacks
- **Accessibility** - Semantic HTML, proper heading structure, and screen reader support
- **SEO Optimized** - Structured data, sitemap generation, and RSS feeds

### Key Features

- **Zero-JavaScript Frontend** - Content is exclusively pre-rendered for maximum performance
- **Automated Image Pipeline** - Images are processed on-demand during development and optimized for production
- **Content-Driven Navigation** - Navigation menu automatically updates based on content
- **Tag-Based Organization** - Auto-generated tag pages for content discovery
- **RSS/Atom Feeds** - Syndication support for blog subscribers
- **Draft Support** - Write drafts that only appear in development mode

## Project Structure

```
├── content/                 # All content (blog posts, pages)
│   ├── blog/               # Blog posts organized by date
│   ├── index.njk           # Homepage
│   └── *.md                # Static pages
├── _includes/              # Eleventy templates and layouts
│   ├── layouts/            # Page layouts (base, home, post)
│   └── postslist.njk       # Reusable post list component
├── css/                    # Stylesheets
├── public/                 # Static assets (images, icons, etc.)
├── _data/                  # Global data files
└── eleventy.config.js      # Eleventy configuration
```

## Writing Content

### Blog Posts

Create new blog posts in `content/blog/YYYY-MM-DD-post-title/`:

```markdown
---
title: Your Post Title
description: A brief description for SEO and social sharing
date: 2025-06-17
tags:
  - web development
  - AI
  - javascript
---

Your content here...
```

### Pages

Add new pages directly in the `content/` directory as `.md` or `.njk` files.

### Images

Place images alongside your content. The build process automatically:
- Generates multiple sizes and formats (AVIF, WebP, PNG/JPEG)
- Adds proper `srcset` attributes for responsive images
- Includes `width`/`height` to prevent layout shift
- Enables lazy loading for performance

## Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build for production
- `npm run debug` - Run with debug information
- `npm run benchmark` - Performance benchmarking

## Deployment

This site is designed to be deployed as a static site. The build output in `_site/` can be deployed to:

- **GitHub Pages** - Automated via GitHub Actions
- **Netlify** - Connect your repository for automatic deployments
- **Vercel** - Import project for zero-config deployment
- **Any static hosting** - Upload the `_site/` folder contents

## Development Notes

### Content Security Policy

The site uses inline CSS by default. If your hosting enforces CSP:

1. In `_includes/layouts/base.njk`, replace `<style>{% getBundle "css" %}</style>` 
2. Uncomment `<link rel="stylesheet" href="{% getBundleFileUrl "css" %}">`

### Performance

- Images are processed on-request during development for fast builds
- Production builds pre-generate all image variants
- CSS is automatically bundled and minified
- Minimal JavaScript is shipped to the client by default

## License

MIT License - feel free to use this as inspiration for your own site!

## Contact

- **Website**: [jpain.io](https://jpain.io)
- **GitHub**: [@jpain](https://github.com/jpain)

---

_Built with ❤️ using [Eleventy](https://www.11ty.dev/)_
