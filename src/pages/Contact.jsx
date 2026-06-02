import PageHeader from '../components/PageHeader'

const intents = [
  {
    num: 'Enquiry Type 01',
    title: 'Investment Opportunities',
    desc: 'Solar energy, robotics, or general investment enquiries and partnership proposals.',
    borderColor: 'border-t-green',
    hoverBg: 'hover:bg-green-light',
  },
  {
    num: 'Enquiry Type 02',
    title: 'Technology Partnerships',
    desc: 'Technology providers, equipment suppliers, or engineering partners across any of our sectors.',
    borderColor: 'border-t-yellow',
    hoverBg: 'hover:bg-yellow-light',
  },
  {
    num: 'Enquiry Type 03',
    title: 'Distribution & Trade',
    desc: 'Pharmaceutical distribution enquiries, MSME trade services, and supply chain partnerships.',
    borderColor: 'border-t-red',
    hoverBg: 'hover:bg-red-light',
  },
  {
    num: 'Enquiry Type 04',
    title: 'General & Institutional',
    desc: 'Government bodies, institutions, NGOs, or any other general business enquiry.',
    borderColor: 'border-t-green-mid',
    hoverBg: 'hover:bg-green-light',
  },
]

const sectorContacts = [
  {
    label: 'Pharmaceutical Distribution',
    title: 'Distribution & Supply Chain',
    text: 'Contact us to discuss pharmaceutical supply partnerships, product distribution enquiries, or healthcare procurement requirements.',
    color: 'border-t-green',
  },
  {
    label: 'Robotics & Engineering',
    title: 'Technology & Innovation',
    text: 'Reach out to learn about our robotics café, smart shop systems, robot development, or engineering project collaboration.',
    color: 'border-t-yellow',
  },
  {
    label: 'Solar Power Development',
    title: 'Investment & Technology Partners',
    text: "We welcome investors and technology providers interested in Myanmar's solar energy sector. Contact us to receive our project overview and partnership terms.",
    color: 'border-t-red',
  },
  {
    label: 'MSME Trade Services',
    title: 'Trade Support for Businesses',
    text: 'If you are an MSME seeking trade facilitation, market access support, or commercial advisory services, we are ready to assist.',
    color: 'border-t-green-mid',
  },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Get in"
        titleHighlight="Touch"
        lead="We welcome enquiries from investors, business partners, technology collaborators, healthcare distributors, and any organisation wishing to engage with HYM GP International."
      />

      {/* CONTACT INTENTS */}
      <section className="py-12 bg-light border-b border-light-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-light-2">
            {intents.map((item) => (
              <div
                key={item.num}
                className={`bg-white p-6 lg:p-7 border-t-[3px] border-transparent ${item.borderColor} ${item.hoverBg} transition-all duration-200`}
              >
                <p className="text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-muted mb-1.5">
                  {item.num}
                </p>
                <p className="text-[0.88rem] font-semibold text-dark mb-1.5">
                  {item.title}
                </p>
                <p className="text-[0.78rem] text-slate-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="block w-5 h-0.5 bg-green" />
              <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-green">
                Direct Contact
              </span>
            </div>
            <h2 className="font-heading text-3xl lg:text-[2rem] font-bold text-dark leading-tight">
              Reach <span className="text-green">Our Team</span>
            </h2>

            <div className="mt-8">
              <div className="mb-6 pb-6 border-b border-light-2">
                <p className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-green mb-2">
                  Phone
                </p>
                <a
                  href="tel:+959792090909"
                  className="text-[0.9rem] text-dark no-underline hover:text-green transition-colors"
                >
                  +95 9 792 090 909
                </a>
              </div>

              <div className="mb-6 pb-6 border-b border-light-2">
                <p className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-green mb-2">
                  Email
                </p>
                <a
                  href="mailto:info@hymgpinternational.com"
                  className="text-[0.9rem] text-dark no-underline hover:text-green transition-colors block"
                >
                  kevinlin@bigemsjewelry.com
                </a>
                <a
                  href="mailto:linthuhan9@gmail.com"
                  className="text-[0.9rem] text-dark no-underline hover:text-green transition-colors block mt-0.5"
                >
                  linthuhan9@gmail.com
                </a>
              </div>

              <div className="mb-6 pb-6 border-b border-light-2">
                <p className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-green mb-2">
                  Office Address
                </p>
                <p className="text-[0.9rem] text-dark leading-relaxed">
                  N2, Ground Floor, Shwe Sabae
                  <br />
                  Yeikmon Housing, Shwe Zalat Street,
                  <br />
                  Kamayut Township, Yangon. 11041
                </p>
              </div>

              {/* <div>
                <p className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-green mb-2">
                  Executive Director
                </p>
                <p className="text-[0.9rem] text-dark font-medium">
                  Kevin Lin @ Lin Thu Han
                </p>
              </div> */}
            </div>
          </div>

          {/* RIGHT: WECHAT */}
          <div>
            <div className="bg-dark p-8 lg:p-10 text-white">
              <p className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-green-mid mb-3">
                Direct Business Communication
              </p>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Connect With Us on <span className="text-yellow">WeChat</span>
              </h3>
              <p className="text-[0.83rem] text-white/55 leading-[1.8] mb-8">
                For direct and timely communication particularly for investment
                discussions, technology partnerships, and international business
                enquiries our team is available on WeChat.
              </p>

              <div className="flex gap-6 items-center p-5 bg-white/[0.04] border border-white/[0.07]">
                <div className="w-24 h-24 bg-white/[0.04] border border-white/[0.1] shrink-0 flex items-center justify-center relative overflow-hidden">
                  <div
                    className="absolute inset-2 opacity-20"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(0deg, #2EAD52 0, #2EAD52 2px, transparent 2px, transparent 9px), repeating-linear-gradient(90deg, #2EAD52 0, #2EAD52 2px, transparent 2px, transparent 9px)',
                    }}
                  />
                  <span className="relative z-10 text-sm font-bold text-green-mid">
                    HYM
                  </span>
                </div>
                <div>
                  <p className="text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-muted-2 mb-1">
                    Scan QR to Connect
                  </p>
                  <p className="text-[0.95rem] font-medium text-white mb-1">
                    HYMGPInternational
                  </p>
                  <p className="text-[0.75rem] text-white/40 leading-relaxed">
                    WeChat Business Account
                    <br />
                    Available Mon–Sat, 9:00 AM – 6:00 PM (MMT)
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow/[0.08] border-l-[3px] border-yellow">
                <p className="text-[0.75rem] text-white/50 leading-relaxed">
                  <strong className="text-yellow font-medium">Note:</strong> Replace
                  the QR placeholder above with your official WeChat QR code image.
                </p>
              </div>
            </div>

            <div className="mt-px p-6 bg-green-light border-l-[3px] border-green">
              <p className="text-[0.82rem] text-slate leading-[1.75]">
                We endeavour to respond to all enquiries within{' '}
                <strong className="text-green-dark font-semibold">1–2 business days</strong>.
                For time-sensitive matters including investment discussions and
                partnership proposals —{' '}
                <strong className="text-green-dark font-semibold">
                  WeChat is recommended
                </strong>{' '}
                for the most direct response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR CONTACT GUIDE */}
      <section className="py-16 lg:py-20 bg-light border-t border-light-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 mb-4 justify-center">
              <span className="block w-5 h-0.5 bg-green" />
              <span className="font-heading text-[0.6rem] font-semibold tracking-[0.28em] uppercase text-green">
                Enquiry Guide
              </span>
            </div>
            <h2 className="font-heading text-2xl lg:text-[1.8rem] font-bold text-dark leading-tight">
              What Would You Like to{' '}
              <span className="text-green">Discuss?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-light-2">
            {sectorContacts.map((item) => (
              <div
                key={item.label}
                className={`bg-white p-7 lg:p-8 border-t-[3px] border-transparent ${item.color}`}
              >
                <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-muted mb-2">
                  {item.label}
                </p>
                <p className="text-[0.92rem] font-semibold text-dark mb-2">
                  {item.title}
                </p>
                <p className="text-[0.8rem] text-slate-2 leading-[1.7]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
