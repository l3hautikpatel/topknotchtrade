import { Link } from 'react-router'
import { ArrowRight, Wrench, Cog, Flame, Anchor, Zap, ShieldCheck, AlertTriangle, ClipboardCheck, Calendar } from 'lucide-react'
import { services } from '../data/services'
import CTASection from '../components/ui/CTASection'

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

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* ── Page Hero (Starts at top:0 behind navbar) ── */}
      <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-[#0D1F30] via-[#11273C] to-[#1A3651] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/15 border border-amber/40 text-[#FBBF24] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
            <span>9 Specialized Industrial Trade Lines</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            Industrial Trade Services
          </h1>

          <p className="text-base sm:text-xl text-gray-light leading-relaxed max-w-3xl">
            From single-technician emergency service calls to turnkey multi-trade shutdown crews of 30+ specialists — TopKnotch delivers certified expertise for every phase of industrial equipment life.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Wrench
            return (
              <div
                key={service.id}
                className="bg-[#0D1F30] border border-white/10 hover:border-amber/50 rounded-2xl p-7 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-amber/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-amber text-amber group-hover:text-[#0D1F30] flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {/* WCAG compliant counter text */}
                    <span className="text-xs font-mono font-bold text-white/70 group-hover:text-amber transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-amber transition-colors mb-2 min-h-[32px] flex items-center">
                    {service.name}
                  </h2>

                  <p className="text-sm text-[#FBBF24] font-semibold mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-gray-light leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="border-t border-white/10 pt-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-2.5">
                      Core Capabilities:
                    </span>
                    <ul className="flex flex-col gap-2 text-xs sm:text-sm text-gray-light">
                      {service.bullets.slice(0, 4).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0 mt-2" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber hover:text-white inline-flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                  >
                    <span>Deep Dive Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to={`/contact?type=quote&service=${encodeURIComponent(service.name)}`}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-amber hover:text-[#0D1F30] text-xs font-bold text-white transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Need a Multi-Trade Crew for Your Facility?"
        subtitle="We provide turnkey project management combining millwright, electrical, welding, and rigging under a single contract."
        primaryBtnText="Request Project Quote"
        primaryBtnLink="/contact?type=quote"
      />
    </div>
  )
}
