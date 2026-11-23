# Портфолио Дмитрия Малышева

React и Vite. Публичный адрес: https://malyshev-ai.github.io/ai-creator/

## Локальная работа

```sh
npm ci
npm run dev
npm run build
npm run preview
```

В `src/App.jsx` находится структура страницы, в `src/data/site.js` контакты и условия работы, в `src/data/filmography.js` список роликов. Галерея и плеер находятся в `src/components/Gallery.jsx`, стили в `src/styles/portfolio.css`.

## Видео

Файлы в `public/media` копируются в сборку Vite. Для каждой работы плеер берёт `<id>.mp4`, а галерея показывает `<id>.webp`. Укажите название, категорию и исходные размеры в `filmography.js`. Для веб-версий используйте H.264 (yuv420p), AAC и `-movflags +faststart`. Храните исходники отдельно от публикуемой папки.

## GitHub Pages

В Settings → Pages задан источник Deploy from a branch, ветка `main`, папка `/docs`. Скопируйте полный результат `dist` в `docs` и отправьте исходники и сборку одним коммитом. Относительные пути Vite работают в подкаталоге `/ai-creator/`. Файл Google Search Console и `.nojekyll` находятся в `public` и автоматически попадают в сборку.
