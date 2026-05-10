import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { Download, Mail, Phone, MapPin, Linkedin } from "lucide-react";

const RESUME_PDF_URL =
  "https://drive.google.com/file/d/1_vDMkN7Duow5DrriBFWrxN1F4xY-Ujvx/view?usp=sharing";

const experience = [
  {
    company: "Velocity",
    role: "Campus Ambassador",
    period: "Sep 2025 – Jan 2026",
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
    period: "May 2025 – Jul 2025",
    location: "Waterloo, ON",
    bullets: [
      "Delivered project management coursework (BE-605) and educational materials for ITA organization under the Conrad School's accelerator programs.",
    ],
  },
  {
    company: "Dover Corporation",
    role: "Engineer Intern",
    period: "Feb 2024 – Aug 2024",
    location: "Tamil Nadu, India",
    bullets: [
      "Collaborated with the software development team to test and debug an internal web application, identifying UI and functional issues across multiple browsers and documenting reproducible steps for resolution.",
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
    period: "Jan 2025 – Apr 2026",
  },
  {
    institution: "Anna University Chennai",
    degree: "Bachelor of Engineering, Mechatronics",
    period: "Jun 2019 – Apr 2023",
  },
];

const skills = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "AI / ML",
    items: [
      "LLM Integration",
      "Retrieval-Augmented Generation (RAG)",
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
    items: ["React.js", "Tailwind CSS", "Shadcn/UI", "Mapbox GL JS", "HTML", "CSS"],
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

const SectionHeading = ({ title }: { title: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-[3px] h-4 rounded-full bg-primary flex-shrink-0" />
    <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      {title}
    </h2>
  </div>
);

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted print:bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <main className="flex-1 pt-24 sm:pt-28 pb-20 sm:pb-24 print:pt-0 print:pb-0">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <FadeIn>
            {/* Document card — primary accent stripe on top */}
            <div className="bg-background border border-border/60 rounded-2xl shadow-sm overflow-hidden print:shadow-none print:border-none print:rounded-none">

              {/* Top accent bar */}
              <div className="h-1 w-full bg-primary" />

              <div className="px-6 py-10 sm:px-12 sm:py-12">

                {/* Name + Download */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                    Sushyam Nagallapati
                  </h1>
                  <a
                    href={RESUME_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="print:hidden inline-flex items-center gap-2 h-9 px-5 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:opacity-85 transition-all duration-200 whitespace-nowrap self-start"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                  </a>
                </div>

                {/* Headline */}
                <p className="text-sm sm:text-[0.95rem] text-muted-foreground mb-6 leading-relaxed max-w-xl">
                  MEng graduate in System Design Engineering (AI/ML) from the University of Waterloo, building multi-agent AI systems and full-stack web applications. Open to SWE and AI engineer roles — onsite, hybrid, or remote.
                </p>

                {/* Contact row */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {[
                    { icon: MapPin, label: "Waterloo, ON", href: undefined },
                    { icon: Phone, label: "(226) 975-6863", href: "tel:+12269756863" },
                    { icon: Mail, label: "s2nagall@uwaterloo.ca", href: "mailto:s2nagall@uwaterloo.ca" },
                    { icon: Linkedin, label: "linkedin.com/in/sushyamnagallapati", href: "https://www.linkedin.com/in/sushyamnagallapati" },
                  ].map(({ icon: Icon, label, href }) =>
                    href ? (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted rounded-full px-3 py-1.5 hover:text-foreground hover:bg-muted/80 transition-colors duration-200"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        {label}
                      </a>
                    ) : (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted rounded-full px-3 py-1.5"
                      >
                        <Icon className="w-3 h-3 flex-shrink-0" />
                        {label}
                      </span>
                    )
                  )}
                </div>

                {/* ── Experience ─────────────────────── */}
                <section className="mb-10">
                  <SectionHeading title="Experience" />
                  <div className="space-y-8">
                    {experience.map((job) => (
                      <div key={job.company}>
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
                        <ul className="space-y-2 mt-1">
                          {job.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                            >
                              <span className="mt-[0.45em] w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="border-t border-border mb-10" />

                {/* ── Education ──────────────────────── */}
                <section className="mb-10">
                  <SectionHeading title="Education" />
                  <div className="space-y-5">
                    {education.map((edu) => (
                      <div
                        key={edu.institution}
                        className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4"
                      >
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
                    ))}
                  </div>
                </section>

                <div className="border-t border-border mb-10" />

                {/* ── Skills ─────────────────────────── */}
                <section>
                  <SectionHeading title="Skills" />
                  <div className="space-y-5">
                    {skills.map((group) => (
                      <div key={group.label} className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                        <span className="text-xs font-semibold text-foreground uppercase tracking-wide w-24 flex-shrink-0 pt-0.5">
                          {group.label}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border text-foreground/70"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
