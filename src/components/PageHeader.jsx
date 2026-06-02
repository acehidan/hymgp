export default function PageHeader({ eyebrow, title, titleHighlight, lead }) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-green-dark/70" />
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-yellow via-green to-red" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
        {eyebrow && (
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="block w-5 h-0.5 bg-green-mid" />
            <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-green-mid">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {title}{' '}
          {titleHighlight && <span className="text-yellow">{titleHighlight}</span>}
        </h1>
        {lead && (
          <p className="mt-6 text-base lg:text-lg font-light text-white/60 max-w-xl leading-relaxed">
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}
