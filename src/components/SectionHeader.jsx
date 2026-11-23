export function SectionHeader({ eyebrow, title, copy, align = 'left' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-frost/80">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-[1.05] text-white sm:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-steel sm:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
