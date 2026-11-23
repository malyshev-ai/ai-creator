import { navigation, profile } from '../data/site.js';

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-semibold text-white shadow-glow backdrop-blur-xl transition hover:border-white/25"
        >
          {profile.name}
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/25 p-1 backdrop-blur-xl md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.08] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
