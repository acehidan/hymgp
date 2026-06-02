import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const tabs = [
  { id: 'pharma', label: '01 Pharmaceutical', color: 'text-green border-b-green' },
  { id: 'robotics', label: '02 Robotics', color: 'text-yellow-dark border-b-yellow' },
  { id: 'solar', label: '03 Solar Power', color: 'text-red-dark border-b-red' },
  { id: 'msme', label: '04 MSME Trade', color: 'text-green-dark border-b-green-mid' },
]

function StickyTabs({ activeTab, setActiveTab }) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const bar = document.getElementById('svc-tabs-bar')
      if (!bar) return
      setIsSticky(bar.getBoundingClientRect().top <= 74)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      id="svc-tabs-bar"
      className={`sticky z-40 bg-white border-b border-light-2 transition-shadow duration-200 ${
        isSticky ? 'shadow-md shadow-green/5' : ''
      }`}
      style={{ top: '74px' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 flex overflow-x-auto scrollbar-none">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab(tab.id)
              const el = document.getElementById(tab.id)
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 74 - 56
                window.scrollTo({ top: y, behavior: 'smooth' })
              }
            }}
            className={`font-heading text-[0.65rem] font-semibold tracking-[0.14em] uppercase whitespace-nowrap px-6 py-4 border-b-[2.5px] transition-colors duration-200 ${
              activeTab === tab.id
                ? tab.color
                : 'text-muted border-transparent hover:text-slate'
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('pharma')

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setActiveTab(id)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 74 - 56
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      const offset = 74 + 56
      const y = window.scrollY + offset
      let current = tabs[0].id
      for (const tab of tabs) {
        const el = document.getElementById(tab.id)
        if (el && el.offsetTop <= y) current = tab.id
      }
      setActiveTab(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Four Sectors."
        titleHighlight="One Vision."
        lead="HYM GP International operates across four strategically selected industries each chosen for its significance to Myanmar's development and our capacity to deliver meaningful impact."
      />

      {/* STICKY TABS */}
      <StickyTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* ── SECTOR 1: PHARMACEUTICAL ── */}
      <section id="pharma" className="py-16 lg:py-20 bg-white border-b border-light-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
          <div className="w-12 h-1 bg-green mb-7" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              {/* <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="block w-5 h-0.5 bg-green" />
                <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-green">
                  Sector 01
                </span>
              </div> */}
              <h2 className="font-heading text-3xl lg:text-[2.2rem] font-bold text-dark leading-tight">
                Pharmaceutical{' '}
                <span className="text-green">Distribution</span>
              </h2>
              <div className="mt-5 text-[0.9rem] text-slate-2 leading-[1.9] space-y-4">
                <p>
                  HYM GP International operates as a trusted distributor of
                  pharmaceutical products throughout Myanmar, supplying healthcare
                  providers, clinics, and institutions with the medicines and health
                  products they require.
                </p>
                <p>
                  We are committed to maintaining the integrity of the pharmaceutical
                  supply chain ensuring products are handled, stored, and delivered to
                  the highest standards of safety and reliability.
                </p>
                <p>
                  Our distribution network is designed to serve both urban centres and
                  underserved regions, contributing to broader healthcare access across
                  the country.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-px">
                {[
                  'Nationwide pharmaceutical supply and distribution',
                  'Partnerships with licensed healthcare providers and institutions',
                  'Compliance with Myanmar pharmaceutical regulations',
                  'Safe handling, storage, and cold-chain management',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-light px-5 py-3.5 text-[0.83rem] text-slate flex items-start gap-3 hover:bg-light-2 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-block mt-8 px-8 py-3.5 bg-green text-white text-[0.7rem] font-semibold tracking-[0.14em] uppercase no-underline hover:bg-green-dark transition-all duration-200 hover:-translate-y-0.5"
              >
                Enquire About Distribution
              </Link>
            </div>

            <div className="bg-green-light border border-green-light overflow-hidden">
              <div className="h-56 lg:h-64 overflow-hidden">
                <img
                  src="/pharmacy.png"
                  alt="Pharmaceutical Distribution"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="font-heading text-lg font-bold text-green-dark mb-4">
                  Why Pharmaceutical Distribution?
                </h3>
                <p className="text-[0.85rem] text-slate-2 leading-[1.8]">
                  Myanmar's healthcare sector requires reliable and regulated supply
                  infrastructure. We serve as a dependable link between manufacturers and
                  healthcare practitioners ensuring the right products reach the right
                  hands, on time and in full compliance with applicable standards.
                </p>
                <div className="grid grid-cols-2 gap-px bg-green/15 mt-8">
                  {[
                    { title: 'Quality Assurance', sub: 'Regulated standards' },
                    { title: 'Nationwide Reach', sub: 'Urban & regional coverage' },
                    { title: 'Institutional Partners', sub: 'Clinics, hospitals, pharmacies' },
                    { title: 'Compliant Operations', sub: 'Full regulatory alignment' },
                  ].map((item) => (
                    <div key={item.title} className="bg-white p-5 text-center">
                      <p className="text-[0.78rem] font-semibold text-green-dark">
                        {item.title}
                      </p>
                      <p className="text-[0.72rem] text-muted mt-0.5">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTOR 2: ROBOTICS ── */}
      <section id="robotics" className="py-16 lg:py-20 bg-light border-b border-light-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
          <div className="w-12 h-1 bg-yellow mb-7" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              {/* <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="block w-5 h-0.5 bg-yellow" />
                <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-yellow-dark">
                  Sector 02
                </span>
              </div> */}
              <h2 className="font-heading text-3xl lg:text-[2.2rem] font-bold text-dark leading-tight">
                Robotics &{' '}
                <span className="text-yellow-dark">Engineering</span>
              </h2>
              <div className="mt-5 text-[0.9rem] text-slate-2 leading-[1.9] space-y-4">
                <p>
                  HYM GP International is pioneering robotics and engineering innovation
                  in Myanmar. We develop functional robots and intelligent systems
                  designed for real-world commercial and service environments bringing
                  advanced technology to accessible, everyday spaces.
                </p>
                <p>
                  Our current focus includes the development and launch of robotics cafés
                  a first-of-its-kind concept in Myanmar where robots serve and
                  interact with guests, creating a unique intersection of hospitality and
                  technology.
                </p>
                <p>
                  We are also developing smart shop solutions that enable retail and
                  service businesses to integrate automation, improving efficiency and
                  customer experience.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-px">
                {[
                  'Custom robot design, development, and deployment',
                  'Robotics café concept hospitality meets technology',
                  'Smart shop systems for retail automation',
                  'Engineering consultation and systems integration',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white px-5 py-3.5 text-[0.83rem] text-slate flex items-start gap-3 hover:bg-white/80 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow mt-2 shrink-0 rotate-45" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-block mt-8 px-8 py-3.5 bg-yellow text-dark text-[0.7rem] font-semibold tracking-[0.14em] uppercase no-underline hover:bg-yellow-dark transition-all duration-200 hover:-translate-y-0.5"
              >
                Enquire About Robotics
              </Link>
            </div>

            <div className="bg-dark text-white overflow-hidden">
              <div className="h-56 lg:h-64 overflow-hidden">
                <img
                  src="/robotic.png"
                  alt="Robotics & Engineering"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="font-heading text-lg font-bold text-yellow mb-4">
                  Technology for Everyday Myanmar
                </h3>
                <p className="text-[0.85rem] text-white/70 leading-[1.8]">
                  Our robotics initiatives are not isolated technology projects they are
                  commercially viable businesses designed to operate profitably while
                  introducing Myanmar's population to the possibilities of intelligent
                  automation. We believe technology should be experienced, not just
                  observed.
                </p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {[
                    'Robot Development',
                    'Robotics Café',
                    'Smart Retail',
                    'Service Automation',
                    'Intelligent Systems',
                    'Engineering Solutions',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.62rem] font-medium tracking-wider px-3.5 py-1.5 border border-white/15 text-white/60 hover:bg-yellow/15 hover:text-yellow transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTOR 3: SOLAR ── */}
      <section id="solar" className="py-16 lg:py-20 bg-white border-b border-light-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
          <div className="w-12 h-1 bg-red mb-7" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              {/* <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="block w-5 h-0.5 bg-red" />
                <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-red-dark">
                  Sector 03
                </span>
              </div> */}
              <h2 className="font-heading text-3xl lg:text-[2.2rem] font-bold text-dark leading-tight">
                Solar Power{' '}
                <span className="text-red-dark">Development</span>
              </h2>
              <div className="mt-5 text-[0.9rem] text-slate-2 leading-[1.9] space-y-4">
                <p>
                  HYM GP International is advancing solar energy development in Myanmar.
                  We have undertaken comprehensive groundwork conducting site surveys,
                  gathering location-specific data, and analysing regulatory frameworks
                  in preparation for the development of solar farm infrastructure.
                </p>
                <p>
                  Myanmar's energy landscape presents significant opportunity for clean
                  power generation. Our projects are structured to meet regulatory
                  requirements and deliver long-term, measurable energy output for
                  communities and industry.
                </p>
                <p>
                  We are actively seeking partners both investors and technology
                  providers to join us in developing these projects from planning to
                  operational delivery.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-px">
                {[
                  'Solar farm development with comprehensive site data',
                  'Regulatory compliance and planning frameworks in place',
                  'Open to financial investment and co-development',
                  'Welcoming technology partners and equipment providers',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-light px-5 py-3.5 text-[0.83rem] text-slate flex items-start gap-3 hover:bg-light-2 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-red mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-px bg-light-2 mt-8">
                {[
                  { icon: 'Ready', label: 'Site Data Gathered' },
                  { icon: 'Aligned', label: 'Regulatory Research' },
                  { icon: 'Active', label: 'Partner Invitations Open' },
                ].map((item) => (
                  <div key={item.icon} className="bg-green-light p-5 text-center">
                    <p className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-green-dark mb-1">
                      {item.icon}
                    </p>
                    <p className="text-[0.82rem] font-medium text-dark">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark text-white overflow-hidden">
              <div className="h-56 lg:h-64 overflow-hidden">
                <img
                  src="/solar.png"
                  alt="Solar Power Development"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase text-yellow mb-4">
                  Partnership Invitation
                </p>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  We Invite Investors & Technology Partners
                </h3>
                <p className="text-[0.85rem] text-white/65 leading-[1.8] mb-8">
                  Our solar development pipeline represents a significant opportunity for
                  those seeking to participate in Myanmar's clean energy transition. We
                  welcome engagement from:
                </p>
                <div className="grid grid-cols-2 gap-px bg-white/[0.08] mb-8">
                  <div className="bg-white/[0.03] p-5">
                    <p className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-yellow mb-1.5">
                      Financial Investors
                    </p>
                    <p className="text-[0.78rem] text-white/55 leading-relaxed">
                      Individuals, companies, or funds seeking sustainable infrastructure
                      investment opportunities in Myanmar's energy sector.
                    </p>
                  </div>
                  <div className="bg-white/[0.03] p-5">
                    <p className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-green-mid mb-1.5">
                      Technology Partners
                    </p>
                    <p className="text-[0.78rem] text-white/55 leading-relaxed">
                      Companies with solar technology, equipment, engineering capability,
                      or international project development experience.
                    </p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3.5 bg-yellow text-dark text-[0.7rem] font-semibold tracking-[0.14em] uppercase no-underline hover:bg-yellow-dark transition-all duration-200 hover:-translate-y-0.5"
                >
                  Explore Solar Partnerships
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTOR 4: MSME ── */}
      <section id="msme" className="py-16 lg:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
          <div className="w-12 h-1 bg-green-mid mb-7" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              {/* <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="block w-5 h-0.5 bg-green-mid" />
                <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-green-dark">
                  Sector 04
                </span>
              </div> */}
              <h2 className="font-heading text-3xl lg:text-[2.2rem] font-bold text-dark leading-tight">
                MSME <span className="text-green">Trade Services</span>
              </h2>
              <div className="mt-5 text-[0.9rem] text-slate-2 leading-[1.9] space-y-4">
                <p>
                  Myanmar's micro, small, and medium enterprises (MSMEs) are the
                  backbone of the national economy. HYM GP International provides
                  dedicated trade services designed to support MSME businesses in
                  growing, connecting, and competing more effectively.
                </p>
                <p>
                  We understand the practical challenges facing small and medium
                  businesses in Myanmar from market access and supply chain management
                  to commercial documentation and trade facilitation. Our services are
                  structured to address these needs directly and reliably.
                </p>
                <p>
                  Whether you are looking to expand your market reach, streamline
                  procurement, or access new trade channels, our team is equipped to
                  support your business objectives.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-block mt-8 px-8 py-3.5 bg-dark text-white text-[0.7rem] font-semibold tracking-[0.14em] uppercase no-underline hover:bg-green-dark transition-all duration-200 hover:-translate-y-0.5"
              >
                Enquire About Trade Services
              </Link>
            </div>

            <div className="bg-white border border-light-2 overflow-hidden">
              <div className="h-56 lg:h-64 overflow-hidden">
                <img
                  src="/trading.png"
                  alt="MSME Trade Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="font-heading text-lg font-bold text-dark mb-4">
                  Supporting Myanmar's Business Community
                </h3>
                <p className="text-[0.85rem] text-slate-2 leading-[1.8]">
                  We provide practical, reliable trade support for Myanmar's MSME sector
                  helping local businesses develop the capabilities and connections
                  they need to grow sustainably.
                </p>
                <div className="mt-8 flex flex-col gap-px">
                  {[
                    'Trade facilitation and market access support',
                    'Supply chain consultation and procurement assistance',
                    'Commercial documentation and compliance guidance',
                    'Business development and partner introductions',
                    'Tailored solutions for businesses at all stages',
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-light px-5 py-3.5 text-[0.83rem] text-slate flex items-start gap-3"
                    >
                      <span className="w-2 h-2 bg-green-mid mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
