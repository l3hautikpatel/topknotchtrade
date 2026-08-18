import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import logoFull from './assets/topknotch-full.png'

const services = [
  'Millwright Services',
  'Mechanical Installation',
  'Welding & Fabrication',
  'Rigging & Material Handling',
  'Electrical & Instrumentation',
  'Preventive Maintenance Programs',
  'Breakdown & Emergency Response',
  'Equipment Inspection & Assessment',
  'Shutdown & Turnaround Services',
]

function App() {
  const containerRef = useRef(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to('.gs-reveal', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.12,
      })
    })

    // For users who prefer reduced motion — just make everything visible instantly
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('.gs-reveal', { opacity: 1, y: 0 })
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="min-h-svh flex flex-col">
      {/* ── Main Content ── */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-10 sm:gap-12">

          {/* Logo */}
          <div className="gs-reveal">
            <div className="bg-white rounded-2xl px-8 py-5 sm:px-10 sm:py-6 inline-block shadow-lg shadow-black/10">
              <img
                src={logoFull}
                alt="TopKnotch Trade Services logo — hexagonal TK mark with maple leaf, alongside TopKnotch Trade Services wordmark"
                className="w-64 sm:w-80 md:w-96 h-auto"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="gs-reveal w-16 h-0.5 bg-amber rounded-full" />

          {/* Headline */}
          <div className="gs-reveal flex flex-col gap-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-tight text-white">
              Coming Soon
            </h1>
            <p className="text-lg sm:text-xl text-amber font-medium font-heading tracking-wide">
              Where Trades Meet Excellence
            </p>
          </div>

          {/* Intro */}
          <p className="gs-reveal text-base sm:text-lg text-gray-light leading-relaxed max-w-2xl">
            TopKnotch Trade Services is a federally incorporated industrial trades contractor
            delivering certified millwright, mechanical, welding, rigging, and electrical services
            across Canada. From preventive maintenance programs to 24/7 emergency response —
            we keep your facilities running.
          </p>

          {/* Services Grid */}
          <div className="gs-reveal w-full max-w-2xl -mt-4">
            <h2 className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-gray mb-3">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-5 py-4 sm:px-0">
              {services.map((service) => (
                <div
                  key={service}
                  className="border border-white/10 rounded-lg px-5 py-4 text-sm text-white/85 bg-white/[0.03] backdrop-blur-xs hover:border-amber/40 hover:bg-amber/[0.06] transition-colors duration-200"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Block */}
          <div className="gs-reveal flex flex-col items-center gap-5 pt-2">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Phone */}
              <a
                href="tel:+12267592210"
                id="phone-link"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-white/15 text-white font-medium text-sm hover:border-white/30 hover:bg-white/[0.05] transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                </svg>
                (226) 759-2210
              </a>

              {/* Email */}
              <a
                href="mailto:info@topknotchtrade.com"
                id="email-link"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-amber text-navy font-semibold text-sm hover:bg-amber-hover transition-colors duration-200 shadow-lg shadow-amber/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                  <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                </svg>
                Email Us
              </a>
            </div>

            <p className="text-sm text-gray">
              Ontario, Canada — Serving Nationwide
            </p>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="gs-reveal py-6 px-6 text-center border-t border-white/[0.06]">
        <p className="text-xs text-gray/70">
          © {new Date().getFullYear()} TopKnotch Trade Services Inc. — Federally Incorporated under the CBCA
        </p>
      </footer>
    </div>
  )
}

export default App
