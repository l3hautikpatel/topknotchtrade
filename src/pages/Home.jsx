import { Link } from 'react-router'
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Cog,
  Flame,
  Anchor,
  Zap,
  AlertTriangle,
  ClipboardCheck,
  Calendar,
  Boxes,
  Factory,
  UtensilsCrossed,
  Sparkles,
  HardHat,
  Building2,
  Server,
  Car,
  Clock,
  FileText,
  Users2,
  DollarSign
} from 'lucide-react'
import logoFull from '../assets/topknotch-full.png'
import { services } from '../data/services'
import { industries } from '../data/industries'
import CTASection from '../components/ui/CTASection'

const serviceIconMap = {
  Wrench,
  Cog,
  Flame,
  Anchor,
  Zap,
  ShieldCheck,
  AlertTriangle,
  ClipboardCheck,
  Calendar
}

const industryIconMap = {
  Boxes,
  Factory,
  UtensilsCrossed,
  Sparkles,
  HardHat,
  Building2,
  Server,
  Car
}

const differentiators = [
  {
    icon: Users2,
    title: '100% Certified Workforce',
    desc: 'Every technician holds the required tickets, Red Seal, CWB, or 442A/309A licenses. Zero shortcuts.'
  },
  {
    icon: ShieldCheck,
    title: 'Safety First Always',
    desc: 'Comprehensive safety protocols aligned with the Occupational Health and Safety Act (OHSA) and zero-incident standards.'
  },
  {
    icon: Building2,
    title: 'Nationwide Reach',
    desc: 'Federally incorporated under the CBCA with legal authority and insurance to mobilize across all 13 provinces.'
  },
  {
    icon: FileText,
    title: 'Full Documentation',
    desc: 'Detailed work orders, laser alignment certificates, PM history, and punch-list sign-offs for your asset records.'
  },
  {
    icon: HardHat,
    title: 'Scalable Capacity',
    desc: 'From an urgent single-tech service call to a 30+ person planned plant turnaround crew.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    desc: 'Clear, itemized proposals with transparent rates. No surprise fees or unaccounted extras.'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── 1. Hero Section ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0D1F30] via-[#1A3651] to-[#1A3651]">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-amber/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber/15 border border-amber/35 text-amber text-xs sm:text-sm font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span>Canada’s Industrial Trade Partner</span>
          </div>

          {/* Logo Hero Lockup */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl inline-block">
            <img
              src={logoFull}
              alt="TopKnotch Trade Services logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight text-white leading-[1.05]">
            Where Trades Meet <span className="text-amber">Excellence.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-gray-light leading-relaxed max-w-3xl font-normal">
            Certified millwright, mechanical installation, welding, rigging, and electrical trade services for warehouses, manufacturing plants, and distribution hubs across Canada.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-2">
            <Link
              to="/contact?type=quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-amber text-navy font-bold text-sm uppercase tracking-wider hover:bg-amber-hover hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-amber/25"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border-2 border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-all"
            >
              <Wrench className="w-4 h-4 text-amber" />
              <span>Explore 9 Services</span>
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="pt-8 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-gray">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber" />
              <span className="text-white/90 font-medium">CBCA Federally Incorporated</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber" />
              <span className="text-white/90 font-medium">Serving All 13 Provinces &amp; Territories</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber" />
              <span className="text-white/90 font-medium">24/7 Emergency Dispatch</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Full-Width Stats Bar (Safety Amber) ── */}
      <section className="bg-amber text-navy py-8 px-4 sm:px-6 lg:px-8 border-y-2 border-amber-dark shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
              9+
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider mt-1 opacity-90">
              Core Trade Lines
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
              13
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider mt-1 opacity-90">
              Provinces &amp; Territories
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
              100%
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider mt-1 opacity-90">
              Certified Trades
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight">
              24/7
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider mt-1 opacity-90">
              Emergency Response
            </span>
          </div>
        </div>
      </section>

      {/* ── 3. Emergency Breakdown Alert Banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-20">
        <div className="bg-[#0D1F30] border-2 border-amber/40 rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-amber/20 text-amber flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber block">
                Urgent Production Stoppage?
              </span>
              <p className="text-sm sm:text-base font-bold text-white">
                24/7 Emergency Millwright &amp; Mechanical Breakdown Dispatch
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:+12267592210"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber text-navy font-bold text-xs uppercase tracking-wider hover:bg-amber-hover transition-all shadow-md shadow-amber/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call (226) 759-2210</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. Services Overview (All 9 Services) ── */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <div className="text-xs font-bold uppercase tracking-widest text-amber">
            Complete Industrial Lifecycle Support
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
            What We Do
          </h2>
          <p className="text-sm sm:text-base text-gray-light leading-relaxed">
            We provide full-scope trade contracting — from initial mechanical rigging and installation to preventive maintenance, precision alignment, and rapid emergency repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = serviceIconMap[service.icon] || Wrench
            return (
              <div
                key={service.id}
                className="bg-[#0D1F30] border border-white/10 hover:border-amber/60 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-amber/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-amber text-amber group-hover:text-navy flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-white/30 group-hover:text-amber transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber transition-colors mb-2">
                    {service.name}
                  </h3>

                  <p className="text-xs text-amber font-medium mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-light leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <ul className="flex flex-col gap-1.5 text-xs text-gray border-t border-white/10 pt-4 mb-6">
                    {service.bullets.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                        <span className="truncate">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-amber hover:text-white inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Learn More</span>
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

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 hover:border-amber text-white hover:text-amber text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>View All 9 Services in Detail</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── 5. Why TopKnotch (6 Differentiators) ── */}
      <section className="py-20 bg-[#0D1F30] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
            <div className="text-xs font-bold uppercase tracking-widest text-amber">
              The Contractor Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
              Why TopKnotch Trade Services?
            </h2>
            <p className="text-sm sm:text-base text-gray-light leading-relaxed">
              We stand apart through our certified tradespeople, strict zero-incident safety standards, and transparent documentation on every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {differentiators.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber/40 transition-all flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Industries We Serve ── */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <div className="text-xs font-bold uppercase tracking-widest text-amber">
            Cross-Sector Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-base text-gray-light leading-relaxed">
            Our trade crews are equipped to operate inside high-demand industrial facilities with specialized safety and compliance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const IndIcon = industryIconMap[ind.icon] || Factory
            return (
              <div
                key={ind.id}
                className="bg-[#0D1F30] border border-white/10 rounded-xl p-5 shadow-lg flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber/10 text-amber flex items-center justify-center mb-3">
                    <IndIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-white mb-1.5">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-gray leading-relaxed">
                    {ind.shortDesc}
                  </p>
                </div>
                <Link
                  to="/industries"
                  className="text-[11px] font-bold text-amber hover:underline inline-flex items-center gap-1"
                >
                  <span>Learn Sector Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 7. Global Bottom CTA ── */}
      <CTASection
        title="Ready to Keep Your Industrial Facility Running at Its Best?"
        subtitle="Get a fast, transparent quote from Canada's top industrial trade services team — on-call 24/7."
        primaryBtnText="Request a Free Quote"
        primaryBtnLink="/contact?type=quote"
      />
    </div>
  )
}
