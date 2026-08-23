import { Link } from 'react-router'
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react'
import logoDark from '../../assets/Logos/Dark-logo-text.png'
import { services } from '../../data/services'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0D1F30] text-white border-t border-white/10 relative z-10">
      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* ── Column 1: Brand & Credentials (4 cols) ── */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-lg" aria-label="TopKnotch Home">
              <img
                src={logoDark}
                alt="TopKnotch Trade Services"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-gray leading-relaxed max-w-sm">
              <strong className="text-white">TopKnotch Trade Services Inc.</strong> is a federally incorporated Canadian industrial contracting firm delivering certified millwright, mechanical, welding, rigging, and electrical solutions nationwide.
            </p>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.04] border border-white/10">
              <ShieldCheck className="w-5 h-5 text-amber shrink-0 mt-0.5" />
              <div className="text-xs text-gray leading-snug">
                <span className="text-white font-semibold block">CBCA Federally Incorporated</span>
                Authorized & certified to operate across all 13 Canadian provinces & territories.
              </div>
            </div>
          </div>

          {/* ── Column 2: Quick Links (2 cols) ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber font-heading">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-gray">
              <li>
                <Link to="/" className="hover:text-amber transition-colors inline-flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber transition-colors inline-flex items-center gap-1">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber transition-colors inline-flex items-center gap-1">
                  <span>All Services</span>
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-amber transition-colors inline-flex items-center gap-1">
                  <span>Industries</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-amber transition-colors inline-flex items-center gap-1">
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber transition-colors inline-flex items-center gap-1">
                  <span>Contact & Quotes</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Column 3: 9 Core Services (3 cols) ── */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber font-heading">
              Our Trade Services
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-gray">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-amber transition-colors line-clamp-1 inline-flex items-center gap-1 group"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact & Support (3 cols) ── */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber font-heading">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-3 text-xs text-gray">
              <a
                href="tel:+12267592210"
                className="flex items-center gap-2.5 text-white hover:text-amber font-medium transition-colors"
              >
                <div className="w-7 h-7 rounded bg-amber/10 flex items-center justify-center text-amber shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>(226) 759-2210</span>
              </a>

              <a
                href="mailto:contact@topknotchtrade.com"
                className="flex items-center gap-2.5 hover:text-amber transition-colors"
              >
                <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center text-amber shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>contact@topknotchtrade.com</span>
              </a>

              <a
                href="mailto:service@topknotchtrade.com"
                className="flex items-center gap-2.5 hover:text-amber transition-colors"
              >
                <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center text-amber shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-white font-semibold">24/7 Emergency Dispatch</span>
                  <span className="text-[11px] text-gray">service@topknotchtrade.com</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 pt-1">
                <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center text-amber shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] leading-relaxed">
                  <span className="text-white block font-medium">Headquarters: Ontario, Canada</span>
                  Serving the Greater Toronto Area & industrial sites nationwide.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Amber Divider ── */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber to-transparent opacity-80" />

      {/* ── Bottom Sub-footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-gray flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left">
          © {currentYear} <span className="text-white font-semibold">TopKnotch Trade Services Inc.</span> — Federally Incorporated under the Canada Business Corporations Act (CBCA). All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-[11px]">
          <Link to="/contact" className="hover:text-amber transition-colors">
            Request Quote
          </Link>
          <span>•</span>
          <Link to="/careers" className="hover:text-amber transition-colors">
            Careers
          </Link>
          <span>•</span>
          <span className="text-gray/80">Where Trades Meet Excellence.</span>
        </div>
      </div>
    </footer>
  )
}
