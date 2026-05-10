import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About",    href: "/",         internal: true },
  { label: "Projects", href: "/projects", internal: true },
  { label: "Resume",   href: "/resume",   internal: true },
];

const socialLinks = [
  { icon: Github,   href: "https://github.com/SushyamNagallapati",             label: "GitHub"   },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sushyamnagallapati",    label: "LinkedIn" },
  { icon: Twitter,  href: "https://x.com/SushyamR",                            label: "Twitter"  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">

      {/* Upper section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-10 sm:pt-14 sm:pb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Left — sign-off */}
          <div className="max-w-xs">
            {/* Availability indicator — minimal */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                Currently available
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-snug mb-3">
              Always building something new.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              MEng in AI/ML from Waterloo, with a mechatronics background and a genuine interest in how software systems hold together under pressure.
            </p>

            <a
              href="mailto:s2nagall@uwaterloo.ca"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 group"
            >
              s2nagall@uwaterloo.ca
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Right — nav + social */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">

            {/* Nav links */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
                Navigation
              </p>
              <ul className="space-y-3">
                {navLinks.map(({ label, href, internal }) => (
                  <li key={label}>
                    {internal ? (
                      <Link
                        to={href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
                Elsewhere
              </p>
              <ul className="space-y-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sushyam Nagallapati
          </p>
          <p className="text-xs text-muted-foreground/50">
            Built with React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
