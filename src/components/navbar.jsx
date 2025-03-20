import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleLinkClick = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    setIsOpen(false)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/95 backdrop-blur">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2 relative z-[60]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-400"
            >
              <path d="M7 8 L3 12 L7 16"></path>
              <path d="M17 8 L21 12 L17 16"></path>
              <path d="M14 4 L10 20"></path>
            </svg>
            <div className="font-bold text-xl">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                <span className="text-2xl">D</span>ev<span className="text-2xl">N</span>ame
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-gray-300 hover:text-cyan-400 transition-colors relative z-[60] md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <div className={`w-6 h-6 relative transform transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          ref={menuRef}
          className={`
            fixed inset-0 w-full min-h-screen bg-black transform transition-all duration-300 ease-out md:hidden
            ${isOpen ? 'translate-x-0 opacity-100 z-50' : 'translate-x-full opacity-0 -z-10'}
          `}
        >
          <div className="flex flex-col justify-center items-center min-h-screen px-6 py-20 gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`
                  text-3xl font-medium text-gray-300 hover:text-cyan-400 
                  transition-all duration-300 transform hover:scale-110
                  ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {/* Extra padding to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}
