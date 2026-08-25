import { useEffect, useRef } from 'react'
import { ShieldCheck, Award, Mail, ArrowRight, DollarSign, MapPin } from 'lucide-react'
import CTASection from '../components/ui/CTASection'
import SEO from '../components/seo/SEO'
import { animateHeroEntrance, animateScrollReveal, ScrollTrigger } from '../utils/animations'

const openPositions = [
  {
    title: 'Certified Industrial Millwright (Red Seal / 433A)',
    location: 'Greater Toronto Area & Travel (Ontario)',
    type: 'Full-time / Project Contracts',
    desc: 'Installation, precision laser alignment, conveyor maintenance, pump rebuilds, and breakdown response.'
  },
  {
    title: 'CWB Certified Welder / Fabricator',
    location: 'Toronto & On-Site Mobile (Ontario)',
    type: 'Full-time / Outage Contracts',
    desc: 'Structural steel welding, stainless sanitary process piping, on-site field repairs, and metal fabrication.'
  },
  {
    title: 'Industrial Rigging Specialist',
    location: 'Ontario & Canada-Wide Mobilization',
    type: 'Contract / Project Basis',
    desc: 'Heavy machinery moving, crane rigging, skate/jack placement in tight industrial plant spaces.'
  },
  {
    title: 'Industrial Electrician (442A / 309A)',
    location: 'Ontario Facilities',
    type: 'Full-time / Outage Contracts',
    desc: 'Motor control centers, PLC wiring, automation raceways, and emergency electrical troubleshooting.'
  }
]

export default function Careers() {
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const jobsRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      animateHeroEntrance(heroRef.current.querySelectorAll('.hero-animate'))
    }
    if (benefitsRef.current) {
      animateScrollReveal(benefitsRef.current, benefitsRef.current.querySelectorAll('.benefit-card'))
    }
    if (jobsRef.current) {
      animateScrollReveal(jobsRef.current, jobsRef.current.querySelectorAll('.job-card'))
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="flex flex-col bg-technical-grid">
      <SEO
        title="Careers | Millwright & Skilled Trade Jobs in Ontario"
        description="Join TopKnotch Trade Services. We are hiring certified millwrights, welders, and industrial electricians across Ontario. View open positions."
      />

      {/* ── Hero (Starts at top:0 behind navbar) ── */}
      <section
        ref={heroRef}
        className="pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-b from-[#0D1F30] via-[#11273C]/90 to-[#0D1F30] border-b border-white/10 relative"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="hero-animate eyebrow-accent">
            Join Canada’s Premier Trade Team
          </div>

          <h1 className="hero-animate text-4xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            Build Your Career with <span className="text-amber">TopKnotch</span>
          </h1>

          <p className="hero-animate text-base sm:text-xl text-gray-light leading-relaxed max-w-3xl">
            We are always looking for top-tier Red Seal millwrights, CWB welders, certified riggers, and industrial electricians who take pride in craftsmanship, safety, and excellence.
          </p>
        </div>
      </section>

      {/* ── Benefits / Why Join Us ── */}
      <section ref={benefitsRef} className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="benefit-card p-7 sm:p-8 rounded-2xl bg-[#0D1F30] border border-white/10 flex flex-col gap-4 shadow-lg bg-card-grid">
            <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">Competitive <span className="text-amber">Compensation</span></h3>
            <p className="text-sm sm:text-base text-gray-light leading-relaxed">
              Top industry rates, overtime opportunities, travel premiums, and reliable on-time pay schedules.
            </p>
          </div>

          <div className="benefit-card p-7 sm:p-8 rounded-2xl bg-[#0D1F30] border border-white/10 flex flex-col gap-4 shadow-lg bg-card-grid">
            <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">Safety-First <span className="text-amber">Culture</span></h3>
            <p className="text-sm sm:text-base text-gray-light leading-relaxed">
              We provide proper PPE, strict safety protocols, and never compromise the well-being of our tradespeople.
            </p>
          </div>

          <div className="benefit-card p-7 sm:p-8 rounded-2xl bg-[#0D1F30] border border-white/10 flex flex-col gap-4 shadow-lg bg-card-grid">
            <div className="w-12 h-12 rounded-xl bg-amber/15 text-amber flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">High-Profile <span className="text-amber">Projects</span></h3>
            <p className="text-sm sm:text-base text-gray-light leading-relaxed">
              Work on enterprise logistics systems, automated plants, and mission-critical industrial facilities across Canada.
            </p>
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section ref={jobsRef} className="py-16 sm:py-20 bg-[#0D1F30]/95 border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow-accent block mb-1">
                Opportunities
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">
                Current Opportunities <span className="text-amber">Across Canada</span>
              </h2>
            </div>
            <a
              href="mailto:career@topknotchtrade.com?subject=Trades%20Resume%20Submission"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber text-[#0D1F30] font-extrabold text-sm uppercase tracking-wider hover:bg-amber-hover transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              <Mail className="w-4 h-4 text-[#0D1F30]" />
              <span>Email Your Resume</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {openPositions.map((pos, idx) => (
              <div
                key={idx}
                className="job-card p-7 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber/40 transition-all flex flex-col justify-between gap-5 group bg-card-grid shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
                      {pos.type}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-light flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber" />
                      {pos.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber transition-colors mb-2.5">
                    {pos.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-light leading-relaxed">
                    {pos.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={`mailto:career@topknotchtrade.com?subject=Application:%20${encodeURIComponent(pos.title)}`}
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber hover:text-white inline-flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber"
                  >
                    <span>Apply via Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-gray-light font-medium">career@topknotchtrade.com</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resume Direct Box ── */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-4">
        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
          Don’t See Your Specific Trade <span className="text-amber">Listed?</span>
        </h3>
        <p className="text-base sm:text-lg text-gray-light leading-relaxed max-w-xl">
          We maintain an active roster of qualified journeypeople, apprentices, and technical contractors. Send your resume and certifications directly to our recruitment desk.
        </p>
        <a
          href="mailto:career@topknotchtrade.com?subject=General%20Trades%20Application"
          className="inline-flex items-center gap-2 text-lg font-bold text-amber hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-amber mt-2"
        >
          <Mail className="w-5 h-5" />
          <span>career@topknotchtrade.com</span>
        </a>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Looking for a Trusted Trades Contractor?"
        subtitle="If you are a facility manager looking to hire certified crews for your site, contact our operations team."
        primaryBtnText="Request a Quote"
        primaryBtnLink="/contact?type=quote"
      />
    </div>
  )
}
