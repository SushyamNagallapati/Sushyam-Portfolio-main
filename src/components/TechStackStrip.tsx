import { useEffect, useRef, type ReactNode } from "react";

type Tech = {
  name: string;
  icon?: string;
  mono?: boolean;
  iconNode?: ReactNode;
};

const techs: Tech[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  {
    name: "LangGraph",
    icon: "https://cdn.simpleicons.org/langchain",
    mono: true,
  },
  {
    name: "RAG",
    iconNode: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  {
    name: "REST APIs",
    iconNode: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  {
    name: "Claude",
    icon: "https://cdn.simpleicons.org/anthropic",
    mono: true,
  },
  {
    name: "Co-pilot",
    icon: "https://cdn.simpleicons.org/githubcopilot",
    mono: true,
  },
  {
    name: "Cursor",
    iconNode: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        <path d="m13 13 6 6" />
      </svg>
    ),
  },
];

const allTechs = [...techs, ...techs];

const TechStackStrip = () => {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    let animFrame = 0;
    let position = 0;
    let totalWidth = strip.scrollWidth / 2;
    const speed = 0.4;
    let paused = false;

    const animate = () => {
      if (!paused) {
        position += speed;
        if (totalWidth > 0 && position >= totalWidth) position = 0;
        strip.style.transform = `translateX(-${position}px)`;
      }
      animFrame = requestAnimationFrame(animate);
    };

    // Recompute width once images have loaded
    const recompute = () => {
      totalWidth = strip.scrollWidth / 2;
    };
    const imgs = strip.querySelectorAll("img");
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", recompute, { once: true });
    });

    animFrame = requestAnimationFrame(animate);

    const container = strip.parentElement;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    container?.addEventListener("mouseenter", pause);
    container?.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animFrame);
      container?.removeEventListener("mouseenter", pause);
      container?.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />

      <div className="overflow-hidden">
        <div
          ref={stripRef}
          className="flex w-max items-center gap-2 will-change-transform"
        >
          {allTechs.map((tech, i) => (
            <TechPill key={i} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechPill = ({ tech }: { tech: Tech }) => (
  <div className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-border/60 bg-card px-4 py-2 text-sm text-muted-foreground select-none">
    {tech.iconNode ? (
      <span className="shrink-0 flex items-center justify-center w-[22px] h-[22px]">
        {tech.iconNode}
      </span>
    ) : tech.icon ? (
      <img
        src={tech.icon}
        alt=""
        width={22}
        height={22}
        loading="lazy"
        className={`block shrink-0${tech.mono ? " dark:invert" : ""}`}
      />
    ) : null}
    <span>{tech.name}</span>
  </div>
);

export default TechStackStrip;
