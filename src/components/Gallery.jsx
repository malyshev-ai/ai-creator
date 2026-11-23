import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { films, mediaPath } from '../data/filmography.js';

export function Gallery() {
  const [active, setActive] = useState(null);
  const [failed, setFailed] = useState(false);
  const dialog = useRef(null);
  const video = useRef(null);
  const opener = useRef(null);
  const closeButton = useRef(null);
  const film = active === null ? null : films[active];

  function open(index, button) {
    opener.current = button;
    setFailed(false);
    setActive(index);
    dialog.current.showModal();
    closeButton.current.focus();
  }

  function close() {
    video.current?.pause();
    setActive(null);
    opener.current?.focus({ preventScroll: true });
  }

  function switchFilm(offset) {
    video.current?.pause();
    setFailed(false);
    setActive((index) => (index + offset + films.length) % films.length);
  }

  useEffect(() => {
    if (film) video.current?.play().catch(() => {});
  }, [film]);

  return (
    <section id="works" className="gallery band" aria-labelledby="works-title">
      <div className="wrap">
        <h2 id="works-title">Избранные работы</h2>
        <div className="film-grid">
          {films.map((item, index) => (
            <article key={item.id}>
              <button className="film" type="button" aria-haspopup="dialog" aria-label={`Смотреть: ${item.title}`} onClick={(event) => open(index, event.currentTarget)}>
                <span className={`film-cover film-cover-${item.id}`}>
                  <img src={mediaPath(item.poster ?? `${item.id}.webp`)} alt="" loading={index < 3 ? 'eager' : 'lazy'} decoding="async" />
                  <span className="play-icon"><Play size={17} fill="currentColor" aria-hidden="true" /></span>
                </span>
                <span className="film-caption">
                  <span className="film-name">{item.title}</span>
                  <span className="film-category">{item.category}</span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
      <dialog className="player" ref={dialog} aria-labelledby="player-title" onClose={close}>
        <header className="player-header">
          <h2 id="player-title">{film?.title}</h2>
          <div className="player-actions">
            <button className="icon-button" type="button" aria-label="Предыдущая работа" onClick={() => switchFilm(-1)}><ChevronLeft size={20} aria-hidden="true" /></button>
            <button className="icon-button" type="button" aria-label="Следующая работа" onClick={() => switchFilm(1)}><ChevronRight size={20} aria-hidden="true" /></button>
            <button className="icon-button" type="button" aria-label="Закрыть плеер" ref={closeButton} onClick={() => dialog.current.close()}><X size={20} aria-hidden="true" /></button>
          </div>
        </header>
        {film && (
          <div className="player-stage">
            <video
              key={film.id}
              ref={video}
              src={mediaPath(`${film.id}.mp4`)}
              poster={mediaPath(film.poster ?? `${film.id}.webp`)}
              aria-label={film.title}
              width={film.width}
              height={film.height}
              controls
              playsInline
              preload="metadata"
              onError={() => setFailed(true)}
            />
            {failed && <p role="status" className="player-status">Видео не загрузилось. Закройте плеер и попробуйте открыть работу снова.</p>}
          </div>
        )}
      </dialog>
    </section>
  );
}
