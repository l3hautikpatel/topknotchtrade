import { useEffect, useRef } from 'react'
import { ShieldCheck, Target, Eye, Award, CheckCircle2, Users } from 'lucide-react'
import CTASection from '../components/ui/CTASection'
import SEO from '../components/seo/SEO'
import { animateHeroEntrance, animateScrollReveal, ScrollTrigger } from '../utils/animations'

export default function About() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const valuesRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      animateHeroEntrance(heroRef.current.querySelectorAll('.hero-animate'))
    }
    if (contentRef.current) {
      animateScrollReveal(contentRef.current, contentRef.current.querySelectorAll('.content-animate'))
    }
    if (valuesRef.current) {
      animateScrollReveal(valuesRef.current, valuesRef.current.querySelectorAll('.value-card'))
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="flex flex-col bg-technical-grid">
      <SEO
        title="About TopKnotch Trade Services | Ontario"
        description="Founding story, mission, and safety commitment of TopKnotch Trade Services. Federally incorporated skilled trades contractor."
      />

      {/* ── Hero Banner (Starts at top:0 behind navbar) ── */}
      <section
        ref={heroRef}
        className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-[#0D1F30] via-[#11273C]/90 to-[#0D1F30] border-b border-white/10 relative"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/15 border border-amber/40 text-[#FBBF24] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Federally Incorporated Under CBCA</span>
          </div>

          <h1 className="hero-animate text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            Built for <span className="text-amber">Industry</span>. Built for <span className="text-amber">Canada</span>.
          </h1>

          <p className="hero-animate text-base sm:text-xl text-gray-light leading-relaxed max-w-3xl">
            TopKnotch Trade Services Inc. is a specialized industrial contracting firm headquartered in Toronto, Ontario — purpose-built to deliver certified trade excellence across Canada.
          </p>
        </div>
      </section>

      {/* ── Who We Are Section ── */}
      <section ref={contentRef} className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 content-animate">
            <div className="eyebrow-accent">
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
              Where Trades Meet <span className="text-amber">Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-light leading-relaxed">
              We are not a general staffing agency or generic handyman service. We are a specialized industrial trades firm — purpose-built to support the operational and maintenance needs of warehouses, distribution centres, manufacturing plants, food processing facilities, logistics hubs, and heavy industrial facilities from coast to coast.
            </p>
            <p className="text-base sm:text-lg text-gray-light leading-relaxed">
              Every technician we deploy, every machine we install, and every weld we lay is held to the highest standard in the trade. As a federally incorporated company under the <strong>Canada Business Corporations Act (CBCA)</strong>, TopKnotch Trade Services Inc. is authorized and recognized to operate across all 13 Canadian provinces and territories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-[#0D1F30] border border-white/10 flex items-start gap-3.5 bg-card-grid">
                <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-base mb-1 font-heading">Certified Workforce</strong>
                  <span className="text-sm text-gray-light leading-relaxed">Red Seal millwrights, CWB welders, and licensed electricians.</span>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-[#0D1F30] border border-white/10 flex items-start gap-3.5 bg-card-grid">
                <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-base mb-1 font-heading">National Mobility</strong>
                  <span className="text-sm text-gray-light leading-relaxed">Rapid crew mobilization to urban plants or remote industrial sites.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 content-animate">
            <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-7 sm:p-8 shadow-2xl flex flex-col gap-6 bg-card-grid">
              <h3 className="text-xl font-bold font-heading text-white border-b border-white/10 pb-4 flex items-center gap-2.5">
                <Award className="w-6 h-6 text-amber" />
                <span>Our Core Identity</span>
              </h3>

              <div className="flex flex-col gap-5 text-sm text-gray-light">
                <div>
                  <span className="text-[#FBBF24] font-bold uppercase tracking-wider block text-xs">Corporate Status</span>
                  <p className="text-white text-base font-semibold mt-1">Federally Incorporated under the CBCA</p>
                </div>
                <div>
                  <span className="text-[#FBBF24] font-bold uppercase tracking-wider block text-xs">Headquarters</span>
                  <p className="text-white text-base font-semibold mt-1">Ontario, Canada (Serving Nationwide)</p>
                </div>
                <div>
                  <span className="text-[#FBBF24] font-bold uppercase tracking-wider block text-xs">General Inquiries</span>
                  <a href="mailto:info@topknotchtrade.com" className="text-white text-base font-semibold hover:text-amber mt-1 block">
                    info@topknotchtrade.com
                  </a>
                </div>
                <div>
                  <span className="text-[#FBBF24] font-bold uppercase tracking-wider block text-xs">Service Line Count</span>
                  <p className="text-white text-base font-semibold mt-1">9 Comprehensive Industrial Trade Lines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section ref={valuesRef} className="py-20 bg-[#0D1F30]/95 border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="value-card p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4 bg-card-grid shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Our <span className="text-amber">Mission</span></h3>
              <p className="text-sm sm:text-base text-gray-light leading-relaxed">
                To provide Canadian industrial operators with the highest standard of skilled trades craftsmanship, uncompromised safety, and responsive service that guarantees equipment reliability.
              </p>
            </div>

            <div className="value-card p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4 bg-card-grid shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Our <span className="text-amber">Vision</span></h3>
              <p className="text-sm sm:text-base text-gray-light leading-relaxed">
                To be Canada’s most trusted industrial trades partner — the first call for plant managers, facility directors, and enterprise logistics networks nationwide.
              </p>
            </div>

            <div className="value-card p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4 bg-card-grid shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Workforce <span className="text-amber">Commitment</span></h3>
              <p className="text-sm sm:text-base text-gray-light leading-relaxed">
                We believe in growing Canada’s industrial workforce — investing in apprenticeships, continuous safety training, and creating high-paying trades jobs across all provinces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Partner with TopKnotch Trade Services"
        subtitle="Learn how our certified trade teams can support your ongoing facility maintenance, shutdown, or expansion."
        primaryBtnText="Contact Our Team"
        primaryBtnLink="/contact"
      />
    </div>
  )
}
