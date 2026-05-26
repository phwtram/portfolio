type Project = {
  number: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  businessValue: string;
  role: string;
  team: string;
  tech: string[];
  githubUrl?: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "BFarmX",
    subtitle: "Blockchain Agricultural Traceability Platform",
    period: "Jan 2025 — May 2025",
    description:
      "A digital traceability platform that records clean crop production processes — cultivation, harvesting, and post-harvest handling — aligned with VietGAP standards. Integrates third-party inspection results to enhance data transparency across agricultural supply chains.",
    businessValue:
      "Addresses food safety and supply chain opacity — two of Vietnam's most pressing agri-business challenges. Directly creates trust between producers, inspectors, and consumers through immutable blockchain records.",
    role: "Manual Tester · Front-end Developer · Project Documentation",
    team: "5 members",
    tech: ["ReactJS", "React Native", "ASP.NET Core", "VeChain", "Redis", "Firebase", "Cloudinary", "Jenkins"],
    githubUrl: "https://github.com/phwtram",
  },
  {
    number: "02",
    title: "FService",
    subtitle: "Property Service Subscription Platform",
    period: "Sep 2023 — Dec 2023",
    description:
      "A web platform enabling residents of Vinhomes Grand Park to discover, subscribe to, and pay for pre-designed apartment services online. Integrates VNPAY for secure in-app payment processing.",
    businessValue:
      "Eliminates friction in property service discovery and payment. Delivers a consumer marketplace model that benefits both residents (convenience) and service providers (digital reach).",
    role: "Front-end Developer · UI/UX Designer",
    team: "4 members",
    tech: ["ReactJS", "ViteJS", "ASP.NET Core", "MS SQL", "Azure SQL", "Azure App Service", "JWT"],
    githubUrl: "https://github.com/phwtram",
  },
  {
    number: "03",
    title: "Math Utility Library",
    subtitle: "CI/CD-Integrated Java Testing Project",
    period: "Sep 2023 — Nov 2023",
    description:
      "A Maven-based Java library implementing data-driven and regression testing using JUnit. Configured GitHub Actions for continuous integration to automate build and test pipelines.",
    businessValue:
      "Demonstrates engineering rigor and quality-assurance discipline. Reflects the mindset that reliable software is built through systematic testing, not luck — a foundation for any production-grade system.",
    role: "Developer · Tester",
    team: "Solo",
    tech: ["Java", "Maven", "JUnit", "GitHub Actions", "CI/CD", "Regression Testing"],
    githubUrl: "https://github.com/phwtram",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 dot-texture bg-[#FAFAF7] border-t border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="section-badge mb-4 reveal">03 — Projects</p>
          <h2
            className="text-4xl lg:text-5xl font-bold reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Things I&apos;ve
            <br />
            <span className="italic text-teal-600">shipped</span>
          </h2>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.number}
              className="bg-white border border-[#E4E4E7] rounded-2xl overflow-hidden hover-lift reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="p-7 lg:p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* ── Main Info ── */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-3 gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span
                            className="text-xs text-slate-400 font-mono"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {project.number}
                          </span>
                          <h3
                            className="text-xl font-bold text-[#0F0F0E]"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-teal-600 text-sm font-medium">{project.subtitle}</p>
                      </div>
                      <span
                        className="text-xs text-slate-400 whitespace-nowrap mt-0.5"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {project.period}
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Business value highlight */}
                    <div className="bg-teal-50 border border-teal-100 rounded-lg p-4 mb-5">
                      <p className="text-xs text-teal-600 font-mono mb-1 uppercase tracking-wider">
                        Business Impact
                      </p>
                      <p className="text-sm text-teal-800 leading-relaxed">
                        {project.businessValue}
                      </p>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="tag-tool text-xs px-3 py-0.5 rounded-full font-mono skill-tag"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── Sidebar ── */}
                  <div className="border-t lg:border-t-0 lg:border-l border-[#E4E4E7] pt-6 lg:pt-0 lg:pl-6 flex flex-col justify-between gap-5">
                    <div>
                      <div className="mb-4">
                        <p className="text-xs text-slate-400 font-mono mb-1">Role</p>
                        <p className="text-sm text-[#0F0F0E] leading-relaxed">{project.role}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-mono mb-1">Team</p>
                        <p className="text-sm text-[#0F0F0E]">{project.team}</p>
                      </div>
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-600 transition-colors font-mono"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        View on GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
