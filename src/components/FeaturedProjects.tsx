import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import agenticImg from "@/assets/agentic-ai-insurance.png";
import chatbotImg from "@/assets/custom-chatbot.jpg";
import autonomousImg from "@/assets/autonomous-overtaking.png";

const featured = [
  {
    index: "01",
    name: "Agentic Financial Claim Assistant",
    tagline: "Multi-agent system coordinating 25+ tools across document retrieval, NL-to-SQL, and email drafting, achieving 88% answer accuracy.",
    tags: ["Python", "LangGraph", "RAG", "LLaMA 3.2"],
    image: agenticImg,
    liveUrl: null as string | null,
    reportUrl: "https://drive.google.com/file/d/1JP7RQRm-4GNahKEbpCaVNlaz58WeppNz/view?usp=sharing",
  },
  {
    index: "02",
    name: "AI Powered SaaS Chatbot",
    tagline: "Full-stack chatbot with multi-turn context, markdown rendering, and a modular Node.js backend. Currently deployed and live.",
    tags: ["React", "TypeScript", "Node.js", "OpenAI API"],
    image: chatbotImg,
    liveUrl: "https://custom-chatbot-tau-swart.vercel.app/",
    reportUrl: null as string | null,
  },
  {
    index: "03",
    name: "Autonomous Overtaking System",
    tagline: "Vision-based perception combined with soft actor-critic RL and model predictive control for safe highway overtaking.",
    tags: ["Python", "Reinforcement Learning", "MPC", "CARLA"],
    image: autonomousImg,
    liveUrl: null as string | null,
    reportUrl: "https://drive.google.com/file/d/1kFC-D7zrsPnd96tIv8DZh7WrauieD6Ge/view?usp=sharing",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="w-full bg-muted py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <FadeIn>
          <div className="flex items-end justify-between mb-10 sm:mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Selected Work
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Things I've built
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              View all
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {featured.map((project, i) => (
            <FadeIn key={project.index} delay={i * 80} className="h-full">
              <div className="group bg-background rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:border-border transition-all duration-300 flex flex-col h-full">

                {/* Image */}
                <div className="overflow-hidden aspect-[16/10] bg-muted flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <span className="font-mono text-xs text-muted-foreground/40 mb-1.5 select-none">
                    {project.index}
                  </span>
                  <h3 className="font-serif text-[1.05rem] sm:text-lg font-bold text-foreground leading-snug mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.tagline}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-background bg-foreground rounded-full px-4 py-2 hover:opacity-75 transition-opacity duration-200"
                      >
                        <ArrowUpRight className="w-3 h-3" />
                        Live Demo
                      </a>
                    )}
                    {project.reportUrl && (
                      <a
                        href={project.reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-background bg-foreground rounded-full px-4 py-2 hover:opacity-75 transition-opacity duration-200"
                      >
                        <ArrowUpRight className="w-3 h-3" />
                        View Report
                      </a>
                    )}
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group/link"
                    >
                      All projects
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile: View all link */}
        <FadeIn delay={240}>
          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              View all projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default FeaturedProjects;
