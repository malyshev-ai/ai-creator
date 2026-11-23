import { motion } from 'framer-motion';
import { Check, Clock, RussianRuble } from 'lucide-react';
import { fitFor, packages, serviceIntro, terms } from '../data/site.js';
import { SectionHeader } from './SectionHeader.jsx';

export function Services() {
  return (
    <section id="services" className="bg-[#08090a] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Услуги"
          title={serviceIntro.title}
          copy={serviceIntro.copy}
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {fitFor.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.03, ease: 'easeOut' }}
              className="flex min-h-20 items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.035] p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm leading-6 text-mist">{item}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {packages.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="rounded-[8px] border border-white/10 bg-ink/70 p-6 shadow-glow sm:p-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-frost/70">
                    Пакет 0{index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{item.title}</h3>
                </div>
                <div className="grid gap-2 text-sm text-mist sm:text-right">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                    <RussianRuble className="h-4 w-4 text-frost" aria-hidden="true" />
                    {item.price}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
                    <Clock className="h-4 w-4 text-frost" aria-hidden="true" />
                    {item.duration}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-base leading-7 text-steel">{item.description}</p>

              <div className="mt-7 grid gap-2 sm:grid-cols-2">
                {item.includes.map((include) => (
                  <p key={include} className="flex gap-2 text-sm leading-6 text-mist">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-frost" aria-hidden="true" />
                    <span>{include}</span>
                  </p>
                ))}
              </div>

              {item.note ? (
                <p className="mt-7 rounded-[8px] border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-steel">
                  {item.note}
                </p>
              ) : null}
            </motion.article>
          ))}
        </div>

        <div className="mt-6 rounded-[8px] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-frost/70">
            Условия
          </p>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            {terms.map((term) => (
              <p key={term} className="text-sm leading-6 text-steel">
                {term}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
