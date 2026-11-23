export const films = [
  { id: 'stillness', title: 'Arrive into Stillness', category: 'Архитектурный концепт', width: 712, height: 1288 },
  { id: 'pizza', title: 'Пицца', category: 'Продуктовый ролик', width: 1284, height: 716 },
  { id: 'afterglow', title: 'Afterglow', category: 'Имиджевый концепт', width: 720, height: 1280 },
  { id: 'wash', title: 'Премиальная мойка', category: 'Рекламный ролик', width: 720, height: 1280 },
  { id: 'pomc', title: 'ПОМЦ', category: 'Имиджевый ролик', width: 1280, height: 720, poster: 'pomc-call.webp' },
  { id: 'spa', title: 'Slow Spa', category: 'Рекламный ролик', width: 716, height: 1284 },
];

export function mediaPath(file) {
  return `${import.meta.env.BASE_URL}media/${file}`;
}
