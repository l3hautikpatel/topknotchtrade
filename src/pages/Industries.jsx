import { Link } from 'react-router'
import { Boxes, Factory, UtensilsCrossed, Sparkles, HardHat, Building2, Server, Car, ArrowRight, ShieldCheck } from 'lucide-react'
import { industries } from '../data/industries'
import CTASection from '../components/ui/CTASection'

const iconMap = {
  Boxes,
  Factory,
  UtensilsCrossed,
  Sparkles,
  HardHat,
  Building2,
  Server,
  Car,
}

export default function Industries() {
  return (
    <div className="flex flex-col">
      {/* ── Hero (Starts at top:0 behind navbar) ── */}
      <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-[#0D1F30] via-[#11273C] to-[#1A3651] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber/15 border border-amber/40 text-[#FBBF24] text-xs font-extrabold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Mission-Critical Industrial Sectors</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            Industries We Serve
          </h1>

          <p className="text-base sm:text-lg text-gray-light leading-relaxed max-w-3xl">
            From high-velocity e-commerce distribution centres to hygienic food processing plants and heavy resource extraction — TopKnotch brings specialized trade expertise tailored to your industry standards.
          </p>
        </div>
      </section>

      {/* ── Industries Grid with Perfectly Aligned Cards ── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const IconComponent = iconMap[ind.icon] || Factory
            return (
              <div
                key={ind.id}
                className="bg-[#0D1F30] border border-white/10 hover:border-amber/50 rounded-2xl p-6 shadow-xl flex flex-col justify-between group transition-all"
              >
                {/* Upper Content wrapper */}
                <div className="flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-amber text-amber group-hover:text-[#0D1F30] flex items-center justify-center transition-colors mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title with min-height for perfect 2-line alignment */}
                  <h2 className="text-lg font-bold font-heading text-white group-hover:text-amber transition-colors mb-2 min-h-[56px] flex items-start">
                    {ind.name}
                  </h2>

                  {/* Description with fixed min-height */}
                  <p className="text-xs sm:text-sm text-gray-light leading-relaxed mb-5 min-h-[72px]">
                    {ind.shortDesc}
                  </p>

                  {/* Subcard highlight pushed to bottom of upper container with aligned min-height */}
                  <div className="mt-auto p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs text-[#FBBF24] font-medium leading-snug min-h-[68px] flex items-center">
                    {ind.highlight}
                  </div>
                </div>

                {/* Bottom Action Link aligned at card bottom */}
                <div className="pt-5 border-t border-white/10 mt-6">
                  <Link
                    to="/contact?type=quote"
                    className="text-xs font-bold uppercase tracking-wider text-white/90 hover:text-amber inline-flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                  >
                    <span>Request Industry Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Operate in a Demanding Industrial Environment?"
        subtitle="Our tradespeople hold specialized certifications for food safety, cleanrooms, engineered rigging, and heavy machinery."
        primaryBtnText="Discuss Your Facility"
        primaryBtnLink="/contact"
      />
    </div>
  )
}
