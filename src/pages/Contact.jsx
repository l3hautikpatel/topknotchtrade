import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Award, Users } from 'lucide-react'
import ContactForm from '../components/forms/ContactForm'
import CTASection from '../components/ui/CTASection'

export default function Contact() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* ── Page Hero ── */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#0D1F30] to-[#1A3651] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber/15 border border-amber/30 text-amber text-xs font-bold uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5" />
            <span>Fast Turnaround • 24/7 On-Call Support</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            Get In Touch &amp; Request a Quote
          </h1>

          <p className="text-base sm:text-lg text-gray-light leading-relaxed max-w-2xl">
            Whether you need certified millwrights for scheduled preventive maintenance, emergency breakdown repairs, or a full plant shutdown crew — we deliver.
          </p>
        </div>
      </section>

      {/* ── 4 Channel Contact Cards ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Direct Call */}
          <div className="bg-[#0D1F30] border border-white/15 rounded-xl p-5 shadow-xl hover:border-amber/40 transition-all flex items-start gap-4">
            <div className="p-3 rounded-lg bg-amber/10 text-amber shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-amber font-bold uppercase tracking-wider block">Call Direct</span>
              <a
                href="tel:+12267592210"
                className="text-sm sm:text-base font-bold text-white hover:text-amber transition-colors mt-0.5 block"
              >
                (226) 759-2210
              </a>
              <span className="text-[11px] text-gray block mt-0.5">24/7 Emergency Dispatch</span>
            </div>
          </div>

          {/* Card 2: Quotes */}
          <div className="bg-[#0D1F30] border border-white/15 rounded-xl p-5 shadow-xl hover:border-amber/40 transition-all flex items-start gap-4">
            <div className="p-3 rounded-lg bg-white/5 text-amber shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-amber font-bold uppercase tracking-wider block">Project Quotes</span>
              <a
                href="mailto:contact@topknotchtrade.com"
                className="text-xs sm:text-sm font-bold text-white hover:text-amber transition-colors mt-0.5 block truncate"
              >
                contact@topknotchtrade.com
              </a>
              <span className="text-[11px] text-gray block mt-0.5">Estimates in 1 business day</span>
            </div>
          </div>

          {/* Card 3: 24/7 Service */}
          <div className="bg-[#0D1F30] border border-white/15 rounded-xl p-5 shadow-xl hover:border-amber/40 transition-all flex items-start gap-4">
            <div className="p-3 rounded-lg bg-white/5 text-amber shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-amber font-bold uppercase tracking-wider block">Emergency Service</span>
              <a
                href="mailto:service@topknotchtrade.com"
                className="text-xs sm:text-sm font-bold text-white hover:text-amber transition-colors mt-0.5 block truncate"
              >
                service@topknotchtrade.com
              </a>
              <span className="text-[11px] text-gray block mt-0.5">Priority outage callouts</span>
            </div>
          </div>

          {/* Card 4: Careers */}
          <div className="bg-[#0D1F30] border border-white/15 rounded-xl p-5 shadow-xl hover:border-amber/40 transition-all flex items-start gap-4">
            <div className="p-3 rounded-lg bg-white/5 text-amber shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-amber font-bold uppercase tracking-wider block">Trade Careers</span>
              <a
                href="mailto:career@topknotchtrade.com"
                className="text-xs sm:text-sm font-bold text-white hover:text-amber transition-colors mt-0.5 block truncate"
              >
                career@topknotchtrade.com
              </a>
              <span className="text-[11px] text-gray block mt-0.5">Join certified Canadian crews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Form & Info Section (2 Columns) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ── Left Column: Contact Form (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber">
              <span>Send An Inquiry / Quote Request</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Tell Us About Your Project Or Maintenance Need
            </h2>
            <p className="text-sm text-gray leading-relaxed mb-2">
              Fill out the form below. For quotes, provide equipment or scope details so our estimators can provide an accurate, itemized proposal.
            </p>

            <ContactForm />
          </div>

          {/* ── Right Column: Credentials & Service Area (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Service Area Card */}
            <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-6 shadow-xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber/15 text-amber">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-white">
                    Nationwide Service Coverage
                  </h3>
                  <p className="text-xs text-gray">Headquartered in Ontario • Mobilizing Coast to Coast</p>
                </div>
              </div>

              <div className="h-[1px] bg-white/10" />

              <p className="text-xs text-gray-light leading-relaxed">
                As a federally incorporated company under the <strong>Canada Business Corporations Act (CBCA)</strong>, TopKnotch Trade Services is legally authorized and insured to mobilize certified trade crews across all 13 Canadian provinces and territories.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                  <span className="font-bold text-white block">Ontario &amp; GTA</span>
                  <span className="text-[11px] text-gray">Toronto, Mississauga, Brampton, KWC, London, Windsor, Ottawa</span>
                </div>
                <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                  <span className="font-bold text-white block">Canada-Wide</span>
                  <span className="text-[11px] text-gray">Remote plant shutdowns, mining &amp; multi-site contracts</span>
                </div>
              </div>
            </div>

            {/* Why Work With Us Highlights */}
            <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-6 shadow-xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 text-amber">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-heading text-white">
                    Our Contractor Guarantee
                  </h3>
                  <p className="text-xs text-gray">TopKnotch Quality • Every Trade • Every Time</p>
                </div>
              </div>

              <div className="h-[1px] bg-white/10" />

              <ul className="flex flex-col gap-3 text-xs text-gray-light">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>100% Certified Workforce:</strong> Every technician holds Red Seal, CWB, or provincial journeyperson tickets.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>Zero-Incident Safety Culture:</strong> Strictly compliant with OHSA, WSIB, and facility-specific safety standards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>Transparent Pricing:</strong> Detailed itemized quotes with clear scopes and no surprise billing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Documentation:</strong> Detailed work orders, inspection sign-offs, and PM logs provided on every job.</span>
                </li>
              </ul>
            </div>

            {/* Direct Head Office Card */}
            <div className="p-5 rounded-2xl bg-amber/10 border border-amber/30 text-xs text-gray-light flex flex-col gap-2">
              <div className="flex items-center gap-2 text-amber font-bold uppercase tracking-wider text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>General Office Inquiries</span>
              </div>
              <p>
                For corporate inquiries, supplier partnerships, or administrative communications:
              </p>
              <a
                href="mailto:info@topknotchtrade.com"
                className="text-white font-bold hover:text-amber transition-colors"
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
