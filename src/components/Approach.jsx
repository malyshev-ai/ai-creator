import { motion } from 'framer-motion';
import { Clapperboard, Sparkles, Wand2 } from 'lucide-react';
import { profile } from '../data/site.js';

const pillars = [
  {
    icon: Sparkles,
    title: 'AI как визуальный язык',
    copy: 'Работа начинается с внимания и эмоции, а не со списка инструментов.',
  },
  {
    icon: Clapperboard,
    title: 'Режиссура и монтаж',
    copy: 'Кадр, ритм, атмосфера и финальная сборка работают как единая система.',
  },
  {
    icon: Wand2,
    title: 'Коммерческая подача',
    copy: 'Каждый материал собирается так, чтобы бизнес выглядел сильнее, дороже и современнее.',
  },
];

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(183,215,255,0.14),transparent_30%),radial-gradient(circle_at_90%_70%,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-frost/80">
            О подходе
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-[1.02] text-white sm:text-6xl">
            {profile.name} соединяет AI, монтаж, режиссуру и визуальный сторителлинг.
          </h2>
          <p className="mt-6 text-lg leading-8 text-steel">
            Это не шаблонный видеомонтаж. Это современный production-подход для бизнеса,
            экспертов и проектов, которым нужен сильный визуальный образ без сложной съёмки.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-[0.88fr_1.12fr] md:items-stretch">
          <motion.figure
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] shadow-glow"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover object-[58%_28%] saturate-[0.92]"
              src="./assets/dmitry-malyshev.jpg"
              alt="Дмитрий Малышев"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.02),rgba(5,5,5,0.64)_78%,rgba(5,5,5,0.92)),radial-gradient(circle_at_70%_12%,rgba(183,215,255,0.2),transparent_28%)]" />
            <figcaption className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-frost/80">
                Автор проекта
              </p>
              <p className="mt-2 text-xl font-semibold text-white">{profile.name}</p>
            </figcaption>
          </motion.figure>

          <div className="grid gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, x: 26 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.58, delay: index * 0.06, ease: 'easeOut' }}
                  className="flex gap-5 rounded-[8px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-steel">{pillar.copy}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
