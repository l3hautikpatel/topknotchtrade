import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Phone, ChevronDown, Menu, X, ArrowRight, Wrench, Cog, Flame, Anchor, Zap, ShieldCheck, AlertTriangle, ClipboardCheck, Calendar } from 'lucide-react'
import logoDark from '../../assets/Logos/Dark-logo-text.png'
import { services } from '../../data/services'

const iconMap = {
  Wrench,
  Cog,
  Flame,
  Anchor,
  Zap,
  ShieldCheck,
  AlertTriangle,
  ClipboardCheck,
  Calendar,
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const location = useLocation()

  // Track scroll position for navbar background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setServicesDropdownOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A3651]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-[#0D1F30]/95 via-[#0D1F30]/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* ── Brand Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-lg py-1"
            aria-label="TopKnotch Trade Services Home"
          >
            <img
              src={logoDark}
              alt="TopKnotch Trade Services"
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* ── Desktop Navigation Links ── */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-semibold tracking-wider uppercase transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 ${
                  isActive
                    ? 'text-amber font-bold'
                    : 'text-white/90 hover:text-amber hover:bg-white/5'
                }`
              }
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-semibold tracking-wider uppercase transition-colors rounded-md inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 ${
                    isActive || location.pathname.startsWith('/services')
                      ? 'text-amber font-bold'
                      : 'text-white/90 hover:text-amber hover:bg-white/5'
                  }`
                }
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-amber' : 'text-white/60'
                  }`}
                />
              </NavLink>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-[580px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-[#0D1F30] border border-white/15 rounded-xl shadow-2xl p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24]">
                        All 9 Core Service Lines
                      </span>
                      <Link
                        to="/services"
                        className="text-xs font-medium text-white/80 hover:text-amber inline-flex items-center gap-1 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                      >
                        <span>View Overview</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => {
                        const IconComponent = iconMap[service.icon] || Wrench
                        return (
                          <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                          >
                            <div className="p-2 rounded-md bg-white/5 text-amber group-hover:bg-amber group-hover:text-navy transition-colors shrink-0 mt-0.5">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-white group-hover:text-amber transition-colors truncate">
                                {service.name}
                              </div>
                              <div className="text-[11px] text-white/60 line-clamp-1 mt-0.5">
                                {service.tagline}
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/industries"
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-semibold tracking-wider uppercase transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 ${
                  isActive
                    ? 'text-amber font-bold'
                    : 'text-white/90 hover:text-amber hover:bg-white/5'
                }`
              }
            >
              Industries
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-semibold tracking-wider uppercase transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 ${
                  isActive
                    ? 'text-amber font-bold'
                    : 'text-white/90 hover:text-amber hover:bg-white/5'
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-semibold tracking-wider uppercase transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 ${
                  isActive
                    ? 'text-amber font-bold'
                    : 'text-white/90 hover:text-amber hover:bg-white/5'
                }`
              }
            >
              Careers
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-semibold tracking-wider uppercase transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 ${
                  isActive
                    ? 'text-amber font-bold'
                    : 'text-white/90 hover:text-amber hover:bg-white/5'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* ── Right Call & Quote Actions ── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12267592210"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-amber transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-amber">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>(226) 759-2210</span>
            </a>

            <Link
              to="/contact?type=quote"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-amber text-[#0D1F30] font-extrabold text-xs uppercase tracking-wider hover:bg-amber-hover hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-amber/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0D1F30]" />
            </Link>
          </div>

          {/* ── Mobile Hamburger Toggle ── */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+12267592210"
              className="p-2 rounded-lg bg-white/10 text-amber"
              aria-label="Call TopKnotch"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:text-amber hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Slide-down / Drawer ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1F30] border-b border-white/15 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase ${
                  isActive ? 'bg-amber text-[#0D1F30] font-bold' : 'text-white hover:bg-white/5'
                }`
              }
            >
              Home
            </NavLink>

            <div>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase text-white hover:bg-white/5"
              >
                <span>Services ({services.length})</span>
                <ChevronDown
                  className={`w-4 h-4 text-amber transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="pl-3 pr-1 py-2 flex flex-col gap-1 border-l-2 border-amber/30 ml-3 my-1">
                  <Link
                    to="/services"
                    className="text-xs font-bold text-amber py-1.5 px-2 hover:bg-white/5 rounded"
                  >
                    → View All Services Overview
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="text-xs text-white/80 hover:text-amber py-1.5 px-2 hover:bg-white/5 rounded transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/industries"
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase ${
                  isActive ? 'bg-amber text-[#0D1F30] font-bold' : 'text-white hover:bg-white/5'
                }`
              }
            >
              Industries
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase ${
                  isActive ? 'bg-amber text-[#0D1F30] font-bold' : 'text-white hover:bg-white/5'
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase ${
                  isActive ? 'bg-amber text-[#0D1F30] font-bold' : 'text-white hover:bg-white/5'
                }`
              }
            >
              Careers
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase ${
                  isActive ? 'bg-amber text-[#0D1F30] font-bold' : 'text-white hover:bg-white/5'
                }`
              }
            >
              Contact
            </NavLink>

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/contact?type=quote"
                className="w-full text-center py-3 rounded-md bg-amber text-[#0D1F30] font-extrabold text-xs uppercase tracking-wider shadow-md shadow-amber/20"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+12267592210"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md border border-white/20 text-white text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-amber" />
                <span>Call (226) 759-2210</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
