type Certificate = {
  name: string;
  issuer: string;
  relevance: string;
  url: string;
};

const CERTS: Certificate[] = [
  {
    name: "Managing Project Risks and Changes",
    issuer: "Coursera",
    relevance: "Project Management",
    url: "#",
  },
  {
    name: "Project Management Project",
    issuer: "Coursera",
    relevance: "Project Management",
    url: "#",
  },
  {
    name: "Understanding User Needs",
    issuer: "Coursera",
    relevance: "Business Analytics · UX Research",
    url: "#",
  },
  {
    name: "Academic English: Writing",
    issuer: "Coursera",
    relevance: "Technical Communication",
    url: "#",
  },
];

export default function Certificates() {
  return (
    <section className="py-24 lg:py-28 bg-[#FAFAF7] border-t border-[#E4E4E7] grid-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p className="section-badge mb-4 reveal">05 — Certificates</p>
          <h2
            className="text-4xl lg:text-5xl font-bold reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Continuous
            <br />
            <span className="italic text-teal-600">learning</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          {CERTS.map((cert, i) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white border border-[#E4E4E7] rounded-xl p-5 flex items-start gap-4 hover-lift reveal group`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#0F0F0E] text-sm leading-snug group-hover:text-teal-700 transition-colors">
                  {cert.name}
                </p>
                <p
                  className="text-xs text-slate-400 mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {cert.issuer}
                </p>
                <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-teal-50 text-teal-700 border border-teal-100 rounded-full font-mono">
                  {cert.relevance}
                </span>
              </div>

              <svg className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
