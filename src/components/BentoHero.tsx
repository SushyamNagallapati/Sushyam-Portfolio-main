import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import { ArrowRight } from "lucide-react";

const RESUME_PDF_URL =
  "https://drive.google.com/file/d/16Bqc4q6zdI0huBORhgcu2QnE_-oUxSnc/view?usp=sharing";

const metrics = [
  { value: "88%",  key: "rag_accuracy",     label: "RAG answer accuracy"       },
  { value: "30%+", key: "attendance_growth", label: "Campus event attendance"   },
  { value: "100%", key: "nl_to_sql_eval",    label: "NL-to-SQL schema coverage" },
  { value: "3",    key: "programs_managed",  label: "Concurrent programs run"   },
];

const BentoHero = () => (
  <div>
    {/* Split hero — text left / photo right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

      {/* Text */}
      <div className="order-2 md:order-1">
        <p className="font-mono text-xs text-muted-foreground dark:text-primary tracking-wide mb-7">
          MEng candidate · Waterloo · open to new grad roles
        </p>

        <h1 className="font-black text-[2.75rem] sm:text-[3.75rem] lg:text-[5rem] leading-[0.88] tracking-[-0.04em] text-foreground mb-7">
          Building AI<br />
          systems<br />
          <span className="text-primary">that ship.</span>
        </h1>

        <p className="text-sm sm:text-[0.925rem] text-muted-foreground leading-relaxed max-w-[34rem] mb-8">
          I design and build agentic AI systems and full-stack web applications.
          Background in mechatronics and system design at Waterloo. Looking for
          new grad roles in software engineering and AI/ML.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 h-10 px-6 text-sm font-semibold rounded bg-primary text-primary-foreground hover:opacity-85 transition-opacity duration-200"
          >
            View work
            <ArrowRight className="w-3.5 h-3.5" aria-hidden />
          </Link>
          <a
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-10 px-6 text-sm font-mono rounded border border-border text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors duration-200"
          >
            resume.pdf ↗
          </a>
        </div>
      </div>

      {/* Photo */}
      <div className="order-1 md:order-2 flex justify-center md:justify-end">
        <div className="relative">
          <div className="w-52 h-60 sm:w-64 sm:h-72 md:w-[300px] md:h-[340px] lg:w-[340px] lg:h-[390px] rounded overflow-hidden border border-border/30">
            <img
              src={profilePhoto}
              alt="Sushyam Nagallapati"
              className="w-full h-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-2.5 -right-2.5 w-full h-full border border-primary/25 rounded -z-10"
          />
        </div>
      </div>

    </div>

    {/* Metric stats row */}
    <div className="mt-14 sm:mt-16 border-t border-border/40 pt-7 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-0">
      {metrics.map((m, i) => (
        <div
          key={m.key}
          className={`flex-1 ${i > 0 ? "sm:pl-8 sm:border-l sm:border-border/30" : ""}`}
        >
          <p className="font-black text-3xl sm:text-[2.25rem] tracking-[-0.04em] text-primary tabular-nums leading-none mb-1">
            {m.value}
          </p>
          <p className="font-mono text-[0.6rem] text-muted-foreground/60 mb-0.5 tracking-wide hidden dark:block">
            {m.key}
          </p>
          <p className="text-[0.65rem] text-muted-foreground leading-snug">
            {m.label}
          </p>
        </div>
      ))}
    </div>

  </div>
);

export default BentoHero;
