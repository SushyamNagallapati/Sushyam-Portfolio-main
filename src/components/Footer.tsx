import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sushyam Nagallapati
          </p>
          <SocialIcons
            iconClassName="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
