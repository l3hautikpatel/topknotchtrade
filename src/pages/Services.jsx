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
    <div className="pt-24 sm:pt-28">
      {/* ── Page Hero ── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#0D1F30] to-[#1A3651] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber/15 border border-amber/30 text-amber text-xs font-bold uppercase tracking-widest">
            <span>9 Specialized Industrial Trade Lines</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            Industrial Trade Services
          </h1>

          <p className="text-base sm:text-lg text-gray-light leading-relaxed max-w-3xl">
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
                className="bg-[#0D1F30] border border-white/10 hover:border-amber/50 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-amber/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-amber text-amber group-hover:text-navy flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-white/40 group-hover:text-amber transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold font-heading text-white group-hover:text-amber transition-colors mb-2">
                    {service.name}
                  </h2>

                  <p className="text-xs text-amber font-medium mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-light leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="border-t border-white/10 pt-4 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 block mb-2">
                      Core Capabilities:
                    </span>
                    <ul className="flex flex-col gap-1.5 text-xs text-gray">
                      {service.bullets.slice(0, 3).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-amber" />
                          <span className="truncate">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-amber hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Deep Dive Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to={`/contact?type=quote&service=${encodeURIComponent(service.name)}`}
                    className="px-3 py-1.5 rounded bg-white/5 hover:bg-amber hover:text-navy text-[11px] font-bold text-white transition-all"
                  >
                    Quote
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
