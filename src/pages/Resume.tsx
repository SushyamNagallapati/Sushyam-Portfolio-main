import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { Download, Mail, Linkedin } from "lucide-react";

const RESUME_PDF_URL =
  "https://drive.google.com/file/d/1_vDMkN7Duow5DrriBFWrxN1F4xY-Ujvx/view?usp=sharing";

/* ── Count-up hook ───────────────────────────────── */
const useCountUp = (target: number, duration = 1000, triggered = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);
  return count;
};

/* ── Data ────────────────────────────────────────── */
const metrics = [
  { value: 30, suffix: "%+", label: "Event attendance increase" },
  { value: 15, suffix: "%", label: "Procurement cycle cut" },
  { value: 3, suffix: "", label: "Programs managed" },
  { value: 88, suffix: "%", label: "RAG answer accuracy" },
];

const experience = [
  {
    year: "2025",
    company: "Velocity",
    role: "Campus Ambassador",
    period: "Sep 2025 – Jan 2026",
    bullets: [
      "Drove 30%+ increase in event attendance across Startup 101, AI Server, and 10 Day Sprint programs through targeted campus outreach coordinated with marketing, design, and operations teams.",
      "Tracked and analyzed campaign performance using Google Analytics and Sprout Social, iterating outreach strategy each event cycle based on engagement data.",
      "Managed 3 concurrent incubator programs without missing a deadline by streamlining cross-team communication across Slack.",
    ],
  },
  {
    year: "2025",
    company: "Conrad School of Entrepreneurship and Business",
    role: "Project Intern",
    period: "May 2025 – Jul 2025",
    bullets: [
      "Delivered project management coursework (BE-605) and educational materials for ITA organization under the Conrad School's accelerator programs.",
    ],
  },
  {
    year: "2023",
    company: "Dover Corporation",
    role: "Engineer Intern",
    period: "Aug 2023 – Jul 2024",
    bullets: [
      "Collaborated with the software development team to test and debug an internal web application, identifying UI and functional issues across multiple browsers.",
      "Contributed frontend code (HTML, CSS, JavaScript) to implement UI fixes and minor feature updates in a collaborative development workflow.",
      "Cut procurement cycle time by 15% by mapping vendor lead-time bottlenecks and approval gaps across pump product lines using SAP ERP and Jira.",
      "Partnered with QA and engineering to validate component specs against BOM requirements, escalating discrepancies before they reached the assembly line.",
    ],
  },
];

