import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { Boxes, Factory, UtensilsCrossed, Sparkles, HardHat, Building2, Server, Car, ArrowRight } from 'lucide-react'
import { industries } from '../data/industries'
import CTASection from '../components/ui/CTASection'
import SEO from '../components/seo/SEO'
import { animateHeroEntrance, animateScrollReveal, ScrollTrigger } from '../utils/animations'

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
  const heroRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      animateHeroEntrance(heroRef.current.querySelectorAll('.hero-animate'))
    }
    if (gridRef.current) {
      animateScrollReveal(gridRef.current, gridRef.current.querySelectorAll('.industry-card'))
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="flex flex-col bg-technical-grid">
      <SEO
        title="Industries Served | TopKnotch Trade Services"
        description="Specialized millwright and mechanical services for warehouses, distribution centres, manufacturing, and food processing plants across Ontario."
      />

      {/* ── Hero (Starts at top:0 behind navbar) ── */}
      <section
        ref={heroRef}
        className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-[#0D1F30] via-[#11273C]/90 to-[#0D1F30] border-b border-white/10 relative"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="hero-animate eyebrow-accent">
            Mission-Critical Industrial Sectors
          </div>

          <h1 className="hero-animate text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            Industries <span className="text-amber">We Serve</span>
          </h1>

          <p className="hero-animate text-base sm:text-xl text-gray-light leading-relaxed max-w-3xl">
            From high-velocity e-commerce distribution centres to hygienic food processing plants and heavy resource extraction — TopKnotch brings specialized trade expertise tailored to your industry standards.
          </p>
        </div>
      </section>

      {/* ── Industries Grid with Perfectly Aligned Cards ── */}
      <section ref={gridRef} className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {industries.map((ind) => {
            const IconComponent = iconMap[ind.icon] || Factory
            return (
              <div
                key={ind.id}
                className="industry-card bg-[#0D1F30] border border-white/10 hover:border-amber/50 rounded-2xl p-7 shadow-xl flex flex-col justify-between group transition-all bg-card-grid"
              >
                {/* Upper Content wrapper */}
                <div className="flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-amber text-amber group-hover:text-[#0D1F30] flex items-center justify-center transition-colors mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title with min-height for perfect 2-line alignment */}
                  <h2 className="text-xl font-bold font-heading text-white group-hover:text-amber transition-colors mb-2.5 min-h-[56px] flex items-start">
                    {ind.name}
                  </h2>

                  {/* Description with fixed min-height */}
                  <p className="text-sm text-gray-light leading-relaxed mb-5 min-h-[76px]">
                    {ind.shortDesc}
                  </p>

                  {/* Subcard highlight pushed to bottom of upper container with aligned min-height */}
                  <div className="mt-auto p-4 bg-white/5 rounded-xl border border-white/10 text-xs sm:text-sm text-[#FBBF24] font-medium leading-snug min-h-[72px] flex items-center">
                    {ind.highlight}
                  </div>
                </div>

                {/* Bottom Action Link aligned at card bottom */}
                <div className="pt-5 border-t border-white/10 mt-6">
                  <Link
                    to="/contact?type=quote"
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90 hover:text-amber inline-flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                  >
                    <span>Request Industry Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
