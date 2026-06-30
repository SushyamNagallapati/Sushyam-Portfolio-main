import FadeIn from "@/components/FadeIn";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full border-t border-border/40 bg-background">
      <FadeIn>
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 py-24 sm:py-32 flex flex-col items-center text-center">

          <p className="font-mono text-[0.6rem] text-muted-foreground dark:text-primary/70 tracking-widest uppercase mb-5">
            Contact
          </p>

          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.0] mb-5 tracking-[-0.04em]">
            Ready to build<br />something?
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md mb-10">
            I'm actively looking for new grad roles in software engineering and
            AI/ML. If you have an opening or just want to connect, reach out
            directly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:s2nagall@uwaterloo.ca"
              className="inline-flex items-center gap-2.5 h-12 px-8 rounded bg-primary text-primary-foreground text-sm font-semibold hover:opacity-85 transition-opacity duration-200"
            >
              <Mail className="w-4 h-4" />
              s2nagall@uwaterloo.ca
            </a>

            <a
              href="https://www.linkedin.com/in/sushyamnagallapati"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-12 px-8 rounded border border-border text-foreground text-sm font-medium hover:border-primary/40 hover:text-primary transition-all duration-200"
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
