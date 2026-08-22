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
    <div className="pt-24 sm:pt-28">
      {/* ── Hero ── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#0D1F30] to-[#1A3651] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber/15 border border-amber/30 text-amber text-xs font-bold uppercase tracking-widest">
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

      {/* ── Industries Grid ── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const IconComponent = iconMap[ind.icon] || Factory
            return (
              <div
                key={ind.id}
                className="bg-[#0D1F30] border border-white/10 hover:border-amber/50 rounded-2xl p-6 shadow-xl flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-amber text-amber group-hover:text-navy flex items-center justify-center transition-colors mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h2 className="text-lg font-bold font-heading text-white group-hover:text-amber transition-colors mb-2">
                    {ind.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-light leading-relaxed mb-4">
                    {ind.shortDesc}
                  </p>

                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-[11px] text-amber">
                    {ind.highlight}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <Link
                    to="/contact?type=quote"
                    className="text-xs font-bold uppercase tracking-wider text-white/80 hover:text-amber inline-flex items-center gap-1.5 transition-colors"
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
