import { motion } from 'framer-motion';
import { Film, PlayCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { works } from '../data/works.js';
import { SectionHeader } from './SectionHeader.jsx';

const toneClasses = {
  silver: 'from-white/[0.18] via-frost/[0.14] to-transparent',
  blue: 'from-frost/[0.24] via-blue-500/10 to-transparent',
  warm: 'from-amber-200/[0.18] via-white/[0.08] to-transparent',
  graphite: 'from-white/10 via-zinc-400/10 to-transparent',
};

function WorkCard({ work, index, onPlay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.05, ease: 'easeOut' }}
      className={`group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035] ${
        work.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="relative aspect-video overflow-hidden bg-graphite">
        <div className="absolute inset-0">
          {work.coverUrl ? (
            <img
              className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-85"
              src={work.coverUrl}
              alt=""
              loading="lazy"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${toneClasses[work.tone]}`} />
          )}
          <div className={`absolute inset-0 bg-gradient-to-br ${toneClasses[work.tone]}`} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.05),rgba(5,5,5,0.68)),radial-gradient(circle_at_70%_22%,rgba(255,255,255,0.18),transparent_24%)]" />
          <button
            type="button"
            onClick={() => onPlay(work)}
            className="absolute inset-0 flex items-center justify-center text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-white"
            aria-label={`Смотреть видео: ${work.title}`}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/35 shadow-glow backdrop-blur-xl transition duration-300 group-hover:scale-105 group-hover:border-white/45 group-hover:bg-white group-hover:text-ink">
              <PlayCircle className="h-7 w-7" aria-hidden="true" />
            </span>
          </button>
          <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white/[0.82]">
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">Смотреть на сайте</span>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08] transition duration-500 group-hover:ring-white/[0.18]" />
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="rounded-full border border-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-frost/80">
            {work.format}
          </span>
          <Film className="h-4 w-4 text-white/[0.38]" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-white">{work.title}</h3>
        <p className="mt-3 text-sm leading-6 text-steel">{work.description}</p>
      </div>
    </motion.article>
  );
}

function VideoModal({ work, onClose }) {
  useEffect(() => {
    if (!work) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [work, onClose]);

  if (!work) return null;

  const isVertical = work.playerAspect === 'vertical';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/82 px-4 py-6 backdrop-blur-xl">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Закрыть видео"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`relative w-full overflow-hidden rounded-[8px] border border-white/12 bg-ink shadow-glow ${
          isVertical ? 'max-w-[430px]' : 'max-w-5xl'
        }`}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-frost/70">
              VK-видео
            </p>
            <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">{work.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 text-white/75 transition hover:border-white/35 hover:text-white"
            aria-label="Закрыть"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className={`${isVertical ? 'aspect-[9/16]' : 'aspect-video'} bg-black`}>
          <iframe
            className="h-full w-full"
            src={work.embedUrl}
            title={work.title}
            loading="lazy"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            allowFullScreen
          />
        </div>
      </motion.div>
    </div>
  );
}

export function Portfolio() {
  const [activeWork, setActiveWork] = useState(null);

  return (
    <section id="works" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-px w-[82vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader eyebrow="Работы" title="Портфолио AI-роликов" />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <WorkCard key={work.sourceUrl} work={work} index={index} onPlay={setActiveWork} />
          ))}
        </div>
      </div>
      <VideoModal work={activeWork} onClose={() => setActiveWork(null)} />
    </section>
  );
}