const education = [
  {
    year: "2025",
    institution: "University of Waterloo",
    degree: "Master of Engineering, System Design Engineering",
    period: "Jan 2025 – Apr 2026",
  },
  {
    year: "2019",
    institution: "Anna University Chennai",
    degree: "Bachelor of Engineering, Mechatronics",
    period: "Jun 2019 – Apr 2023",
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "AI / ML",
    items: [
      "LLM Integration",
      "Retrieval-Augmented Generation",
      "Agentic AI",
      "LangGraph",
      "LLaMA 3.2",
      "OpenAI API",
      "Prompt Engineering",
      "ChromaDB",
      "Vector Databases",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "Mapbox GL JS",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "Backend",
    items: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "SQLAlchemy",
      "SQLite",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Ollama", "SAP ERP"],
  },
];

/* ── Metric stat with count-up ───────────────────── */
const MetricStat = ({
  value,
  suffix,
  label,
  triggered,
}: {
  value: number;
  suffix: string;
  label: string;
  triggered: boolean;
}) => {
  const count = useCountUp(value, 900, triggered);
  return (
    <div className="flex flex-col">
      <span className="font-serif text-2xl sm:text-3xl font-bold text-primary tabular-nums leading-none">
        {count}
        {suffix}
      </span>
      <span className="text-[0.65rem] text-muted-foreground mt-1.5 leading-tight">
        {label}
      </span>
    </div>
  );
};

/* ── Main component ──────────────────────────────── */
const Resume = () => {
  const [activeSkillCat, setActiveSkillCat] = useState<string | null>(null);
  const [metricsTriggered, setMetricsTriggered] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!metricsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMetricsTriggered(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background print:bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <main className="flex-1 pt-24 sm:pt-28 pb-24 print:pt-0 print:pb-0">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* ── Page header ──────────────────────────── */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-7 sm:mb-9">
              <div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-foreground leading-[1.0] tracking-tight">
                  Sushyam Nagallapati
                </h1>
                <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed">
                  MEng candidate at Waterloo · AI/ML and full-stack engineering
                  · Open to new grad roles
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                  <a
                    href="mailto:s2nagall@uwaterloo.ca"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                    s2nagall@uwaterloo.ca
                  </a>
                  <span
                    className="hidden sm:block w-px h-3 bg-border"
                    aria-hidden
                  />
                  <a
                    href="https://www.linkedin.com/in/sushyamnagallapati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Linkedin className="w-3.5 h-3.5 flex-shrink-0" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <a
                href={RESUME_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="print:hidden self-start flex-shrink-0 inline-flex items-center gap-2 h-10 px-5 text-xs font-medium rounded-full bg-foreground text-background hover:opacity-80 transition-opacity duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </a>
            </div>

            {/* Thick anchor rule */}
            <div className="border-t-2 border-foreground mb-8 sm:mb-10" />

            {/* Metrics row */}
            <div
              ref={metricsRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:gap-0 sm:flex sm:justify-between mb-16 sm:mb-20"
            >
              {metrics.map((m) => (
                <MetricStat key={m.label} {...m} triggered={metricsTriggered} />
              ))}
            </div>
          </FadeIn>

          {/* ── Two-column layout ─────────────────────── */}
          <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24 items-start">
            {/* ── Left: Experience + Education ────────── */}
            <div className="flex-1 min-w-0">
              {/* Experience */}
              <section id="experience" className="mb-16 scroll-mt-28">
                <FadeIn>
                  <h2 className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground/60 mb-10">
                    Experience
                  </h2>
                </FadeIn>

                <div className="space-y-14">
                  {experience.map((job, i) => (
                    <FadeIn key={job.company} delay={i * 80}>
                      <div className="relative">
                        {/* Ghost year */}
                        <span
                          aria-hidden
                          className="absolute top-0 -left-1 font-serif font-bold leading-none select-none pointer-events-none text-[2.5rem] sm:text-[3.5rem] text-foreground opacity-[0.06] dark:opacity-[0.1]"
                        >
                          {job.year}
                        </span>

                        {/* Entry content */}
                        <div className="relative pt-10 sm:pt-14">
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                            <div>
                              <span className="font-semibold text-foreground text-[0.95rem]">
                                {job.company}
                              </span>
                              <span className="text-muted-foreground text-sm">
                                {" · "}
                                {job.role}
                              </span>
                            </div>
                            <span className="font-mono text-xs text-muted-foreground/60 whitespace-nowrap flex-shrink-0">
                              {job.period}
                            </span>
                          </div>
                          <ul className="space-y-2.5">
                            {job.bullets.map((bullet, bi) => (
                              <li
                                key={bi}
                                className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                              >
                                <span className="mt-[0.5em] w-1 h-1 rounded-full bg-primary/70 flex-shrink-0" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </section>

              <div className="border-t border-border/40 mb-16" />

              {/* Education */}
              <section id="education" className="scroll-mt-28">
                <FadeIn>
                  <h2 className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground/60 mb-10">
                    Education
                  </h2>
                </FadeIn>

                <div className="space-y-10">
                  {education.map((edu, i) => (
                    <FadeIn key={edu.institution} delay={i * 80}>
                      <div className="relative">
                        {/* Ghost year */}
                        <span
                          aria-hidden
                          className="absolute top-0 -left-1 font-serif font-bold leading-none select-none pointer-events-none text-[2.5rem] sm:text-[3.5rem] text-foreground opacity-[0.06] dark:opacity-[0.1]"
                        >
                          {edu.year}
                        </span>

                        <div className="relative pt-10 sm:pt-14">
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                            <div>
                              <p className="font-semibold text-foreground text-[0.95rem]">
                                {edu.institution}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {edu.degree}
                              </p>
                            </div>
                            <span className="font-mono text-xs text-muted-foreground/60 whitespace-nowrap flex-shrink-0">
                              {edu.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </section>
            </div>

            {/* ── Right: Skills sidebar ────────────────── */}
            <aside className="w-full mt-16 lg:mt-0 lg:w-56 xl:w-64 flex-shrink-0 lg:sticky lg:top-28">
              <FadeIn>
                <section id="skills" className="scroll-mt-28">
                  <h2 className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground/60 mb-6">
                    Skills
                  </h2>

                  {/* Category filter tabs */}
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    <button
                      onClick={() => setActiveSkillCat(null)}
                      className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-200 ${
                        activeSkillCat === null
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20"
                      }`}
                    >
                      All
                    </button>
                    {skillGroups.map(({ label }) => (
                      <button
                        key={label}
                        onClick={() =>
                          setActiveSkillCat(
                            activeSkillCat === label ? null : label,
                          )
                        }
                        className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-200 ${
                          activeSkillCat === label
                            ? "bg-foreground text-background"
                            : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-5">
                    {skillGroups.map((group) => {
                      const isActive =
                        activeSkillCat === null ||
                        activeSkillCat === group.label;
                      return (
                        <div
                          key={group.label}
                          className={`transition-opacity duration-300 ${
                            isActive ? "opacity-100" : "opacity-20"
                          }`}
                        >
                          <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2">
                            {group.label}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {group.items.map((item) => (
                              <span
                                key={item}
                                className={`text-xs px-2.5 py-1 rounded-full border transition-all duration-200 ${
                                  isActive
                                    ? "bg-background border-border text-foreground/70 hover:border-primary/40 hover:text-foreground hover:bg-primary/5"
                                    : "bg-background border-border text-muted-foreground/30"
                                }`}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </FadeIn>
            </aside>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
