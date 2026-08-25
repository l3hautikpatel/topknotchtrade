import { useEffect, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router'
import { CheckCircle2, ArrowRight, Phone, ShieldCheck, Wrench, Cog, Flame, Anchor, Zap, AlertTriangle, ClipboardCheck, Calendar } from 'lucide-react'
import { services } from '../data/services'
import CTASection from '../components/ui/CTASection'
import SEO from '../components/seo/SEO'
import { animateHeroEntrance, animateScrollReveal, ScrollTrigger } from '../utils/animations'

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

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  const heroRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      animateHeroEntrance(heroRef.current.querySelectorAll('.hero-animate'))
    }
    if (contentRef.current) {
      animateScrollReveal(contentRef.current, contentRef.current.querySelectorAll('.detail-animate'))
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [slug])

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const IconComponent = iconMap[service.icon] || Wrench
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <div className="flex flex-col bg-technical-grid">
      <SEO
        title={`${service.name} | TopKnotch Trade Services`}
        description={service.description}
      />

      {/* ── Breadcrumb & Hero (Starts at top:0 behind navbar) ── */}
      <section
        ref={heroRef}
        className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-[#0D1F30] via-[#11273C]/90 to-[#0D1F30] border-b border-white/10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="hero-animate flex items-center gap-2 text-xs sm:text-sm text-gray-light mb-6">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-amber transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#FBBF24] font-semibold">{service.name}</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="hero-animate flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-amber text-[#0D1F30] flex items-center justify-center shrink-0 shadow-lg shadow-amber/20">
                <IconComponent className="w-8 h-8 text-[#0D1F30]" />
              </div>
              <div>
                <span className="eyebrow-accent block mb-1">
                  Certified Industrial Trade Scope
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white">
                  {service.name}
                </h1>
                <p className="text-base sm:text-lg text-gray-light mt-1">
                  {service.tagline}
                </p>
              </div>
            </div>

            <div className="hero-animate flex items-center gap-3 shrink-0">
              <Link
                to={`/contact?type=quote&service=${encodeURIComponent(service.name)}`}
                className="px-7 py-3.5 rounded-xl bg-amber text-[#0D1F30] font-extrabold text-sm uppercase tracking-wider hover:bg-amber-hover transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Detail Content ── */}
      <section ref={contentRef} className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ── Left Content (8 cols) ── */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Overview */}
            <div className="detail-animate flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Service Scope &amp; <span className="text-amber">Overview</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-light leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Scope of Capabilities */}
            <div className="detail-animate bg-[#0D1F30] border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col gap-6 bg-card-grid shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                What Is Included <span className="text-amber">Under This Trade</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-light leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Machinery & Equipment Handled */}
            <div className="detail-animate flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Equipment &amp; Systems <span className="text-amber">We Work On</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.equipment.map((eq, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-sm sm:text-base text-white font-medium flex items-center gap-3 bg-card-grid"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-amber shrink-0" />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Sidebar (4 cols) ── */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Direct Quote Card */}
            <div className="detail-animate bg-[#0D1F30] border border-amber/30 rounded-2xl p-7 shadow-xl flex flex-col gap-4 bg-card-grid">
              <span className="eyebrow-accent">
                Book This Service
              </span>
              <h3 className="text-xl font-bold font-heading text-white">
                Need {service.shortName} Support?
              </h3>
              <p className="text-sm text-gray-light leading-relaxed">
                Contact our estimation team for itemized proposals or 24/7 emergency dispatch.
              </p>
              <Link
                to={`/contact?type=quote&service=${encodeURIComponent(service.name)}`}
                className="w-full text-center py-3.5 rounded-xl bg-amber text-[#0D1F30] font-extrabold text-sm uppercase tracking-wider hover:bg-amber-hover transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                Request Itemized Quote
              </Link>
              <a
                href="tel:+12267592210"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <Phone className="w-4 h-4 text-amber" />
                <span>(226) 759-2210</span>
              </a>
            </div>

            {/* Quality Standard */}
            <div className="detail-animate bg-[#0D1F30] border border-white/10 rounded-2xl p-6 flex flex-col gap-3 bg-card-grid">
              <div className="flex items-center gap-2 text-[#FBBF24] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>The TopKnotch Guarantee</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-light leading-relaxed">
                Every technician assigned is fully certified, safety-trained, and adheres to strict OEM &amp; engineering specifications.
              </p>
            </div>

            {/* Related Services */}
            <div className="detail-animate bg-[#0D1F30] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 bg-card-grid">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#FBBF24]">
                Related Trade Services
              </h4>
              <div className="flex flex-col gap-2.5">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/services/${rel.slug}`}
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between text-sm text-white group focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                  >
                    <span className="font-semibold group-hover:text-amber transition-colors">{rel.name}</span>
                    <ArrowRight className="w-4 h-4 text-amber group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <CTASection
        title={`Ready to schedule ${service.name}?`}
        subtitle="Get a detailed scope assessment and transparent pricing from our Canadian trades team."
        primaryBtnText="Get Started"
        primaryBtnLink={`/contact?type=quote&service=${encodeURIComponent(service.name)}`}
      />
    </div>
  )
}
