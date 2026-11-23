import { Mail, Send, Instagram, Video } from 'lucide-react';
import { briefQuestions, profile } from '../data/site.js';
import { Button } from './Button.jsx';

const links = [
  { label: 'Telegram', href: profile.contacts.telegram, icon: Send },
  { label: 'VK', href: profile.contacts.vk, icon: Video },
  { label: 'Instagram', href: profile.contacts.instagram, icon: Instagram },
  { label: 'Почта', href: `mailto:${profile.email}`, icon: Mail },
];

export function Contact() {
  return (
    <section id="brief" className="relative overflow-hidden bg-[#070707] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(183,215,255,0.16),transparent_28%,rgba(255,255,255,0.08)_72%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-frost/80">
            Обсудить проект
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-[1.02] text-white sm:text-7xl">
            Соберём короткий AI-ролик под задачу вашего бизнеса.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            Пришлите ответы на бриф, и я предложу формат: пробный ролик, рекламный ролик
            или отдельные AI-вставки для вашего проекта.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={profile.contacts.telegram}>Telegram</Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              Почта
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-frost/75">
              Бриф на AI-ролик
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
              Чем точнее ответы, тем быстрее получится сильный визуал.
            </h3>
            <p className="mt-4 text-sm leading-6 text-steel">
              Можно отправить ответы свободным текстом в Telegram или на почту. Необязательно
              заполнять идеально: достаточно описать задачу, материалы и желаемое настроение.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[8px] border border-white/10 bg-white/10 sm:grid-cols-2">
            {briefQuestions.map((question, index) => (
              <div key={question} className="bg-[#070707] p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-frost/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-sm leading-6 text-mist">{question}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" />
        <div className="mt-16 grid gap-px overflow-hidden rounded-[8px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex min-h-28 items-center justify-between bg-[#070707] p-5 transition hover:bg-white/[0.055]"
              >
                <span className="text-lg font-semibold text-white">{link.label}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] text-white/[0.72] transition group-hover:border-white/[0.35] group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
