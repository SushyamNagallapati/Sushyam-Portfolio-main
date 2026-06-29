import Header from "@/components/Header";
import BentoHero from "@/components/BentoHero";
import Footer from "@/components/Footer";
import TechStackStrip from "@/components/TechStackStrip";
import FadeIn from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import FeaturedProjects from "@/components/FeaturedProjects";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col pt-24 sm:pt-28">

        {/* ── Hero — bento grid ─────────────────────────────── */}
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-0">
          <BentoHero />
        </div>

        {/* ── About ─────────────────────────────────────────── */}
        <FadeIn
          delay={80}
          className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-14 sm:mt-16 py-10 sm:py-12 border-t border-border/40">
            <div>
              <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">
                About
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                Engineer with a systems mindset.
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-sm sm:text-[0.925rem] text-muted-foreground leading-relaxed">
                My background is in mechatronics — an unusual mix of embedded
                systems, control theory, and software. These days I work mainly
                in Python and TypeScript, building AI systems and web
                applications.
              </p>
              <p className="text-sm sm:text-[0.925rem] text-muted-foreground leading-relaxed">
                I care about code that's readable, systems that fail gracefully,
                and products that solve real problems. I tend to think about the
                whole stack: from data pipelines and model integration to the UI
                people actually use.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── Tech stack strip ──────────────────────────────── */}
        <FadeIn className="mt-6 sm:mt-8 mb-16 sm:mb-20 flex flex-col items-center text-center">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4 sm:mb-5">
            Tech stack
          </p>
          <div className="w-full">
            <TechStackStrip />
          </div>
        </FadeIn>

      </main>

      <FeaturedProjects />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
