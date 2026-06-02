import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'

const sectors = [
  { num: '01', name: 'Pharmaceutical Distribution' },
  { num: '02', name: 'Robotics & Engineering' },
  { num: '03', name: 'Solar Power Development' },
  { num: '04', name: 'MSME Trade Services' },
]

const approaches = [
  {
    num: '01',
    color: 'bg-green-light text-green-dark',
    title: 'Sector-Focused Expertise',
    text: 'Each of our business units is built with deep knowledge of its respective industry from pharmaceutical supply chains to renewable energy regulation and robotics engineering.',
  },
  {
    num: '02',
    color: 'bg-yellow-light text-yellow-dark',
    title: 'Technology as a Foundation',
    text: 'We integrate technology into our operations and offerings from smart retail systems and robotics to digital tools that support MSME businesses.',
  },
  {
    num: '03',
    color: 'bg-red-light text-red-dark',
    title: 'Partnership-Driven Growth',
    text: 'We actively seek partners investors, technology providers, and institutional collaborators whose expertise and resources align with our development objectives.',
  },
  {
    num: '04',
    color: 'bg-green-light text-green-dark',
    title: 'Governance & Responsibility',
    text: 'We conduct our business in full alignment with applicable regulations and standards, maintaining the governance structures required to engage confidently with institutional and government partners.',
  },
]

const commitments = [
  'Regulatory Compliance',
  'Institutional Partnerships',
  'Sustainable Development',
  'Technology Integration',
  'Community Impact',
  'National Development',
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About HYM GP International"
        titleHighlight=""
        lead="A Myanmar-based enterprise committed to building capable, responsible, and future-ready businesses across critical sectors of the economy."
      />

      {/* WHO WE ARE */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="block w-5 h-0.5 bg-green" />
                <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-green">
                  Who We Are
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-[2rem] font-bold text-dark leading-tight">
                Purposeful Growth Across{' '}
                <span className="text-green">Strategic Sectors</span>
              </h2>
              <div className="mt-5 text-[0.9rem] text-slate-2 leading-[1.9] space-y-4">
                <p>
                  HYM GP International Co., Ltd is a Myanmar-based multi-sector company
                  with active operations spanning pharmaceutical distribution, robotics
                  and engineering, solar power development, and MSME trade services.
                </p>
                <p>
                  We operate with a long-term perspective building each business unit
                  with the rigour, structure, and professionalism required to serve
                  partners, clients, and communities with integrity.
                </p>
                <p>
                  Across every sector we enter, our commitment remains consistent: to
                  deliver measurable value, uphold the highest standards, and contribute to
                  Myanmar's growth as a capable, reliable enterprise.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 mt-6 text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-green no-underline hover:gap-3 hover:text-green-dark transition-all"
              >
                Explore our services <span className="text-base">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <div className="relative bg-dark p-8 lg:p-10 text-white mb-px">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green" />
                <p className="text-[0.58rem] font-semibold tracking-[0.22em] uppercase text-green-mid mb-3">
                  Our Identity
                </p>
                <p className="font-heading text-lg lg:text-[1.15rem] font-normal italic leading-relaxed text-white/88">
                  "We are a company built on the belief that Myanmar's development
                  requires enterprises that can operate with discipline, innovation, and a
                  clear sense of national responsibility."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-light-2">
                {sectors.map((s, i) => {
                  const colors = ['border-t-green', 'border-t-yellow', 'border-t-red', 'border-t-green-mid']
                  return (
                    <div
                      key={i}
                      className={`bg-light p-5 border-t-[3px] ${colors[i]} hover:bg-white transition-colors`}
                    >
                      <p className="text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-muted mb-1">
                        {s.num}
                      </p>
                      <p className="text-[0.85rem] font-medium text-dark">{s.name}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-16 lg:py-24 bg-light border-t border-light-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="block w-5 h-0.5 bg-green" />
                <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-green">
                  Our Approach
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-[2rem] font-bold text-dark leading-tight">
                How We <span className="text-green">Operate</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-px">
            {approaches.map((a, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="bg-white p-7 lg:p-8 flex gap-5 items-start hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`w-9 h-9 shrink-0 flex items-center justify-center text-[0.7rem] font-bold tracking-wide ${a.color}`}
                  >
                    {a.num}
                  </div>
                  <div>
                    <h3 className="text-[0.9rem] font-semibold text-dark mb-1.5">
                      {a.title}
                    </h3>
                    <p className="text-[0.83rem] text-slate-2 leading-[1.75]">
                      {a.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 lg:py-24 bg-green-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 grid md:grid-cols-2 gap-px">
          <ScrollReveal>
            <div className="bg-white/[0.04] p-10 lg:p-14 border-r border-white/[0.08]">
              <p className="text-[0.58rem] font-semibold tracking-[0.28em] uppercase text-yellow mb-4">
                Our Vision
              </p>
              <p className="font-heading text-lg lg:text-[1.4rem] font-normal italic leading-relaxed text-white/90">
                "To become a leading multi-sector enterprise that drives sustainable
                development, technological advancement, and economic inclusion across
                Myanmar and the wider region."
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-white/[0.02] p-10 lg:p-14">
              <p className="text-[0.58rem] font-semibold tracking-[0.28em] uppercase text-yellow mb-4">
                Our Mission
              </p>
              <p className="font-heading text-lg lg:text-[1.4rem] font-normal italic leading-relaxed text-white/90">
                "To deliver reliable, innovative, and responsible services across
                healthcare, technology, energy, and trade creating lasting value for
                communities, partners, and all our stakeholders."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 xl:px-12 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 mb-4 justify-center">
              <span className="block w-5 h-0.5 bg-green" />
              <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-green">
                Our Commitment
              </span>
            </div>
            <h2 className="font-heading text-3xl lg:text-[2rem] font-bold text-dark leading-tight">
              Built for the <span className="text-green">Long Term</span>
            </h2>
            <p className="mt-5 text-[0.92rem] text-slate-2 leading-[1.9]">
              We hold ourselves to a standard that supports institutional confidence and
              sustainable outcomes operating with transparency, accountability, and a
              clear orientation toward the public good.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {commitments.map((tag, i) => (
              <ScrollReveal key={tag} delay={0.05 * i}>
                <span
                  className="inline-block text-[0.65rem] font-medium tracking-wider px-5 py-2 border border-light-2 text-slate hover:bg-green-light hover:text-green-dark hover:border-green transition-all duration-200"
                >
                  {tag}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-16 bg-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <ScrollReveal>
            <div>
              <h2 className="font-heading text-xl lg:text-[1.8rem] font-bold text-dark leading-tight">
                Ready to Partner With HYM GP International?
              </h2>
              <p className="mt-1 text-[0.85rem] text-dark/65">
                We welcome enquiries from investors, technology partners, distributors,
                and institutional bodies.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link
              to="/contact"
              className="px-10 py-3.5 bg-dark text-white text-[0.72rem] font-semibold tracking-[0.14em] uppercase no-underline hover:bg-green-dark transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
