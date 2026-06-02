import { Link } from 'react-router-dom'

const sectors = [
  { color: 'border-l-green', num: 'Sector 01', title: 'Pharmaceutical Distribution' },
  { color: 'border-l-yellow', num: 'Sector 02', title: 'Robotics & Engineering' },
  { color: 'border-l-red', num: 'Sector 03', title: 'Solar Power Development' },
  { color: 'border-l-green-mid', num: 'Sector 04', title: 'MSME Trade Services' },
]

const services = [
  {
    num: '01',
    title: 'Pharmaceutical Distribution',
    desc: 'Supplying quality pharmaceutical products to healthcare providers across Myanmar with a commitment to safe, reliable, and efficient distribution.',
    link: '/services#pharma',
    image: '/home-pharmacy.png',
    hoverBorder: 'hover:border-t-green',
    hoverBg: 'hover:bg-green-light',
  },
  {
    num: '02',
    title: 'Robotics & Engineering',
    desc: 'Pioneering robotics innovation in Myanmar through robot development, robotics cafés, and smart shop solutions bringing intelligent technology to everyday spaces.',
    link: '/services#robotics',
    image: '/home-robotic.png',
    hoverBorder: 'hover:border-t-yellow',
    hoverBg: 'hover:bg-yellow-light',
  },
  {
    num: '03',
    title: 'Solar Power Development',
    desc: 'Backed by site data, regulatory research, and detailed planning, we are developing solar farm projects in Myanmar. We welcome investment and technology partners.',
    link: '/services#solar',
    image: '/home-solar.png',
    hoverBorder: 'hover:border-t-red',
    hoverBg: 'hover:bg-red-light',
  },
  {
    num: '04',
    title: 'MSME Trade Services',
    desc: 'Supporting small and medium enterprises in Myanmar with reliable trade services helping local businesses grow and connect with wider markets.',
    link: '/services#msme',
    image: '/home-trading.png',
    hoverBorder: 'hover:border-t-green-mid',
    hoverBg: 'hover:bg-green-light',
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-dark overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-green-dark/80" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, #1E8A3C 0, #1E8A3C 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #1E8A3C 0, #1E8A3C 1px, transparent 1px, transparent 40px)',
            }}
          />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-yellow via-green to-red" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 py-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="block w-6 h-0.5 bg-yellow" />
              <span className="font-heading text-[0.65rem] font-medium tracking-[0.28em] uppercase text-yellow">
                HYM GP International Co., Ltd
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] tracking-tight">
              Driving Growth
              <span className="block text-green-mid">Across Myanmar's</span>
              Key Industries
            </h1>
            <p className="mt-6 text-base lg:text-[0.95rem] font-light text-white/60 max-w-lg leading-relaxed">
              A multi-sector company committed to advancing healthcare distribution,
              technology innovation, clean energy, and trade development across Myanmar
              and beyond.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-8 py-3.5 bg-green text-white text-[0.72rem] font-semibold tracking-[0.14em] uppercase no-underline border-2 border-green hover:bg-green-dark hover:border-green-dark transition-all duration-200 hover:-translate-y-0.5"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-transparent text-white text-[0.72rem] font-medium tracking-[0.14em] uppercase no-underline border-2 border-white/25 hover:border-yellow hover:text-yellow transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-px">
            {sectors.map((s, i) => (
              <div
                key={i}
                className={`bg-white/[0.04] border border-white/[0.06] border-l-[3px] ${s.color} p-6 hover:bg-white/[0.07] transition-colors duration-300`}
              >
                <p className="text-[0.58rem] font-medium tracking-[0.2em] uppercase text-muted-2 mb-1.5">
                  {s.num}
                </p>
                <p className="text-[0.95rem] font-medium text-white/90">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 lg:py-24 bg-light border-y border-light-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="block w-5 h-0.5 bg-green" />
              <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-green">
                Who We Are
              </span>
            </div>
            <h2 className="font-heading text-3xl lg:text-[2rem] font-bold text-dark leading-tight">
              A Trusted Partner for{' '}
              <span className="text-green">Multi-Sector Growth</span>
            </h2>
            <div className="mt-5 text-[1rem] text-slate-2 leading-[1.9] space-y-4">
              <p>
                HYM GP International Co., Ltd is a Myanmar-based company operating across
                four strategic sectors: pharmaceutical distribution, robotics and
                engineering, solar power, and MSME trade services.
              </p>
              <p>
                We are committed to building sustainable, technology-driven businesses
                that contribute meaningfully to Myanmar's economic development with a
                focus on quality, responsibility, and long-term partnerships.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-green no-underline hover:gap-3 hover:text-green-dark transition-all"
            >
              Learn about our company <span className="text-base">&rarr;</span>
            </Link>
          </div>

          <div className="flex flex-col gap-px">
            <div className="bg-white p-7 border-l-4 border-green shadow-sm">
              <p className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-muted mb-2">
                Our Vision
              </p>
              <p className="text-[0.88rem] text-slate leading-relaxed">
                To become a leading multi-sector enterprise that drives sustainable
                development and technological advancement in Myanmar and the wider region.
              </p>
            </div>
            <div className="bg-white p-7 border-l-4 border-yellow shadow-sm">
              <p className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-muted mb-2">
                Our Mission
              </p>
              <p className="text-[0.95rem] text-slate leading-relaxed">
                To deliver reliable, innovative, and responsible services across
                healthcare, technology, energy, and trade creating lasting value for
                communities, partners, and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 lg:py-24 bg-white border-b border-light-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="block w-5 h-0.5 bg-green" />
              <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-green">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-heading text-3xl lg:text-[2rem] font-bold text-dark leading-tight">
              Built on <span className="text-green">Capability</span>
            </h2>
            <p className="mt-4 text-[1rem] text-slate-2 leading-[1.8]">
              We combine deep industry knowledge with technology-driven solutions to
              deliver measurable results across every sector we operate in.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-light-2">
            {[
              {
                num: '01',
                color: 'bg-green-light text-green-dark',
                title: 'Sector Expertise',
                text: 'Deep knowledge across healthcare, engineering, energy, and trade sectors.',
              },
              {
                num: '02',
                color: 'bg-yellow-light text-yellow-dark',
                title: 'Technology-Driven',
                text: 'Robotics, AI, and smart systems integrated into every business unit.',
              },
              {
                num: '03',
                color: 'bg-red-light text-red-dark',
                title: 'Trusted Partnerships',
                text: 'Strong relationships with international investors, suppliers, and institutions.',
              },
              {
                num: '04',
                color: 'bg-green-light text-green-dark',
                title: 'National Impact',
                text: 'Committed to Myanmar development through sustainable business practices.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white p-7 lg:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-9 h-9 flex items-center justify-center text-[0.7rem] font-bold tracking-wide mb-4 ${item.color}`}
                >
                  {item.num}
                </div>
                <h3 className="text-[0.95rem] font-semibold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] text-slate-2 leading-[1.75]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMITMENT ── */}
      <section className="py-16 lg:py-20 bg-light border-y border-light-2">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 xl:px-12 text-center">
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
            We hold ourselves to a standard that supports institutional confidence
            and sustainable outcomes, operating with transparency, accountability,
            and a clear orientation toward the public good.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {[
              'Regulatory Compliance',
              'Institutional Partnerships',
              'Sustainable Development',
              'Technology Integration',
              'Community Impact',
              'National Development',
            ].map((tag) => (
              <span
                key={tag}
                className="text-[0.65rem] font-medium tracking-wider px-5 py-2 border border-light-2 text-slate bg-white hover:bg-green-light hover:text-green-dark hover:border-green transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 mb-4 justify-center">
              <span className="block w-5 h-0.5 bg-green" />
              <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-green">
                Our Services
              </span>
            </div>
            <h2 className="font-heading text-3xl lg:text-[2rem] font-bold text-dark leading-tight">
              Four Sectors. <span className="text-green">One Company.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-light-2">
            {services.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className={`group bg-white flex flex-col border-t-[3px] border-transparent ${svc.hoverBorder} ${svc.hoverBg} hover:shadow-lg transition-all duration-300 no-underline`}
              >
                <div className="h-48 lg:h-56 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  <span className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-muted mb-3">
                    {svc.num}
                  </span>
                  <h3 className="font-heading text-xl lg:text-[1.25rem] font-bold text-dark mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-[0.95rem] text-slate-2 leading-[1.8] flex-1">
                    {svc.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-5 text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-green group-hover:gap-3 transition-all">
                    Learn more <span className="text-base">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 lg:py-20 bg-green-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="block w-5 h-0.5 bg-yellow" />
              <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-yellow">
                Get in Touch
              </span>
            </div>
            <h2 className="font-heading text-2xl lg:text-[1.8rem] font-bold text-white leading-tight">
              Interested in Partnering <span className="text-yellow">With Us?</span>
            </h2>
            <p className="mt-2 text-[0.88rem] text-white/60 max-w-lg">
              Whether you are an investor, a technology provider, a healthcare
              distributor, or an MSME looking for trade support we welcome the
              conversation.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-10 py-3.5 bg-yellow text-dark text-[0.72rem] font-bold tracking-[0.14em] uppercase no-nowrap no-underline hover:bg-yellow-dark transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  )
}
