type TimelineItem = {
  period: string;
  title: string;
  org: string;
  type: "work" | "education";
  tags?: string[];
  description?: string;
};

const ITEMS: TimelineItem[] = [
  {
    period: "Jan 2024 — Apr 2024",
    title: "Manual Tester & Front-end Developer",
    org: "FPT Software — OJT Program",
    type: "work",
    tags: ["Manual Testing", "Front-end Dev", "Industry Experience"],
    description:
      "Gained real-world software industry exposure through FPT Software's internship program. Applied manual testing methodologies and front-end development skills on production-grade projects.",
  },
  {
    period: "2021 — 2025",
    title: "Bachelor of Software Engineering",
    org: "FPT University",
    type: "education",
    tags: ["GPA 7.25/10", "IELTS 6.0", "Capstone Project"],
    description:
      "Studied software engineering fundamentals, full-stack development, database design, software testing, and project management. Graduated with a Capstone Project in blockchain-integrated agricultural technology.",
  },
];

const typeStyle = {
  work: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    label: "Work",
  },
  education: {
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    label: "Education",
  },
};

export default function Timeline() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-white border-t border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="section-badge mb-4 reveal">04 — Experience & Education</p>
          <h2
            className="text-4xl lg:text-5xl font-bold reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            My
            <br />
            <span className="italic text-teal-600">journey so far</span>
          </h2>
        </div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-10 pl-8">
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className="relative reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Dot */}
                <div className="timeline-dot" />

                <div className="bg-[#FAFAF7] border border-[#E4E4E7] rounded-xl p-6 hover-lift">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border font-mono ${typeStyle[item.type].badge}`}
                        >
                          {typeStyle[item.type].label}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#0F0F0E] text-lg">{item.title}</h3>
                      <p className="text-teal-600 text-sm font-medium">{item.org}</p>
                    </div>
                    <span
                      className="text-xs text-slate-400 whitespace-nowrap mt-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.period}
                    </span>
                  </div>

                  {item.description && (
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
