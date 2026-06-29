import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";
import TechStackStrip from "@/components/TechStackStrip";
import FadeIn from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import FeaturedProjects from "@/components/FeaturedProjects";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="relative flex flex-col pt-24 pb-0 sm:pt-28 overflow-hidden">
        {/* Subtle dot-grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06] [background-image:radial-gradient(hsl(var(--foreground))_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
        />

        {/* Hero */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            <div className="flex-1 min-w-0 order-2 md:order-1">
              <HeroContent />
            </div>
            <div className="flex justify-center md:justify-end flex-shrink-0 order-1 md:order-2">
              <ProfileCard />
            </div>
          </div>
        </div>

        {/* About */}
        <FadeIn
          delay={120}
          className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-16 sm:mt-20 py-10 sm:py-14 border-t border-border/40">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
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

        {/* Tech Stack */}
        <FadeIn className="mt-6 sm:mt-8 mb-16 sm:mb-20 flex flex-col items-center text-center">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4 sm:mb-5">
            Tech Stack
          </h2>
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
