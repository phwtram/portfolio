export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 grid-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Story ── */}
          <div>
            <p className="section-badge mb-4 reveal">01 — About</p>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight mb-8 reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Building things
              <br />
              <span className="italic text-teal-600">that actually matter</span>
            </h2>

            <div className="space-y-4 text-[#52525B] text-[0.97rem] leading-relaxed">
              <p className="reveal reveal-delay-2">
                I&apos;m a Software Engineering graduate from FPT University with hands-on
                experience in frontend development and QA. I care about building
                products that are both technically solid and genuinely useful.
              </p>
              <p className="reveal reveal-delay-3">
                I find myself thinking about the business side as much as the technical side -
                how decisions get made, how value gets created, and what it actually takes to
                bring an idea to life. Vietnam&apos;s tech scene is still young,
                and that genuinely excites me.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-10 flex flex-wrap gap-3 reveal reveal-delay-3">
              {[
                "Ho Chi Minh City 🇻🇳",
                "English · Vietnamese",
                "Available for opportunities",
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 bg-white border border-[#E4E4E7] rounded-full text-slate-500"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Journey cards (subtle) ── */}
          <div className="space-y-3 reveal reveal-delay-2">
            {[
              {
                label: "Where I started",
                title: "Software Engineering",
                sub: "FPT University · 2021–2025",
                note: "Full-stack development, QA, CI/CD, blockchain integration",
                icon: "◈",
                color: "border-slate-200 bg-white",
                accent: "text-slate-400",
              },
              {
                label: "Where I'm headed",
                title: "Graduate Studies",
                sub: "Abroad · 2025",
                note: "Deepening knowledge at the intersection of technology and strategy",
                icon: "◈",
                color: "border-teal-100 bg-teal-50/60",
                accent: "text-teal-500",
              },
              {
                label: "What drives me",
                title: "Building something meaningful",
                sub: "Long-term vision",
                note: "Creating technology that solves real problems — starting in Vietnam",
                icon: "◈",
                color: "border-slate-200 bg-white",
                accent: "text-slate-400",
              },
            ].map((card, i) => (
              <div
                key={card.label}
                className={`${card.color} border rounded-xl p-5 hover-lift reveal`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <span className={`${card.accent} text-lg mt-0.5 flex-shrink-0`}>{card.icon}</span>
                  <div>
                    <p
                      className="text-xs text-slate-400 mb-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {card.label}
                    </p>
                    <p className="font-semibold text-[#0F0F0E] text-sm">{card.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{card.sub}</p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{card.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}