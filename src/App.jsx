import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react';
import { Gallery } from './components/Gallery.jsx';
import { mediaPath } from './data/filmography.js';
import { packages, profile, terms } from './data/site.js';

const services = [
  { ...packages[0], title: 'Короткий AI-ролик', duration: '5–10 секунд', description: 'Для тизеров, анонсов и короткой рекламы.' },
  { ...packages[1], title: 'Рекламный AI-ролик', duration: '15–20 секунд', description: 'Для рекламы и презентаций продуктов и брендов.' },
  { title: 'Видеомонтаж', price: 'По запросу', description: 'Монтаж из ваших материалов, подбор музыки и оформление звука.' },
];

const steps = [
  'Обсуждение задачи',
  'Идея и визуальная концепция',
  'Генерация, анимация и монтаж',
  'Финальная версия ролика',
];

export default function App() {
  return (
    <>
      <header className="site-header" id="top">
        <div className="wrap header-inner">
          <a className="wordmark" href="#top" aria-label="Дмитрий Малышев, наверх">МАЛЫШЕВ<span>.</span></a>
          <nav aria-label="Основная навигация">
            <a href="#works">Работы</a>
            <a href="#about">Обо мне</a>
            <a href="#services">Услуги</a>
          </nav>
          <a className="header-contact" href="#contact">Контакты <ArrowUpRight aria-hidden="true" size={16} /></a>
        </div>
      </header>
      <main>
        <section className="hero" aria-labelledby="intro-title">
          <img className="hero-image" src={mediaPath('stillness-hero.webp')} alt="" fetchPriority="high" />
          <div className="wrap hero-inner">
            <p className="eyebrow">AI-креатор / Режиссёр монтажа</p>
            <h1 id="intro-title">Дмитрий Малышев</h1>
            <p className="hero-lead">Рекламные AI-видео и монтаж для бизнеса</p>
            <p className="muted hero-copy">От идеи и визуальной концепции до финального монтажа и звукового оформления.</p>
            <div className="actions">
              <a className="action action-primary" href="#works">Смотреть работы <ArrowDown aria-hidden="true" size={17} /></a>
              <a className="action action-secondary" href="#contact">Обсудить проект <ArrowUpRight aria-hidden="true" size={17} /></a>
            </div>
          </div>
        </section>
        <Gallery />
        <section className="band" id="about" aria-labelledby="about-title">
          <div className="wrap about">
            <img className="portrait" src={`${import.meta.env.BASE_URL}assets/dmitry-malyshev.jpg`} alt="Дмитрий Малышев" width="1254" height="1254" loading="lazy" />
            <div>
              <h2 id="about-title">Обо мне</h2>
              <p className="section-lead">Создаю рекламные и имиджевые AI-ролики. Работаю с идеей, изображением и ритмом как режиссёр монтажа.</p>
              <p className="muted">Разрабатываю визуальную концепцию, генерирую и анимирую кадры, собираю историю в монтаже. Подбираю музыку и оформляю звук, чтобы они работали вместе с изображением.</p>
            </div>
          </div>
        </section>
        <section className="band" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <h2 id="services-title">Услуги</h2>
            <div className="services">
              {services.map((service) => (
                <article className="service" key={service.title}>
                  <h3>{service.title}</h3>
                  <p className="price">{service.price}</p>
                  <p className="muted service-description">{service.duration && <>{service.duration}. </>}{service.description}</p>
                  {service.includes && (
                    <details>
                      <summary>Что входит <Plus size={17} aria-hidden="true" /></summary>
                      <ul>{service.includes.slice(1).map((item) => <li key={item}>{item}</li>)}</ul>
                    </details>
                  )}
                </article>
              ))}
            </div>
            <details className="terms">
              <summary>Сроки и условия <Plus size={17} aria-hidden="true" /></summary>
              <ul>{terms.map((term) => <li key={term}>{term}</li>)}</ul>
            </details>
          </div>
        </section>
        <section className="band" aria-labelledby="process-title">
          <div className="wrap">
            <h2 id="process-title">Как я работаю</h2>
            <ol className="steps">
              {steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        </section>
        <section className="band contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact-inner">
            <div>
              <h2 id="contact-title">Обсудить проект</h2>
              <p className="muted">Расскажите о задаче и где планируете показать ролик.</p>
            </div>
            <div className="actions">
              <a className="action action-primary" href={profile.contacts.telegram}>Telegram <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="action action-secondary" href={profile.contacts.vk}>VK <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="action action-secondary" href={`mailto:${profile.email}`}>Email <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner"><span>Дмитрий Малышев</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
      </footer>
    </>
  );
}
