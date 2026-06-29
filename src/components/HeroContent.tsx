import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      {/* Eyebrow */}
      <p className="text-xs sm:text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 sm:mb-5">
        Software Engineer · AI/ML · Full Stack
      </p>

      {/* Name */}
      <h1 className="font-serif text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[0.95] mb-5 sm:mb-6">
        Sushyam
        <br />
        Nagallapati
      </h1>

      {/* Bio */}
      <p className="text-muted-foreground max-w-[22rem] sm:max-w-md leading-relaxed text-[0.875rem] sm:text-[0.925rem] md:text-[0.95rem] mb-8 sm:mb-9">
        MEng candidate at the University of Waterloo. I build AI systems and
        web applications with a focus on clear architecture, solid engineering,
        and work that holds up in production.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 sm:mb-9">
        <Link
          to="/projects"
          className="inline-flex items-center justify-center h-11 px-8 text-sm font-medium tracking-wide rounded-full bg-foreground text-background hover:opacity-80 transition-opacity duration-200"
        >
          View Projects
        </Link>
        <Link
          to="/resume"
          className="inline-flex items-center justify-center h-11 px-8 text-sm font-medium tracking-wide rounded-full border border-border text-foreground hover:bg-muted transition-colors duration-200"
        >
          Resume
        </Link>
      </div>

      {/* Availability status */}
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
        />
        <p className="text-xs text-muted-foreground">
          Open to new grad roles · Software Engineer, Full Stack, AI/ML
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
