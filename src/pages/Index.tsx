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

      <main className="relative flex flex-col pt-24 pb-16 sm:pt-28 sm:pb-20 md:pb-28 overflow-hidden">
        {/* Decorative background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_50%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06] [background-image:radial-gradient(hsl(var(--foreground))_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            {/* Text Content */}
            <div className="flex-1 min-w-0 order-2 md:order-1">
              <HeroContent />
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center md:justify-end flex-shrink-0 order-1 md:order-2">
              <ProfileCard />
            </div>
          </div>

        </div>

        {/* Tech Stack — full-width strip, outside padded container */}
        <FadeIn className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 flex flex-col items-center text-center">
          <h2 className="text-sm sm:text-base font-medium text-foreground/60 uppercase tracking-[0.2em] mb-4 sm:mb-5">
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
