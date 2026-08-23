import { ShieldCheck, Target, Eye, Award, CheckCircle2, Users } from 'lucide-react'
import CTASection from '../components/ui/CTASection'

export default function About() {
  return (
    <div className="flex flex-col">
      {/* ── Hero Banner (Starts at top:0 behind navbar) ── */}
      <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-[#0D1F30] via-[#11273C] to-[#1A3651] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber/15 border border-amber/40 text-[#FBBF24] text-xs font-extrabold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Federally Incorporated Under CBCA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            Built for Industry. Built for Canada.
          </h1>

          <p className="text-base sm:text-lg text-gray-light leading-relaxed max-w-3xl">
            TopKnotch Trade Services Inc. is a specialized industrial contracting firm headquartered in Toronto, Ontario — purpose-built to deliver certified trade excellence across Canada.
          </p>
        </div>
      </section>

      {/* ── Who We Are Section ── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#FBBF24]">
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
              Where Trades Meet Excellence
            </h2>
            <p className="text-sm sm:text-base text-gray-light leading-relaxed">
              We are not a general staffing agency or generic handyman service. We are a specialized industrial trades firm — purpose-built to support the operational and maintenance needs of warehouses, distribution centres, manufacturing plants, food processing facilities, logistics hubs, and heavy industrial facilities from coast to coast.
            </p>
            <p className="text-sm sm:text-base text-gray-light leading-relaxed">
              Every technician we deploy, every machine we install, and every weld we lay is held to the highest standard in the trade. As a federally incorporated company under the <strong>Canada Business Corporations Act (CBCA)</strong>, TopKnotch Trade Services Inc. is authorized and recognized to operate across all 13 Canadian provinces and territories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0D1F30] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white block text-sm mb-0.5">Certified Workforce</strong>
                  Red Seal millwrights, CWB welders, and licensed electricians.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#0D1F30] border border-white/10 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white block text-sm mb-0.5">National Mobility</strong>
                  Rapid crew mobilization to urban plants or remote industrial sites.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#0D1F30] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
              <h3 className="text-lg font-bold font-heading text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber" />
                <span>Our Core Identity</span>
              </h3>

              <div className="flex flex-col gap-4 text-xs text-gray-light">
                <div>
                  <span className="text-[#FBBF24] font-bold uppercase tracking-wider block text-[11px]">Corporate Status</span>
                  <p className="text-white text-sm font-semibold mt-0.5">Federally Incorporated under the CBCA</p>
                </div>
                <div>
                  <span className="text-[#FBBF24] font-bold uppercase tracking-wider block text-[11px]">Headquarters</span>
                  <p className="text-white text-sm font-semibold mt-0.5">Ontario, Canada (Serving Nationwide)</p>
                </div>
                <div>
                  <span className="text-[#FBBF24] font-bold uppercase tracking-wider block text-[11px]">General Inquiries</span>
                  <a href="mailto:info@topknotchtrade.com" className="text-white text-sm font-semibold hover:text-amber mt-0.5 block">
                    info@topknotchtrade.com
                  </a>
                </div>
                <div>
                  <span className="text-[#FBBF24] font-bold uppercase tracking-wider block text-[11px]">Service Line Count</span>
                  <p className="text-white text-sm font-semibold mt-0.5">9 Comprehensive Industrial Trade Lines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 bg-[#0D1F30] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-gray-light leading-relaxed">
                To provide Canadian industrial operators with the highest standard of skilled trades craftsmanship, uncompromised safety, and responsive service that guarantees equipment reliability.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-gray-light leading-relaxed">
                To be Canada’s most trusted industrial trades partner — the first call for plant managers, facility directors, and enterprise logistics networks nationwide.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white">Workforce Commitment</h3>
              <p className="text-xs sm:text-sm text-gray-light leading-relaxed">
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
