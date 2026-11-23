import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Send } from 'lucide-react';
import { profile, stats } from '../data/site.js';
import { Button } from './Button.jsx';

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 120]);
  const copyY = useTransform(scrollY, [0, 700], [0, -42]);

  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden pt-28 sm:min-h-screen">
      <motion.img
        style={{ y: imageY }}
        className="absolute inset-0 h-[115%] w-full object-cover opacity-78"
        src="./assets/hero-ai-production.png"
        alt=""
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(183,215,255,0.18),transparent_34%),linear-gradient(90deg,rgba(5,5,5,0.97)_0%,rgba(5,5,5,0.72)_43%,rgba(5,5,5,0.34)_100%)]" />
      <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-soft-light" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <motion.div
        style={{ y: copyY }}
        className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-5 pb-14 sm:min-h-[calc(100vh-7rem)] sm:px-8 sm:pb-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-5 max-w-fit rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-frost/[0.85] backdrop-blur-md"
        >
          {profile.role}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.85, ease: 'easeOut' }}
          className="max-w-5xl text-balance text-[clamp(3.35rem,8vw,8.4rem)] font-semibold leading-[0.88] text-white"
        >
          AI-ролики, после которых бизнес выглядит сильнее.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.85, ease: 'easeOut' }}
          className="mt-7 max-w-2xl text-lg leading-8 text-mist/[0.78] sm:text-xl"
        >
          Короткие AI-ролики для бизнеса, экспертов и личных проектов: реклама,
          презентации, соцсети, сайты и визуальная упаковка продукта или услуги.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.75, ease: 'easeOut' }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Button href="#works" className="sm:min-w-44" showArrow={false}>
            <Play aria-hidden="true" className="h-4 w-4" />
            Смотреть работы
          </Button>
          <Button href={profile.contacts.telegram} variant="secondary" className="sm:min-w-40" showArrow={false}>
            <Send aria-hidden="true" className="h-4 w-4" />
            Связаться
          </Button>
        </motion.div>
        <div className="mt-14 grid max-w-2xl grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-white/[0.13] pt-4">
              <p className="text-xl font-semibold text-white sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-steel">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
