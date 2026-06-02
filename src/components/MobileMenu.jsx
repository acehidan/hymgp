import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
]

export default function MobileMenu({ open, onClose }) {
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 ${
        open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div
        className="absolute inset-0 bg-dark/90 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-dark/95 transition-all duration-500 ${
          open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-3xl font-light bg-transparent border-none cursor-pointer hover:text-yellow transition-colors"
          aria-label="Close menu"
        >
          &#x2715;
        </button>

        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`text-2xl font-semibold no-underline tracking-wide transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-yellow'
                  : 'text-white hover:text-green-mid'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={onClose}
            className="mt-4 px-8 py-3 bg-green text-white text-sm font-semibold tracking-widest uppercase no-underline hover:bg-green-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="absolute bottom-8 text-center">
          <p className="text-muted text-xs tracking-wider">
            HYM GP International Co., Ltd
          </p>
          <p className="text-muted-2 text-[0.6rem] tracking-wider mt-1">
            AI, Engineering & Robotic Solutions
          </p>
        </div>
      </div>
    </div>
  )
}
