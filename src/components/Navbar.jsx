import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MobileMenu from './MobileMenu'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-green transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-green/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 xl:px-12 py-3">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <img
              src="/navbar logo.jpg"
              alt="HYM GP International"
              className="h-16 w-16 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-[0.82rem] font-semibold text-green-dark tracking-wide">
                HYM GP International Co., Ltd
              </span>
              <span className="font-heading text-[0.6rem] font-normal text-muted tracking-widest uppercase">
                AI, Engineering & Robotic Solutions
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-0 list-none">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-heading text-[0.7rem] font-medium tracking-[0.14em] uppercase no-underline px-5 py-2.5 border-b-2 -mb-0.5 transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-green border-b-green'
                      : 'text-slate border-transparent hover:text-green hover:border-green'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-dark transition-all" />
            <span className="block w-6 h-0.5 bg-dark transition-all" />
            <span className="block w-4 h-0.5 bg-dark transition-all" />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
