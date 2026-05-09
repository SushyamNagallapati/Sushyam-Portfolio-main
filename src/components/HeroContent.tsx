import { useEffect, useRef, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NAME = "Sushyam Nagallapati";

const kwConfig: { label: string; r: string; bg: string; text: string }[] = [
  { label: "AI/ML systems",               r: "-1.6deg", bg: "#dbeafe", text: "#1e3a8a" },
  { label: "production web engineering",  r: "1.1deg",  bg: "#ede9fe", text: "#3730a3" },
  { label: "multi-agent pipelines",       r: "-0.8deg", bg: "#ccfbf1", text: "#134e4a" },
  { label: "RAG systems",                 r: "1.5deg",  bg: "#fef3c7", text: "#78350f" },
];

const HeroContent = () => {
  const nameRef  = useRef<HTMLHeadingElement>(null);
  const kwRefs   = useRef<(HTMLSpanElement | null)[]>([]);
  const rafRef   = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Magnetic letter repulsion
  useEffect(() => {
    const container = nameRef.current;
    if (!container) return;

    const letters = Array.from(
      container.querySelectorAll<HTMLSpanElement>(".name-lt")
    );

    const ACCENT = "#2563eb";
    const GLOW   = "#2563eb25";
    const MAX_R  = 100;
    const PUSH   = 0.5;

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener("mousemove", onMove);

    function tick() {
      const { x: mx, y: my } = mouseRef.current;
      letters.forEach((l) => {
        const rect = l.getBoundingClientRect();
        const dx   = mx - (rect.left + rect.width  / 2);
        const dy   = my - (rect.top  + rect.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_R) {
          const f = Math.pow(1 - dist / MAX_R, 1.4);
          l.style.transition  = "none";
          l.style.transform   = `translate(${-dx * f * PUSH}px, ${-dy * f * PUSH}px) scale(${1 + f * 0.32}) rotate(${-dx * f * 0.12}deg)`;
          l.style.color       = ACCENT;
          l.style.textShadow  = `0 0 ${28 * f}px ${GLOW}`;
        } else if (l.style.transition === "none") {
          l.style.transition  = "transform 0.6s cubic-bezier(0.34,1.5,0.64,1), color 0.5s, text-shadow 0.5s";
          l.style.transform   = "";
          l.style.color       = "";
          l.style.textShadow  = "";
        }
      });
      rafRef.current = requestAnimationFrame(tick);
    }

    const onEnter = () => { rafRef.current = requestAnimationFrame(tick); };
    const onLeave = () => {
      cancelAnimationFrame(rafRef.current);
      letters.forEach((l) => {
        l.style.transition  = "transform 0.65s cubic-bezier(0.34,1.55,0.64,1), color 0.5s, text-shadow 0.5s";
        l.style.transform   = "";
        l.style.color       = "";
        l.style.textShadow  = "";
      });
    };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Auto-cycling keyword highlights
  useEffect(() => {
    const kws = kwRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (kws.length === 0) return;
    let cur = 0;

    function triggerShake(el: HTMLSpanElement) {
      el.classList.remove("kw-shaking");
      void el.offsetWidth;
      el.classList.add("kw-shaking");
      setTimeout(() => el.classList.remove("kw-shaking"), 460);
    }

    function cycleNext() {
      triggerShake(kws[cur]);
      setTimeout(() => {
        kws[cur].classList.remove("kw-active");
        cur = (cur + 1) % kws.length;
        triggerShake(kws[cur]);
        setTimeout(() => kws[cur].classList.add("kw-active"), 100);
      }, 500);
    }

    kws[0].classList.add("kw-active");
    const id = setInterval(cycleNext, 2800);

    return () => {
      clearInterval(id);
      kws.forEach((k) => k.classList.remove("kw-active", "kw-shaking"));
    };
  }, []);

  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      {/* Eyebrow */}
      <p className="text-xs sm:text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4 sm:mb-5">
        Software Engineer · AI/ML · Full Stack
      </p>

      {/* Name — magnetic letter repulsion */}
      <h1
        ref={nameRef}
        className="font-serif text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[0.95] mb-5 sm:mb-6 flex flex-wrap cursor-default select-none"
      >
        {NAME.split(" ").map((word, wi) => (
          <span key={wi} style={{ display: "inline-flex", whiteSpace: "nowrap", marginRight: "0.28em" }}>
            {word.split("").map((char, ci) => (
              <span key={ci} className="name-lt" style={{ display: "inline-block" }}>
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>

      {/* Bio — auto-cycling keyword highlights */}
      <p className="text-muted-foreground max-w-[22rem] sm:max-w-md leading-relaxed text-[0.875rem] sm:text-[0.925rem] md:text-[0.95rem] mb-8 sm:mb-9">
        MEng candidate at the University of Waterloo, focused on{" "}
        <span
          ref={(el) => { kwRefs.current[0] = el; }}
          className="kw-word"
          style={{ "--r": kwConfig[0].r, "--kw-bg": kwConfig[0].bg, "--kw-text": kwConfig[0].text } as CSSProperties}
        >
          {kwConfig[0].label}
        </span>
        {" "}and{" "}
        <span
          ref={(el) => { kwRefs.current[1] = el; }}
          className="kw-word"
          style={{ "--r": kwConfig[1].r, "--kw-bg": kwConfig[1].bg, "--kw-text": kwConfig[1].text } as CSSProperties}
        >
          {kwConfig[1].label}
        </span>
        . I design{" "}
        <span
          ref={(el) => { kwRefs.current[2] = el; }}
          className="kw-word"
          style={{ "--r": kwConfig[2].r, "--kw-bg": kwConfig[2].bg, "--kw-text": kwConfig[2].text } as CSSProperties}
        >
          {kwConfig[2].label}
        </span>
        ,{" "}
        <span
          ref={(el) => { kwRefs.current[3] = el; }}
          className="kw-word"
          style={{ "--r": kwConfig[3].r, "--kw-bg": kwConfig[3].bg, "--kw-text": kwConfig[3].text } as CSSProperties}
        >
          {kwConfig[3].label}
        </span>
        , and web applications with an emphasis on performance, clarity, and maintainability.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 sm:mb-9">
        <Button
          variant="default"
          size="lg"
          className="rounded-full px-8 font-medium text-sm tracking-wide transition-all duration-300"
          asChild
        >
          <Link to="/projects">Projects</Link>
        </Button>
        <a
          href="https://drive.google.com/file/d/126JI9aQvQU0hWq553fLzv8OrTuS7K7I7/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-11 px-8 text-sm font-medium tracking-wide rounded-full bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Resume
        </a>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
        />
        <p className="text-xs text-muted-foreground">
          Open to New Grad Roles · Software Engineer, Full Stack, AI/ML
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
