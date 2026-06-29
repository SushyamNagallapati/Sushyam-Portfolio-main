import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import agenticImg from "@/assets/agentic-ai-insurance.png";
import chatbotImg from "@/assets/custom-chatbot.jpg";
import autonomousImg from "@/assets/autonomous-overtaking.png";

/* ── Data ──────────────────────────────────────────────────────── */

const feature = {
  index: "01",
  name: "Agentic Financial Claim Assistant",
  tagline:
    "A modular multi-agent system built in Python using LangGraph and LLaMA 3.2. Coordinates document retrieval, natural-language-to-SQL, and email drafting across 25+ tools. RAG pipeline hit 88% answer accuracy; NL-to-SQL reached 100% on all evaluated schemas.",
  tags: ["Python", "LangGraph", "RAG", "LLaMA 3.2", "NL-to-SQL"],
  image: agenticImg,
  reportUrl:
    "https://drive.google.com/file/d/1JP7RQRm-4GNahKEbpCaVNlaz58WeppNz/view?usp=sharing",
  githubUrl:
    "https://github.com/SushyamNagallapati/Agentic-Financial-Claim-Assistant-MCP-RAG",
  liveUrl: null as string | null,
};

const secondary = [
  {
    index: "02",
    name: "AI Powered SaaS Chatbot",
    tagline:
      "Full-stack chatbot with multi-turn context, markdown rendering, and a clean layered Node.js backend. Live and deployed.",
    tags: ["React", "TypeScript", "Node.js", "OpenAI API"],
    image: chatbotImg,
    liveUrl: "https://custom-chatbot-tau-swart.vercel.app/",
    reportUrl: null as string | null,
  },
  {
    index: "03",
    name: "Autonomous Overtaking System",
    tagline:
      "Vision-based perception with soft actor-critic RL and model predictive control for safe highway overtaking on two-way roads.",
    tags: ["Python", "RL", "MPC", "CARLA"],
    image: autonomousImg,
    liveUrl: null as string | null,
    reportUrl:
      "https://drive.google.com/file/d/1kFC-D7zrsPnd96tIv8DZh7WrauieD6Ge/view?usp=sharing",
  },
];

/* ── Tag pill ──────────────────────────────────────────────────── */
const TagPill = ({ tag }: { tag: string }) => (
  <span className="text-[0.65rem] font-medium px-2.5 py-1 rounded-full bg-background border border-border/70 text-muted-foreground">
    {tag}
  </span>
);

/* ── Main ──────────────────────────────────────────────────────── */
const FeaturedProjects = () => {
  return (
    <section className="w-full bg-muted py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <FadeIn>
          <div className="flex items-end justify-between mb-10 sm:mb-12">
            <div>
              <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">
                Selected work
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Things I've built
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              All projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </FadeIn>

        {/* ── Feature card — image left, text right ─────────── */}
        <FadeIn>
          <div className="group bg-background rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:border-border transition-all duration-300 mb-4">
            <div className="flex flex-col md:flex-row">

              {/* Image */}
              <div className="w-full md:w-[54%] overflow-hidden flex-shrink-0 aspect-[16/10] md:aspect-auto md:min-h-[340px]">
                <img
                  src={feature.image}
                  alt={feature.name}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between p-7 sm:p-8 md:p-9 flex-1">
                <div>
                  <span className="font-mono text-xs text-muted-foreground/40 select-none">
                    {feature.index}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground leading-snug mt-2 mb-3">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {feature.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {feature.tags.map((tag) => (
                      <TagPill key={tag} tag={tag} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {feature.reportUrl && (
                    <a
                      href={feature.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-9 px-5 text-xs font-medium rounded-full bg-foreground text-background hover:opacity-75 transition-opacity duration-200"
                    >
                      <FileText className="w-3 h-3" aria-hidden />
                      View report
                    </a>
                  )}
                  {feature.liveUrl && (
                    <a
                      href={feature.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 h-9 px-5 text-xs font-medium rounded-full bg-foreground text-background hover:opacity-75 transition-opacity duration-200"
                    >
                      <ArrowUpRight className="w-3 h-3" aria-hidden />
                      Live demo
                    </a>
                  )}
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1.5 h-9 px-4 text-xs font-medium rounded-full border border-border text-foreground hover:bg-muted transition-colors duration-200 group/link"
                  >
                    All projects
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* ── Two secondary cards ───────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {secondary.map((project, i) => (
            <FadeIn key={project.index} delay={i * 80} className="h-full">
              <div className="group bg-background rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:border-border transition-all duration-300 flex flex-col h-full">

                {/* Image */}
                <div className="overflow-hidden aspect-[16/9] flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-mono text-xs text-muted-foreground/40 mb-2 select-none">
                    {project.index}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-foreground leading-snug mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <TagPill key={tag} tag={tag} />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 h-8 px-4 text-xs font-medium rounded-full bg-foreground text-background hover:opacity-75 transition-opacity duration-200"
                      >
                        <ArrowUpRight className="w-3 h-3" aria-hidden />
                        Live demo
                      </a>
                    )}
                    {project.reportUrl && (
                      <a
                        href={project.reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 h-8 px-4 text-xs font-medium rounded-full bg-foreground text-background hover:opacity-75 transition-opacity duration-200"
                      >
                        <FileText className="w-3 h-3" aria-hidden />
                        View report
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile: view all link */}
        <FadeIn delay={160}>
          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              All projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default FeaturedProjects;
