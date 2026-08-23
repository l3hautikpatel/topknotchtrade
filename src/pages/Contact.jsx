import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Award, Users } from 'lucide-react'
import ContactForm from '../components/forms/ContactForm'
import CTASection from '../components/ui/CTASection'

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* ── Page Hero (Starts at top:0 behind navbar) ── */}
      <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-[#0D1F30] via-[#11273C] to-[#1A3651] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/15 border border-amber/40 text-[#FBBF24] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
            <Clock className="w-4 h-4" />
            <span>Fast Turnaround • 24/7 On-Call Support</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            Get In Touch &amp; Request a Quote
          </h1>

          <p className="text-base sm:text-xl text-gray-light leading-relaxed max-w-2xl">
            Whether you need certified millwrights for scheduled preventive maintenance, emergency breakdown repairs, or a full plant shutdown crew — we deliver.
          </p>
        </div>
      </section>

      {/* ── 4 Channel Contact Cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Direct Call */}
          <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-6 shadow-xl hover:border-amber/40 transition-all flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-amber/10 text-amber shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24] block">Call Direct</span>
              <a
                href="tel:+12267592210"
                className="text-base font-bold text-white hover:text-amber transition-colors mt-0.5 block"
              >
                (226) 759-2210
              </a>
              <span className="text-xs text-gray-light block mt-1">24/7 Emergency Dispatch</span>
            </div>
          </div>

          {/* Card 2: Quotes */}
          <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-6 shadow-xl hover:border-amber/40 transition-all flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-white/5 text-amber shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24] block">Project Quotes</span>
              <a
                href="mailto:contact@topknotchtrade.com"
                className="text-sm font-bold text-white hover:text-amber transition-colors mt-0.5 block truncate"
              >
                contact@topknotchtrade.com
              </a>
              <span className="text-xs text-gray-light block mt-1">Estimates in 1 business day</span>
            </div>
          </div>

          {/* Card 3: 24/7 Service */}
          <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-6 shadow-xl hover:border-amber/40 transition-all flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-white/5 text-amber shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24] block">Emergency Service</span>
              <a
                href="mailto:service@topknotchtrade.com"
                className="text-sm font-bold text-white hover:text-amber transition-colors mt-0.5 block truncate"
              >
                service@topknotchtrade.com
              </a>
              <span className="text-xs text-gray-light block mt-1">Priority outage callouts</span>
            </div>
          </div>

          {/* Card 4: Careers */}
          <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-6 shadow-xl hover:border-amber/40 transition-all flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-white/5 text-amber shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24] block">Trade Careers</span>
              <a
                href="mailto:career@topknotchtrade.com"
                className="text-sm font-bold text-white hover:text-amber transition-colors mt-0.5 block truncate"
              >
                career@topknotchtrade.com
              </a>
              <span className="text-xs text-gray-light block mt-1">Join certified Canadian crews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Form & Info Section (2 Columns) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ── Left Column: Contact Form (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FBBF24]">
              <span>Send An Inquiry / Quote Request</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">
              Tell Us About Your Project Or Maintenance Need
            </h2>
            <p className="text-base sm:text-lg text-gray-light leading-relaxed mb-2">
              Fill out the form below. For quotes, provide equipment or scope details so our estimators can provide an accurate, itemized proposal.
            </p>

            <ContactForm />
          </div>

          {/* ── Right Column: Credentials & Service Area (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Service Area Card */}
            <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-7 sm:p-8 shadow-xl flex flex-col gap-5">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-amber/15 text-amber">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                    Nationwide Service Coverage
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
            <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-7 sm:p-8 shadow-xl flex flex-col gap-5">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-white/5 text-amber">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                    Our Contractor Guarantee
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
