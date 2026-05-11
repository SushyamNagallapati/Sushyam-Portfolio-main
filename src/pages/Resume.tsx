import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { Download, Mail, Phone, MapPin, Linkedin } from "lucide-react";

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
    company: "Velocity",
    role: "Campus Ambassador",
    period: "Sep 2025 - Jan 2026",
    location: "Waterloo, ON",
    bullets: [
      "Drove 30%+ increase in event attendance across Startup 101, AI Server, and 10 Day Sprint programs through targeted campus outreach coordinated with marketing, design, and operations teams.",
      "Tracked and analyzed campaign performance using Google Analytics and Sprout Social, iterating outreach strategy each event cycle based on engagement data.",
      "Managed 3 concurrent incubator programs without missing a deadline by streamlining cross-team communication across Slack.",
    ],
  },
  {
    company: "Conrad School of Entrepreneurship and Business",
    role: "Project Intern",
    period: "May 2025 - Jul 2025",
    location: "Waterloo, ON",
    bullets: [
      "Delivered project management coursework (BE-605) and educational materials for ITA organization under the Conrad School's accelerator programs.",
    ],
  },
  {
    company: "Dover Corporation",
    role: "Engineer Intern",
    period: "Aug 2023 - Jul 2024",
    location: "Tamil Nadu, India",
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
    institution: "University of Waterloo",
    degree: "Master of Engineering, System Design Engineering",
    period: "Jan 2025 - Apr 2026",
  },
  {
    institution: "Anna University Chennai",
    degree: "Bachelor of Engineering, Mechatronics",
    period: "Jun 2019 - Apr 2023",
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

const navSections = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

/* ── Metric card with count-up ───────────────────── */
const MetricCard = ({
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
    <div className="flex flex-col items-center text-center px-4 py-4 rounded-2xl bg-muted/60 border border-border/50 flex-1 min-w-[5rem]">
      <span className="font-serif text-2xl sm:text-3xl font-bold text-foreground tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-[0.65rem] sm:text-xs text-muted-foreground mt-1 leading-tight">
        {label}
      </span>
    </div>
  );
};

/* ── Main component ──────────────────────────────── */
const Resume = () => {
  const [activeSection, setActiveSection] = useState("experience");
  const [activeSkillCat, setActiveSkillCat] = useState<string | null>(null);
  const [metricsTriggered, setMetricsTriggered] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  /* Intersection observer — active section for sidebar nav */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" },
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Intersection observer — trigger metrics count-up */
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

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted print:bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <main className="flex-1 pt-24 sm:pt-28 pb-20 print:pt-0 print:pb-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12 lg:gap-16 items-start">
            {/* ── Left sticky sidebar (desktop) ──────── */}
            <aside className="hidden lg:flex flex-col w-48 xl:w-52 flex-shrink-0 sticky top-28 self-start print:hidden">
              <FadeIn>
                {/* Name */}
                <h1 className="font-serif text-xl font-bold text-foreground leading-tight mb-1">
                  Sushyam Nagallapati
                </h1>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  MEng, System Design Engineering · Waterloo
                </p>

                {/* Contact */}
                <div className="space-y-2 mb-8">
                  {[
                    { icon: MapPin, label: "Waterloo, ON", href: undefined },
                    {
                      icon: Phone,
                      label: "(226) 975-6863",
                      href: "tel:+12269756863",
                    },
                    {
                      icon: Mail,
                      label: "s2nagall@uwaterloo.ca",
                      href: "mailto:s2nagall@uwaterloo.ca",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/sushyamnagallapati",
                    },
                  ].map(({ icon: Icon, label, href }) =>
                    href ? (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        {label}
                      </a>
                    ) : (
                      <span
                        key={label}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        {label}
                      </span>
                    ),
                  )}
                </div>

                {/* Section nav */}
                <nav className="space-y-1 mb-8">
                  {navSections.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`w-full text-left flex items-center gap-2.5 text-xs font-medium py-1.5 transition-colors duration-200 ${
                        activeSection === id
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span
                        className={`w-4 h-px transition-all duration-300 ${
                          activeSection === id ? "bg-primary w-6" : "bg-border"
                        }`}
                      />
                      {label}
                    </button>
                  ))}
                </nav>

                {/* Download */}
                <a
                  href={RESUME_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-9 px-4 text-xs font-medium rounded-full bg-primary text-primary-foreground hover:opacity-85 transition-opacity duration-200 w-full justify-center"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
              </FadeIn>
            </aside>

            {/* ── Right: main content ─────────────────── */}
            <div className="flex-1 min-w-0">
              {/* Mobile header */}
              <FadeIn>
                <div className="lg:hidden mb-8">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                      Sushyam Nagallapati
                    </h1>
                    <a
                      href={RESUME_PDF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-9 px-4 text-xs font-medium rounded-full bg-primary text-primary-foreground hover:opacity-85 transition-opacity duration-200 flex-shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      PDF
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    MEng graduate in System Design Engineering (AI/ML) from the
                    University of Waterloo. Open to SWE and AI engineer roles.
                  </p>
                  {/* Mobile contact chips */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: MapPin, label: "Waterloo, ON", href: undefined },
                      {
                        icon: Mail,
                        label: "s2nagall@uwaterloo.ca",
                        href: "mailto:s2nagall@uwaterloo.ca",
                      },
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/in/sushyamnagallapati",
                      },
                    ].map(({ icon: Icon, label, href }) =>
                      href ? (
                        <a
                          key={label}
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-background border border-border rounded-full px-3 py-1.5 hover:text-foreground transition-colors"
                        >
                          <Icon className="w-3 h-3" />
                          {label}
                        </a>
                      ) : (
                        <span
                          key={label}
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-background border border-border rounded-full px-3 py-1.5"
                        >
                          <Icon className="w-3 h-3" />
                          {label}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </FadeIn>

              {/* ── Metrics strip ─────────────────────── */}
              <FadeIn>
                <div ref={metricsRef} className="flex gap-3 mb-12 sm:mb-14">
                  {metrics.map((m) => (
                    <MetricCard
                      key={m.label}
                      {...m}
                      triggered={metricsTriggered}
                    />
                  ))}
                </div>
              </FadeIn>

              {/* ── Experience ────────────────────────── */}
              <section id="experience" className="mb-14 scroll-mt-28">
                <FadeIn>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-[3px] h-4 rounded-full bg-primary flex-shrink-0" />
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Experience
                    </h2>
                  </div>
                </FadeIn>

                {/* Timeline */}
                <div className="relative pl-6 border-l border-border/60">
                  {experience.map((job, i) => (
                    <FadeIn key={job.company} delay={i * 80}>
                      <div className="relative mb-10 last:mb-0">
                        {/* Timeline dot */}
                        <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-primary ring-2 ring-muted flex-shrink-0" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4 mb-2">
                          <div>
                            <span className="font-semibold text-foreground text-sm sm:text-[0.95rem]">
                              {job.company}
                            </span>
                            <span className="text-muted-foreground text-sm">
                              {" · "}
                              {job.role}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {job.period} · {job.location}
                          </span>
                        </div>

                        <ul className="space-y-2">
                          {job.bullets.map((bullet, bi) => (
                            <li
                              key={bi}
                              className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                            >
                              <span className="mt-[0.45em] w-1.5 h-1.5 rounded-full bg-primary/35 flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </section>

              <div className="border-t border-border/50 mb-14" />

              {/* ── Education ─────────────────────────── */}
              <section id="education" className="mb-14 scroll-mt-28">
                <FadeIn>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-[3px] h-4 rounded-full bg-primary flex-shrink-0" />
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Education
                    </h2>
                  </div>
                </FadeIn>

                <div className="relative pl-6 border-l border-border/60 space-y-8">
                  {education.map((edu, i) => (
                    <FadeIn key={edu.institution} delay={i * 80}>
                      <div className="relative">
                        <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-primary ring-2 ring-muted" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                          <div>
                            <p className="font-semibold text-foreground text-sm sm:text-[0.95rem]">
                              {edu.institution}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {edu.degree}
                            </p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </section>

              <div className="border-t border-border/50 mb-14" />

              {/* ── Skills ────────────────────────────── */}
              <section id="skills" className="scroll-mt-28">
                <FadeIn>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-[3px] h-4 rounded-full bg-primary flex-shrink-0" />
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Skills
                    </h2>
                  </div>

                  {/* Category filter tabs */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    <button
                      onClick={() => setActiveSkillCat(null)}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                        activeSkillCat === null
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30"
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
                        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                          activeSkillCat === label
                            ? "bg-foreground text-background"
                            : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </FadeIn>

                <div className="space-y-6">
                  {skillGroups.map((group, i) => {
                    const isActive =
                      activeSkillCat === null || activeSkillCat === group.label;
                    return (
                      <FadeIn key={group.label} delay={i * 60}>
                        <div
                          className={`transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-25"}`}
                        >
                          <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-muted-foreground/70 mb-2.5">
                            {group.label}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {group.items.map((item) => (
                              <span
                                key={item}
                                className={`text-xs px-2.5 py-1 rounded-full border transition-all duration-200 ${
                                  isActive
                                    ? "bg-background border-border text-foreground/70 hover:border-primary/40 hover:text-foreground hover:bg-primary/5"
                                    : "bg-background border-border text-muted-foreground/40"
                                }`}
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </FadeIn>
                    );
                  })}
                </div>
              </section>
            </div>
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
