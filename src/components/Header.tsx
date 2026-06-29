import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "About",    href: "/",         active: location.pathname === "/"        },
    { label: "Resume",   href: "/resume",   active: location.pathname === "/resume"  },
    { label: "Projects", href: "/projects", active: location.pathname === "/projects" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sushyamnagallapati",
      active: false,
      isExternal: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-8 sm:pt-5">
      <div className="max-w-6xl mx-auto">

        {/* Floating pill nav */}
        <div className="bg-background/90 backdrop-blur-xl border border-border/50 shadow-sm rounded-full px-3 sm:px-5 h-12 sm:h-13 flex items-center justify-between">

          {/* Logo — monogram + full name */}
          <Link to="/" className="flex items-center gap-2.5 group min-w-0">
            <span className="font-mono text-xs font-semibold text-primary w-7 h-7 rounded flex items-center justify-center border border-primary/30 flex-shrink-0 group-hover:border-primary/60 transition-colors duration-200">
              sn
            </span>
            <span className="font-semibold text-sm tracking-tight text-foreground truncate">
              <span className="sm:hidden">Sushyam</span>
              <span className="hidden sm:inline">Sushyam Nagallapati</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              !item.isExternal ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    item.active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                >
                  {item.label}
                </a>
              )
            )}
            <ThemeToggle />
            <a
              href="mailto:s2nagall@uwaterloo.ca"
              className="ml-2 px-5 py-1.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:opacity-85 transition-opacity duration-200"
            >
              Get in touch
            </a>
          </nav>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <nav className="bg-background/95 backdrop-blur-xl border border-border/50 shadow-sm rounded-2xl px-3 py-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) =>
                !item.isExternal ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-4 py-2.5 rounded-full text-base font-medium transition-all duration-200 ${
                      item.active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href="mailto:s2nagall@uwaterloo.ca"
                className="mt-1 px-4 py-2.5 rounded-full text-base font-semibold bg-primary text-primary-foreground text-center hover:opacity-85 transition-opacity duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in touch
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
