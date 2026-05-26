type SkillTag = { name: string; type: "tech" | "ba" | "tool" };

const SKILLS: { category: string; emoji: string; desc: string; tags: SkillTag[] }[] = [
  {
    category: "Frontend Development",
    emoji: "⬡",
    desc: "Building responsive, accessible user interfaces",
    tags: [
      { name: "ReactJS", type: "tech" },
      { name: "React Native", type: "tech" },
      { name: "TypeScript", type: "tech" },
      { name: "Next.js", type: "tech" },
      { name: "HTML / CSS", type: "tech" },
      { name: "Bootstrap", type: "tech" },
      { name: "Angular", type: "tech" },
    ],
  },
  {
    category: "Backend & Database",
    emoji: "⬡",
    desc: "Designing scalable APIs and data layers",
    tags: [
      { name: "ASP.NET Core", type: "tech" },
      { name: "C# / OOP", type: "tech" },
      { name: "Java", type: "tech" },
      { name: "Entity Framework", type: "tech" },
      { name: "SQL Server", type: "tech" },
      { name: "Redis", type: "tech" },
      { name: "Firebase", type: "tech" },
    ],
  },
  {
    category: "Business Analytics",
    emoji: "⬡",
    desc: "Translating data and user needs into decisions",
    tags: [
      { name: "Requirements Analysis", type: "ba" },
      { name: "User Research", type: "ba" },
      { name: "SDLC / STLC", type: "ba" },
      { name: "Test Case Design", type: "ba" },
      { name: "Process Documentation", type: "ba" },
      { name: "SRS Writing", type: "ba" },
      { name: "Project Management", type: "ba" },
    ],
  },
  {
    category: "Tools & DevOps",
    emoji: "⬡",
    desc: "Shipping and collaborating with modern workflows",
    tags: [
      { name: "Git / GitHub", type: "tool" },
      { name: "Jira", type: "tool" },
      { name: "Figma", type: "tool" },
      { name: "Postman", type: "tool" },
      { name: "Swagger", type: "tool" },
      { name: "Docker", type: "tool" },
      { name: "GitHub Actions", type: "tool" },
      { name: "Vercel", type: "tool" },
      { name: "Azure", type: "tool" },
    ],
  },
];

const tagClass: Record<string, string> = {
  tech: "tag-tech",
  ba: "tag-ba",
  tool: "tag-tool",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-white border-t border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="section-badge mb-4 reveal">02 — Skills</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="text-4xl lg:text-5xl font-bold reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What I bring
              <br />
              <span className="italic text-teal-600">to the table</span>
            </h2>
            <div className="flex items-center gap-5 reveal reveal-delay-2">
              {[
                { dot: "bg-blue-500", label: "Technical" },
                { dot: "bg-teal-500", label: "Analytics" },
                { dot: "bg-orange-400", label: "Tools" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-1.5 text-xs text-slate-500" style={{ fontFamily: "var(--font-mono)" }}>
                  <span className={`w-2 h-2 rounded-full ${l.dot}`} />
                  {l.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((group, i) => (
            <div
              key={group.category}
              className={`bg-[#FAFAF7] border border-[#E4E4E7] rounded-2xl p-6 hover-lift reveal`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-teal-500 text-lg mt-0.5">{group.emoji}</span>
                <div>
                  <h3 className="font-bold text-[#0F0F0E]">{group.category}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{group.desc}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`skill-tag ${tagClass[tag.type]} text-xs px-3 py-1 rounded-full font-mono`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
