import FadeIn from "@/components/FadeIn";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full border-t border-border/50 bg-background">
      <FadeIn>
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-medium text-muted-foreground tracking-[0.2em] uppercase mb-5">
            Get in touch
          </p>

          {/* Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-6">
            Let's work together.
          </h2>

          {/* Subtext */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md mb-10">
            I'm actively looking for new grad roles in software engineering and
            AI/ML. If you have an opening or just want to connect, reach out
            directly.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:s2nagall@uwaterloo.ca"
              className="inline-flex items-center gap-2.5 h-12 px-8 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-75 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              s2nagall@uwaterloo.ca
            </a>

            <a
              href="https://www.linkedin.com/in/sushyamnagallapati"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-12 px-8 rounded-full border-2 border-foreground text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactSection;
