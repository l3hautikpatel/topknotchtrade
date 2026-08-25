import { useEffect, useRef } from 'react'
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Award, Users } from 'lucide-react'
import ContactForm from '../components/forms/ContactForm'
import CTASection from '../components/ui/CTASection'
import SEO from '../components/seo/SEO'
import { animateHeroEntrance, animateScrollReveal, ScrollTrigger } from '../utils/animations'

export default function Contact() {
  const heroRef = useRef(null)
  const cardsRef = useRef(null)
  const formSectionRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      animateHeroEntrance(heroRef.current.querySelectorAll('.hero-animate'))
    }
    if (cardsRef.current) {
      animateScrollReveal(cardsRef.current, cardsRef.current.querySelectorAll('.channel-card'))
    }
    if (formSectionRef.current) {
      animateScrollReveal(formSectionRef.current, formSectionRef.current.querySelectorAll('.form-animate-block'))
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="flex flex-col bg-technical-grid">
      <SEO
        title="Contact TopKnotch Trade Services | Get a Quote"
        description="Get a quote for certified millwright, mechanical, welding, and electrical services in Ontario. 24/7 emergency response."
      />

      {/* ── Page Hero (Starts at top:0 behind navbar) ── */}
      <section
        ref={heroRef}
        className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-[#0D1F30] via-[#11273C]/90 to-[#0D1F30] border-b border-white/10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="hero-animate eyebrow-accent">
            Fast Turnaround • 24/7 On-Call Support
          </div>

          <h1 className="hero-animate text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            Get In Touch &amp; <span className="text-amber">Request a Quote</span>
          </h1>

          <p className="hero-animate text-base sm:text-xl text-gray-light leading-relaxed max-w-2xl">
            Whether you need certified millwrights for scheduled preventive maintenance, emergency breakdown repairs, or a full plant shutdown crew — we deliver.
          </p>
        </div>
      </section>

      {/* ── 4 Channel Contact Cards ── */}
      <section ref={cardsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Direct Call */}
          <div className="channel-card bg-[#0D1F30] border border-white/15 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-amber/40 transition-all flex flex-col justify-between gap-4 bg-card-grid">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">Call Direct</span>
              <div className="p-2.5 rounded-xl bg-amber/10 text-amber shrink-0">
                <Phone className="w-5 h-5" />
              </div>
            </div>
            <div>
              <a
                href="tel:+12267592210"
                className="text-base sm:text-lg font-bold text-white hover:text-amber transition-colors block"
              >
                (226) 759-2210
              </a>
              <span className="text-xs text-gray-light block mt-1">24/7 Emergency Dispatch</span>
            </div>
          </div>

          {/* Card 2: Quotes */}
          <div className="channel-card bg-[#0D1F30] border border-white/15 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-amber/40 transition-all flex flex-col justify-between gap-4 bg-card-grid">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">Project Quotes</span>
              <div className="p-2.5 rounded-xl bg-white/5 text-amber shrink-0">
                <Mail className="w-5 h-5" />
              </div>
            </div>
            <div>
              <a
                href="mailto:contact@topknotchtrade.com"
                className="text-xs sm:text-[13.5px] lg:text-sm font-bold text-white hover:text-amber transition-colors block overflow-visible"
              >
                contact@topknotchtrade.com
              </a>
              <span className="text-xs text-gray-light block mt-1">Estimates in 1 business day</span>
            </div>
          </div>

          {/* Card 3: 24/7 Service */}
          <div className="channel-card bg-[#0D1F30] border border-white/15 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-amber/40 transition-all flex flex-col justify-between gap-4 bg-card-grid">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">Emergency Service</span>
              <div className="p-2.5 rounded-xl bg-white/5 text-amber shrink-0">
                <Clock className="w-5 h-5" />
              </div>
            </div>
            <div>
              <a
                href="mailto:service@topknotchtrade.com"
                className="text-xs sm:text-[13.5px] lg:text-sm font-bold text-white hover:text-amber transition-colors block overflow-visible"
              >
                service@topknotchtrade.com
              </a>
              <span className="text-xs text-gray-light block mt-1">Priority outage callouts</span>
            </div>
          </div>

          {/* Card 4: Careers */}
          <div className="channel-card bg-[#0D1F30] border border-white/15 rounded-2xl p-5 sm:p-6 shadow-xl hover:border-amber/40 transition-all flex flex-col justify-between gap-4 bg-card-grid">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">Trade Careers</span>
              <div className="p-2.5 rounded-xl bg-white/5 text-amber shrink-0">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div>
              <a
                href="mailto:career@topknotchtrade.com"
                className="text-xs sm:text-[13.5px] lg:text-sm font-bold text-white hover:text-amber transition-colors block overflow-visible"
              >
                career@topknotchtrade.com
              </a>
              <span className="text-xs text-gray-light block mt-1">Join certified Canadian crews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Form & Info Section (2 Columns) ── */}
      <section ref={formSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ── Left Column: Contact Form (7 cols) ── */}
          <div className="form-animate-block lg:col-span-7 flex flex-col gap-4">
            <div className="eyebrow-accent">
              Send An Inquiry / Quote Request
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">
              Tell Us About Your Project Or <span className="text-amber">Maintenance Need</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-light leading-relaxed mb-2">
              Fill out the form below. For quotes, provide equipment or scope details so our estimators can provide an accurate, itemized proposal.
            </p>

            <ContactForm />
          </div>

          {/* ── Right Column: Credentials & Service Area (5 cols) ── */}
          <div className="form-animate-block lg:col-span-5 flex flex-col gap-6">
            {/* Service Area Card */}
            <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-7 sm:p-8 shadow-xl flex flex-col gap-5 bg-card-grid">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-amber/15 text-amber">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                    Nationwide Service <span className="text-amber">Coverage</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-light">Headquartered in Ontario • Mobilizing Coast to Coast</p>
                </div>
              </div>

              <div className="h-[1px] bg-white/10" />

              <p className="text-sm sm:text-base text-gray-light leading-relaxed">
                As a federally incorporated company under the <strong>Canada Business Corporations Act (CBCA)</strong>, TopKnotch Trade Services is legally authorized and insured to mobilize certified trade crews across all 13 Canadian provinces and territories.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-bold text-white block text-sm">Ontario &amp; GTA</span>
                  <span className="text-xs text-gray-light mt-1 block">Toronto, Mississauga, Brampton, KWC, London, Windsor, Ottawa</span>
                </div>
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <span className="font-bold text-white block text-sm">Canada-Wide</span>
                  <span className="text-xs text-gray-light mt-1 block">Remote plant shutdowns, mining &amp; multi-site contracts</span>
                </div>
              </div>
            </div>

            {/* Why Work With Us Highlights */}
            <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-7 sm:p-8 shadow-xl flex flex-col gap-5 bg-card-grid">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-white/5 text-amber">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                    Our Contractor <span className="text-amber">Guarantee</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-light">TopKnotch Quality • Every Trade • Every Time</p>
                </div>
              </div>

              <div className="h-[1px] bg-white/10" />

              <ul className="flex flex-col gap-3.5 text-sm text-gray-light">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                  <span><strong>100% Certified Workforce:</strong> Red Seal, CWB, or provincial journeyperson tickets on every job.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                  <span><strong>Zero-Incident Safety:</strong> Strictly compliant with OHSA, WSIB, and facility-specific safety standards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                  <span><strong>Transparent Pricing:</strong> Detailed itemized quotes with clear scopes and no surprise billing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                  <span><strong>Full Documentation:</strong> Detailed work orders, inspection sign-offs, and PM logs provided.</span>
                </li>
              </ul>
            </div>

            {/* Direct Head Office Card */}
            <div className="p-6 rounded-2xl bg-amber/10 border border-amber/30 text-sm text-gray-light flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-[#FBBF24] font-bold uppercase tracking-wider text-xs sm:text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>General Office Inquiries</span>
              </div>
              <p className="text-sm">
                For corporate inquiries, supplier partnerships, or administrative communications:
              </p>
              <a
                href="mailto:info@topknotchtrade.com"
                className="text-white font-bold text-base hover:text-amber transition-colors"
              >
                info@topknotchtrade.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom Callout ── */}
      <CTASection
        title="Have an Immediate Machinery Breakdown?"
        subtitle="Our on-call millwright and emergency repair crews are available 24/7 to minimize production downtime."
        primaryBtnText="Request Rapid Service"
        primaryBtnLink="/contact?type=quote"
        secondaryBtnText="Call Emergency Line (226) 759-2210"
        secondaryBtnLink="tel:+12267592210"
      />
    </div>
  )
}
