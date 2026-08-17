import { useState, useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import comingSoonMessages from "../data/humorPairs";
import { sendMessage } from "../lib/contactApi";
import logoFull from "../assets/topknotch-full.png";
import logoMark from "../assets/logo.png";

const SERVICES = [
  "Millwright Services", "Mechanical Installation", "Welding & Fabrication",
  "Rigging & Material Handling", "Electrical & Instrumentation",
  "Preventive Maintenance", "Emergency Response", "Equipment Inspection",
  "Shutdown & Turnaround",
];

const INDUSTRIES = [
  "Manufacturing", "Food & Beverage", "Pharma & Cleanroom",
  "Mining", "E-commerce & Logistics", "Municipal & Utilities", "Data Centres",
];

export default function ComingSoon() {
  const message = useMemo(() => {
    const idx = Math.floor(Math.random() * comingSoonMessages.length);
    return comingSoonMessages[idx];
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "", honey: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-a='topbar']", { y: -20, opacity: 0, duration: 0.7 })
          .from("[data-a='mark']", { scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.3")
          .from("[data-a='headline']", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
          .from("[data-a='sub']", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
          .from("[data-a='creds']", { y: 15, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.2")
          .from("[data-a='spec-sheet']", { y: 30, opacity: 0, duration: 0.8 }, "-=0.2")
          .from("[data-a='footer']", { opacity: 0, duration: 0.4 }, "-=0.1");
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-a]", { opacity: 1, y: 0, scale: 1 });
      });
    },
    { scope: containerRef }
  );

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.honey) { setStatus("sent"); return; }
    setStatus("sending");
    setErrorMsg("");

    const result = await sendMessage({
      name: form.name,
      email: form.email,
      message: form.message || "Quick message from coming soon page.",
    });

    if (result.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "", honey: "" });
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Communication failure. Please call our dispatch line directly.");
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen w-full flex flex-col font-body overflow-x-hidden page-background">

      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-22" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[920px] bg-amber/30 blur-[180px] rounded-full pointer-events-none" />

      {/* TOP BAR */}
      <header data-a="topbar" className="relative z-10 w-full px-6 py-5 border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="w-full max-w-5xl mx-auto flex items-center justify-between" style={{ margin: "0 auto" }}>
          {/* Logo with Blend Mode to remove dark box */}
          <img
            src={logoFull}
            alt="TopKnotch Trade Services"
            className="h-8 md:h-10 w-auto logo-blend"
            draggable="false"
          />
          <div className="flex items-center gap-6">
            <span className="hidden md:flex text-xs tracking-widest text-steel-light font-semibold uppercase">24/7 Dispatch</span>
            <a href="tel:+12267592210" className="flex items-center gap-2 text-sm font-bold text-amber hover:text-snow transition-colors duration-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (226) 759-2210
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex-1 w-full flex flex-col items-center justify-center px-4 py-12 md:py-16">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center" style={{ margin: "0 auto" }}>

          {/* Hero Area */}
          <div className="w-full flex flex-col items-center text-center mb-12">
              <div data-a="mark" className="mb-6 relative">
              <div className="absolute inset-0 bg-amber/30 blur-3xl rounded-full scale-[1.05]" />
              <img
                src={logoMark}
                alt="TopKnotch Logo"
                className="relative w-20 h-20 md:w-24 md:h-24 logo-blend brightness-125"
                draggable="false"
              />
            </div>

            <h1 data-a="headline" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4 tracking-tight w-full text-snow drop-shadow-lg">
              {message.headline}
            </h1>

            <p data-a="sub" className="text-steel-light text-lg max-w-2xl mx-auto mb-8 font-medium">
              {message.subtext}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-8 w-full">
              {["Federally Incorporated (CBCA)", "Certified Workforce", "Serving All 13 Provinces & Territories"].map((item, i) => (
                <span key={i} data-a="creds" className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-steel">
                  <span className="w-1.5 h-1.5 bg-amber rounded-full shadow-[0_0_8px_rgba(240,138,54,0.8)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Premium Form Layout */}
          <div data-a="spec-sheet" className="w-full grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-white/8 bg-black/40 backdrop-blur-2xl shadow-2xl shadow-black/60">

            {/* Left Panel: Specifications */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 p-8 md:p-10 flex flex-col gap-10 bg-black/25">
              <div>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber mb-5 border-b border-white/10 pb-3">Core Capabilities</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-4 text-sm text-snow font-medium">
                  {SERVICES.map((service, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-amber/70 rounded-full" />
                      <span className="text-steel-light hover:text-snow transition-colors cursor-default">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber mb-5 border-b border-white/10 pb-3">Active Sectors</h2>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRIES.map((ind, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded bg-white/5 border border-white/10 text-steel-light">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel: Action / Form */}
            <div className="lg:col-span-7 p-8 md:p-10 relative bg-black/25">
              {/* Subtle top highlight for depth */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <h2 className="text-[11px] font-bold uppercase tracking-widest text-steel-light mb-8">Dispatch & Inquiries</h2>

              {status === "sent" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animation-fade-in">
                  <div className="w-16 h-16 rounded-full bg-amber/10 border border-amber/30 text-amber flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(240,138,54,0.2)]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-display text-2xl font-bold mb-2 text-snow">Transmission Received</p>
                  <p className="text-steel-light mb-8 font-medium">Our dispatch team will contact you shortly.</p>
                  <button onClick={() => setStatus("idle")} className="text-xs font-bold uppercase tracking-widest text-amber hover:text-amber-light border-b border-amber/50 pb-1 transition-colors">
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                    <input type="text" name="honey" value={form.honey} onChange={handleChange} tabIndex={-1} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group flex flex-col">
                      <label htmlFor="name" className="text-left">Contact Name</label>
                      <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className="premium-input" />
                    </div>
                    <div className="form-group flex flex-col">
                      <label htmlFor="email" className="text-left">Email Address</label>
                      <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" className="premium-input" />
                    </div>
                  </div>

                  <div className="form-group flex flex-col">
                    <label htmlFor="message" className="text-left">Project Details / Requirements</label>
                    <textarea id="message" name="message" rows="3" value={form.message} onChange={handleChange} placeholder="Briefly describe your requirements..." className="premium-input resize-none"></textarea>
                  </div>

                  {status === "error" && (
                    <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 text-sm font-medium text-left">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
                    <button type="submit" disabled={status === "sending"} className="premium-btn w-full sm:w-auto">
                      {status === "sending" ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                    </button>
                    <a href="mailto:info@topknotchtrade.com" className="text-[11px] font-bold uppercase tracking-widest text-steel hover:text-snow transition-colors">
                      or Email Directly
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer data-a="footer" className="relative z-10 w-full px-6 py-6 border-t border-white/5 bg-black/40">
        <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-steel-dark" style={{ margin: "0 auto" }}>
          <p>© {new Date().getFullYear()} TopKnotch Trade Services Inc.</p>
          <p>Federal Registration CBCA</p>
        </div>
      </footer>
    </div>
  );
}