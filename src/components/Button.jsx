import { ArrowUpRight } from 'lucide-react';

const variants = {
  primary:
    'bg-mist text-ink hover:bg-white focus-visible:outline-mist',
  secondary:
    'border border-white/[0.18] bg-white/[0.04] text-white hover:border-white/[0.35] hover:bg-white/[0.08] focus-visible:outline-white',
};

export function Button({ children, href, variant = 'primary', className = '', showArrow = true }) {
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto:');

  return (
    <a
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      <span className="inline-flex items-center gap-2">{children}</span>
      {showArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </a>
  );
}
