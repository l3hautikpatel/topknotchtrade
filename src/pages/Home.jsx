import { useState, useRef, useEffect } from 'react'
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
  DollarSign,
  CheckCircle2
} from 'lucide-react'
import logoDark from '../assets/Logos/Dark-logo-text.png'
import { services } from '../data/services'
import { industries } from '../data/industries'
import CTASection from '../components/ui/CTASection'
import { animateHeroEntrance, animateScrollReveal, gsap, ScrollTrigger } from '../utils/animations'

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
    desc: 'Every technician holds Red Seal, CWB, or provincial journeyperson tickets with zero shortcuts.'
  },
  {
    icon: ShieldCheck,
    title: 'Safety First Always',
    desc: 'Comprehensive safety programs aligned with the Occupational Health and Safety Act (OHSA) and zero-incident standards.'
  },
  {
    icon: Building2,
    title: 'Nationwide Reach',
    desc: 'Federally incorporated under the CBCA with full authorization and insurance to mobilize across all 13 Canadian provinces.'
  },
  {
    icon: FileText,
    title: 'Full Documentation',
    desc: 'Detailed work orders, precision laser alignment certificates, PM history, and punch-list sign-offs for your asset records.'
  },
  {
    icon: HardHat,
    title: 'Scalable Capacity',
    desc: 'From an urgent single-technician emergency service call to a 30+ person planned plant turnaround crew.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    desc: 'Clear, itemized proposals with honest rates and zero surprise billing.'
  }
]

