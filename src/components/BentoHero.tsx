import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Linkedin, Mail } from "lucide-react";

const metrics = [
  {
    value: "88%",
    label: "RAG accuracy",
    context: "Agentic claim system",
  },
  {
    value: "30%+",
    label: "Attendance growth",
    context: "Campus outreach",
  },
  {
    value: "15%",
    label: "Cycle time cut",
    context: "Procurement ops",
  },
];

const BentoHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4">

      {/* Name + Bio — always-dark inverted card */}
      <div className="md:col-span-3 bg-foreground rounded-2xl p-7 sm:p-8 md:p-10 flex flex-col justify-between order-2 md:order-1 min-h-[280px] md:min-h-[340px]">
        <div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/35 dark:text-neutral-700 mb-6">
            MEng · University of Waterloo
          </p>
          <h1 className="font-serif text-[2.4rem] sm:text-5xl md:text-[3.2rem] lg:text-[3.75rem] font-bold leading-[0.95] tracking-tight text-white dark:text-neutral-900 mb-5">
            Sushyam
            <br />
            Nagallapati
          </h1>
          <p className="text-sm leading-relaxed text-white/50 dark:text-neutral-600 max-w-[28rem]">
            I build AI systems and web applications. Currently finishing my MEng
            at Waterloo and looking for new grad roles in software engineering
            and AI/ML.
          </p>
        </div>

        <div className="flex items-center gap-2 pt-6 mt-8 border-t border-white/10 dark:border-black/10">
          <span
            aria-hidden
            className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0"
          />
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.15em] text-white/35 dark:text-neutral-600">
            Open to new grad roles · SE · Full Stack · AI/ML
          </span>
        </div>
      </div>

      {/* Profile photo */}
      <div className="md:col-span-2 rounded-2xl overflow-hidden bg-muted order-1 md:order-2 h-64 md:h-auto">
        <img
          src={profilePhoto}
          alt="Sushyam Nagallapati"
          className="w-full h-full object-cover object-top"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Metric cards — 3-col row on mobile, individual cells on desktop */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 order-3 md:contents">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="md:col-span-1 md:order-3 bg-card border border-border/50 rounded-2xl p-3 sm:p-5 md:p-6 flex flex-col justify-between min-h-[110px] md:min-h-[130px]"
          >
            <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary leading-none mb-2 md:mb-3 tabular-nums">
              {m.value}
            </p>
            <div>
              <p className="text-[0.65rem] sm:text-xs font-medium text-foreground leading-snug mb-0.5">
                {m.label}
              </p>
              <p className="text-[0.6rem] sm:text-[0.62rem] text-muted-foreground hidden sm:block">
                {m.context}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA card */}
      <div className="md:col-span-2 md:order-4 bg-card border border-border/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between order-4 min-h-[110px] md:min-h-[130px]">
        <a
          href="mailto:s2nagall@uwaterloo.ca"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          <Mail className="w-3 h-3 flex-shrink-0" aria-hidden />
          s2nagall@uwaterloo.ca
        </a>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center h-9 px-5 text-xs font-medium rounded-full bg-foreground text-background hover:opacity-80 transition-opacity duration-200"
          >
            Projects
          </Link>
          <Link
            to="/resume"
            className="inline-flex items-center justify-center h-9 px-5 text-xs font-medium rounded-full border border-border text-foreground hover:bg-muted transition-colors duration-200"
          >
            Resume
          </Link>
          <a
            href="https://www.linkedin.com/in/sushyamnagallapati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center gap-1.5 h-9 px-4 text-xs font-medium rounded-full border border-border text-foreground hover:bg-muted transition-colors duration-200"
          >
            <Linkedin className="w-3 h-3" aria-hidden />
            LinkedIn
          </a>
        </div>
      </div>

    </div>
  );
};

export default BentoHero;
