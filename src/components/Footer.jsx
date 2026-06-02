import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-green">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12 py-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-3 no-underline">
              <img
                src="/navbar logo.jpg"
                alt="HYM GP International"
                className="h-16 w-16 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-[0.82rem] font-semibold text-green-mid tracking-wide">
                  HYM GP International Co., Ltd
                </span>
                <span className="text-[0.6rem] text-muted tracking-wider">
                  AI, Engineering & Robotic Solutions
                </span>
              </div>
            </Link>

            <ul className="flex flex-wrap justify-center gap-8 list-none">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/services', label: 'Services' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[0.65rem] font-medium tracking-[0.14em] uppercase text-muted no-underline hover:text-green-mid transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-[0.62rem] text-muted-2">
              &copy; 2025 HYM GP International Co., Ltd. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
