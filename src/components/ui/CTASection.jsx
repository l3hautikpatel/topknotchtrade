import { Link } from 'react-router'
import { Phone, ArrowRight, ShieldAlert } from 'lucide-react'

export default function CTASection({
  title = "Ready to Keep Your Operations Running?",
  subtitle = "Get a fast, transparent quote from Canada's certified industrial trade services team — on-call 24/7 across the country.",
  primaryBtnText = "Request a Free Quote",
  primaryBtnLink = "/contact?type=quote",
  secondaryBtnText = "Call (226) 759-2210",
  secondaryBtnLink = "tel:+12267592210"
}) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#1A3651] via-[#0D1F30] to-[#0D1F30] border-t border-white/10 overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 sm:gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber/15 border border-amber/40 text-[#FBBF24] text-xs font-extrabold uppercase tracking-widest">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Coast-to-Coast Industrial Reliability</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white max-w-3xl">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-light leading-relaxed max-w-2xl">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-2">
          <Link
            to={primaryBtnLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-amber text-[#0D1F30] font-extrabold text-sm uppercase tracking-wider hover:bg-amber-hover hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-amber/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          >
            <span>{primaryBtnText}</span>
            <ArrowRight className="w-4 h-4 text-[#0D1F30]" />
          </Link>

          <a
            href={secondaryBtnLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg border-2 border-white/30 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 hover:border-white/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          >
            <Phone className="w-4 h-4 text-amber" />
            <span>{secondaryBtnText}</span>
          </a>
        </div>

        <p className="text-xs text-gray pt-2">
          Federally Incorporated under the CBCA • Rapid Mobilization Across All 13 Provinces & Territories
        </p>
      </div>
    </section>
  )
}
