import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "About", href: "/", active: location.pathname === "/" },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1_vDMkN7Duow5DrriBFWrxN1F4xY-Ujvx/view?usp=sharing",
      active: false,
      isExternal: true,
    },
    {
      label: "Projects",
      href: "/projects",
      active: location.pathname === "/projects",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sushyamnagallapati",
      active: false,
      isExternal: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-8 sm:pt-5">
      {/* Floating pill navbar */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-background/90 backdrop-blur-xl border border-border/60 shadow-sm rounded-full px-3 sm:px-5 h-12 sm:h-14 flex items-center justify-between transition-all duration-300">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group min-w-0">
            <img
              src={profilePhoto}
              alt="Sushyam Nagallapati"
              className="w-7 h-7 rounded-full object-cover border-2 border-border group-hover:border-primary/40 transition-all duration-300 flex-shrink-0"
            />
            <span className="font-semibold text-sm tracking-tight text-foreground truncate">
              <span className="sm:hidden">Sushyam</span>
              <span className="hidden sm:inline">Sushyam Nagallapati</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    item.active
                      ? "bg-foreground text-background"
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
              ),
            )}
            <ThemeToggle />
            {/* Hire Me CTA */}
            <a
              href="mailto:s2nagall@uwaterloo.ca"
              className="ml-2 px-5 py-1.5 rounded-full text-sm font-medium bg-foreground text-background hover:opacity-80 transition-all duration-200"
            >
              Hire me
            </a>
          </nav>

          {/* Mobile: Theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className="p-2 text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation — floating card below pill */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <nav className="bg-background/95 backdrop-blur-xl border border-border/60 shadow-sm rounded-2xl px-3 py-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-4 py-2.5 rounded-full text-base font-medium transition-all duration-200 ${
                      item.active
                        ? "bg-foreground text-background"
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
                ),
              )}
              <a
                href="mailto:s2nagall@uwaterloo.ca"
                className="mt-1 px-4 py-2.5 rounded-full text-base font-medium bg-foreground text-background text-center transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire me
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
