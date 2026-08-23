import { Link } from 'react-router'
import { Home, Wrench, PhoneCall } from 'lucide-react'
import logoDark from '../assets/Logos/Dark-logo-text.png'

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 pt-32 sm:pt-36 pb-20 bg-gradient-to-b from-[#0D1F30] via-[#11273C] to-[#1A3651]">
      <div className="max-w-xl w-full text-center flex flex-col items-center gap-6 sm:gap-8">
        {/* Brand Logo */}
        <div className="py-2 inline-block">
          <img
            src={logoDark}
            alt="TopKnotch Trade Services"
            className="h-12 sm:h-14 w-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* 404 Display */}
        <div className="flex flex-col items-center">
          <span className="text-7xl sm:text-8xl md:text-9xl font-black font-heading text-amber tracking-tight select-none">
            404
          </span>
          <div className="w-16 h-1 bg-amber rounded-full mt-2 mb-4" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
            Page Not Found
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-gray-light leading-relaxed max-w-md">
          Looks like this page went off-site. Let’s get you back to work with certified industrial trade support.
        </p>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full justify-center pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-amber text-[#0D1F30] font-extrabold text-sm uppercase tracking-wider hover:bg-amber-hover hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-amber/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          >
            <Home className="w-4 h-4 text-[#0D1F30]" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-white/25 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          >
            <Wrench className="w-4 h-4 text-amber" />
            <span>Explore Services</span>
          </Link>
        </div>

        {/* Support quick link */}
        <div className="pt-4 border-t border-white/10 w-full flex items-center justify-center gap-2 text-xs text-gray">
          <span>Need immediate assistance?</span>
          <a
            href="tel:+12267592210"
            className="text-amber font-semibold hover:underline inline-flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
          >
            <PhoneCall className="w-3 h-3" />
            <span>Call (226) 759-2210</span>
          </a>
        </div>
      </div>
    </div>
  )
}
