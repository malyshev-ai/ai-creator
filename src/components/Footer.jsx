import { profile } from '../data/site.js';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name} — AI-видеокреатор</p>
        <a className="transition hover:text-white" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
