# My Personal Website

Welcome to my personal website, a portfolio of my work as an electrical engineering student and developer.

**Live site**: [www.cianbrady.ie](https://www.cianbrady.ie) · [cianbrady123.github.io](https://cianbrady123.github.io)

## About

I'm Cian Brady, an electrical engineering student at UCD with a passion for robotics, AI, and creative coding. This site showcases my projects, skills, and interests in both hardware and software.

## Tech stack

- React 19 + TypeScript
- Vite
- React Router
- Hosted on GitHub Pages (custom domain via `public/CNAME`)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to preview locally.

## Deploy

Pushing to `main` only saves source code. GitHub Pages must serve the **built** app from `dist/`.

### Option A: GitHub Actions (recommended)

1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions**.
3. After the workflow runs, the site is live. Re-deploys automatically on every push to `main`.

### Option B: Manual deploy

```bash
npm run deploy
```

Then **Settings → Pages → Build and deployment**: set **Source** to **Deploy from a branch**, branch **`gh-pages`**, folder **`/ (root)`**.

### Custom domain (`www.cianbrady.ie`)

- `public/CNAME` is included in the build.
- In **Settings → Pages**, set custom domain to `www.cianbrady.ie`.
- DNS must point at GitHub Pages (A/CNAME records per [GitHub’s docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
