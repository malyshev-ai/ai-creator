# Дмитрий Малышев — AI Video Creator Portfolio

Static one-page portfolio for a premium AI video creator / AI commercial director. Built for GitHub Pages with React, Vite, Tailwind and Framer Motion.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

The project uses `base: './'` in `vite.config.js`, so the built site works from a GitHub Pages project subpath even before the repository name is known.

Do not use the source `index.html` as the production preview. If you open it directly through `file://`, the page can only show the built-in fallback message because the browser cannot compile React JSX, imports, Tailwind and Framer Motion by itself. Use `npm run dev` while editing, or open the built output after `npm run build`.

## Update Contacts And Copy

Edit profile, navigation, services and small stats in:

```text
src/data/site.js
```

Current contacts:

- Telegram: `https://t.me/dmi_mv`
- VK: `https://vk.com/vm_editstudio`
- Email: `mv_dm@mail.ru`
- Instagram: `https://www.instagram.com/editstudio.video/`

## Add VK Videos

Portfolio items live in:

```text
src/data/works.js
```

For each work, paste a VK embed URL into `embedUrl`:

```js
{
  title: 'Название работы',
  format: 'AI-ролик',
  description: 'Короткое описание задачи и визуальной идеи.',
  sourceUrl: 'https://vk.com/wall-...',
  embedUrl: 'https://vk.com/video_ext.php?oid=...&id=...&hash=...',
  coverUrl: 'https://...',
  featured: true,
  tone: 'silver',
}
```

The site shows `coverUrl` in the portfolio grid and opens `embedUrl` in a modal window, so visitors watch the VK video without leaving the site. `sourceUrl` is kept only as the original VK post reference.

## GitHub Pages Deployment

1. Push the project to GitHub.
2. Run `npm run build`.
3. Deploy the generated `dist/` folder with your preferred GitHub Pages workflow.

For a simple GitHub Actions setup, publish `dist/` as the Pages artifact after `npm ci` and `npm run build`.

## Structure

```text
public/assets/hero-ai-production.png
public/assets/dmitry-malyshev.jpg
src/components/
src/data/site.js
src/data/works.js
src/styles/index.css
vite.config.js
```

No backend, SSR, database or serverless functions are required.