export default function Home() {
  const [activeIndustryId, setActiveIndustryId] = useState(industries[0].id)
  const selectedIndustry = industries.find((ind) => ind.id === activeIndustryId) || industries[0]
  const SelectedIndIcon = industryIconMap[selectedIndustry.icon] || Factory

  // Animation section refs
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const emergencyRef = useRef(null)
  const servicesRef = useRef(null)
  const whyRef = useRef(null)
  const industriesRef = useRef(null)

  useEffect(() => {
    // 1. Hero entrance stagger
    if (heroRef.current) {
      animateHeroEntrance(heroRef.current.querySelectorAll('.hero-animate'))
    }

    // 2. Stats bar live count-up animation
    if (statsRef.current) {
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            statsRef.current.querySelectorAll('.stat-item'),
            { opacity: 0, scale: 0.9, y: 16 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)' }
          )
        }
      })
    }

    // 3. Emergency banner reveal
    if (emergencyRef.current) {
      animateScrollReveal(emergencyRef.current, emergencyRef.current)
    }

    // 4. Services section reveal
    if (servicesRef.current) {
      animateScrollReveal(
        servicesRef.current,
        servicesRef.current.querySelectorAll('.service-card-item')
      )
    }

    // 5. Why Us section reveal
    if (whyRef.current) {
      animateScrollReveal(
        whyRef.current,
        whyRef.current.querySelectorAll('.why-card-item')
      )
    }

    // 6. Industries section reveal
    if (industriesRef.current) {
      animateScrollReveal(
        industriesRef.current,
        industriesRef.current.querySelectorAll('.industry-animate-item')
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="flex flex-col bg-technical-grid">
      {/* ── 1. Hero Section ── */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center justify-center pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0D1F30]/90 via-[#11273C]/80 to-[#0D1F30]"
      >
        {/* Ambient background glow & technical grid accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-amber/15 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-technical-grid opacity-60 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8 z-10">
          {/* Badge */}
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber/15 border border-amber/40 text-[#FBBF24] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24] animate-pulse" />
            <span>Canada’s Industrial Trade Partner</span>
          </div>

          {/* Logo Hero Lockup */}
          <div className="hero-animate py-2 inline-block">
            <img
              src={logoDark}
              alt="TopKnotch Trade Services"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Headline with amber highlight */}
          <h1 className="hero-animate text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight text-white leading-[1.08]">
            Where Trades Meet <span className="text-amber">Excellence.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-animate text-base sm:text-xl md:text-2xl text-gray-light leading-relaxed max-w-3xl font-normal">
            Certified millwright, mechanical installation, welding, rigging, and electrical trade services for warehouses, manufacturing plants, and distribution hubs across Canada.
          </p>

          {/* Dual CTAs */}
          <div className="hero-animate flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-3">
            <Link
              to="/contact?type=quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber text-[#0D1F30] font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-amber-hover hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-amber/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#0D1F30]" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border-2 border-white/25 text-white font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              <Wrench className="w-4 h-4 text-amber" />
              <span>Explore 9 Services</span>
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="hero-animate pt-8 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-light">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber" />
              <span className="text-white font-medium">CBCA Federally Incorporated</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber" />
              <span className="text-white font-medium">Serving All 13 Provinces &amp; Territories</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber" />
              <span className="text-white font-medium">24/7 Emergency Dispatch</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Full-Width Stats Bar (Safety Amber) ── */}
      <section
        ref={statsRef}
        className="bg-amber text-[#0D1F30] py-9 px-4 sm:px-6 lg:px-8 border-y-2 border-amber-dark shadow-inner relative z-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="stat-item flex flex-col items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-[#0D1F30]">
              9+
            </span>
            <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider mt-1 text-[#0D1F30]">
              Core Trade Lines
            </span>
          </div>

          <div className="stat-item flex flex-col items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-[#0D1F30]">
              13
            </span>
            <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider mt-1 text-[#0D1F30]">
              Provinces &amp; Territories
            </span>
          </div>

          <div className="stat-item flex flex-col items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-[#0D1F30]">
              100%
            </span>
            <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider mt-1 text-[#0D1F30]">
              Certified Trades
            </span>
          </div>

          <div className="stat-item flex flex-col items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-[#0D1F30]">
              24/7
            </span>
            <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider mt-1 text-[#0D1F30]">
              Emergency Response
            </span>
          </div>
        </div>
      </section>

      {/* ── 3. Emergency Breakdown Alert Banner ── */}
      <section
        ref={emergencyRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 relative z-20"
      >
        <div className="bg-[#0D1F30] border-2 border-amber/40 rounded-2xl p-6 sm:p-7 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-5 bg-card-grid">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber/20 text-amber flex items-center justify-center shrink-0">
              <AlertTriangle className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <span className="eyebrow-accent mb-1 block">
                Urgent Production Stoppage
              </span>
              <p className="text-base sm:text-lg font-bold text-white mt-0.5">
                24/7 Emergency Millwright &amp; Mechanical Breakdown Dispatch
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:+12267592210"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber text-[#0D1F30] font-extrabold text-sm uppercase tracking-wider hover:bg-amber-hover transition-all shadow-md shadow-amber/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              <Phone className="w-4 h-4 text-[#0D1F30]" />
              <span>Call (226) 759-2210</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. Services Overview (Streamlined, punchy 9 cards) ── */}
      <section
        ref={servicesRef}
        className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <div className="eyebrow-accent">
            Complete Industrial Lifecycle Support
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
            Industrial <span className="text-amber">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-light leading-relaxed">
            Full-scope trade contracting — from initial mechanical rigging and precision installation to preventive maintenance and rapid 24/7 breakdown recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = serviceIconMap[service.icon] || Wrench
            return (
              <div
                key={service.id}
                className="service-card-item bg-[#0D1F30] border border-white/10 hover:border-amber/60 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-amber/10 transition-all duration-300 flex flex-col justify-between group bg-card-grid"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-amber text-amber group-hover:text-[#0D1F30] flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-white/70 group-hover:text-amber transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber transition-colors mb-2 min-h-[32px] flex items-center">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#FBBF24] font-semibold mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-gray-light leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber hover:text-white inline-flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                  >
                    <span>Full Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to={`/contact?type=quote&service=${encodeURIComponent(service.name)}`}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-amber hover:text-[#0D1F30] text-xs font-bold text-white transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/25 hover:border-amber text-white hover:text-amber text-xs sm:text-sm font-bold uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          >
            <span>View All 9 Services With Full Equipment Specs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── 5. Why TopKnotch (6 Differentiators with bold cards) ── */}
      <section
        ref={whyRef}
        className="py-20 sm:py-28 bg-[#0D1F30]/95 border-y border-white/10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
            <div className="eyebrow-accent">
              The Contractor Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
              Why TopKnotch <span className="text-amber">Trade Services?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-light leading-relaxed">
              We stand apart through our certified tradespeople, strict zero-incident safety standards, and transparent documentation on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {differentiators.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="why-card-item p-7 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber/40 transition-all flex flex-col gap-4 shadow-lg bg-card-grid"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 6. Interactive Industries Showcase (Interactive & Visual) ── */}
      <section
        ref={industriesRef}
        className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center gap-3">
          <div className="eyebrow-accent">
            Cross-Sector Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white">
            Industries <span className="text-amber">We Serve</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-light leading-relaxed">
            Select an industry sector below to see tailored trade solutions and compliance standards.
          </p>
        </div>

        {/* Industry Pill Selector Tabs */}
        <div className="industry-animate-item flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {industries.map((ind) => {
            const IndIcon = industryIconMap[ind.icon] || Factory
            const isActive = ind.id === activeIndustryId
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber ${
                  isActive
                    ? 'bg-amber text-[#0D1F30] shadow-lg shadow-amber/20 scale-[1.02]'
                    : 'bg-[#0D1F30] border border-white/10 text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <IndIcon className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            )
          })}
        </div>

        {/* Active Industry Spotlight Box */}
        <div className="industry-animate-item bg-[#0D1F30] border-2 border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 bg-card-grid">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-amber/15 text-amber flex items-center justify-center">
                <SelectedIndIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FBBF24] block">
                  Industry Focus
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                  {selectedIndustry.name}
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-light leading-relaxed">
              {selectedIndustry.shortDesc}
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-[#FBBF24] font-medium flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber shrink-0" />
              <span>{selectedIndustry.highlight}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 shrink-0 w-full lg:w-auto">
            <Link
              to={`/contact?type=quote&industry=${encodeURIComponent(selectedIndustry.name)}`}
              className="px-8 py-4 rounded-xl bg-amber text-[#0D1F30] font-extrabold text-sm uppercase tracking-wider text-center hover:bg-amber-hover transition-all shadow-xl shadow-amber/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              Request {selectedIndustry.name} Quote
            </Link>

            <Link
              to="/industries"
              className="px-6 py-3 rounded-xl border border-white/20 text-white font-bold text-xs uppercase tracking-wider text-center hover:bg-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              View All 8 Sectors
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. Global Bottom CTA ── */}
      <CTASection
        title="Ready to Keep Your Industrial Facility Running at Its Best?"
        subtitle="Get a fast, transparent quote from Canada's top industrial trade services team — on-call 24/7 across all provinces."
        primaryBtnText="Request a Free Quote"
        primaryBtnLink="/contact?type=quote"
      />
    </div>
  )
}
