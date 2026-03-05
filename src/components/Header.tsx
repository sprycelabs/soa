import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 section-padding flex items-center justify-between ${
        scrolled
          ? "py-4 bg-background/90 backdrop-blur-md border-b border-border"
          : "py-8 bg-transparent"
      }`}
    >
      <a href="#" className="font-display text-2xl font-semibold tracking-wider text-foreground">
        SOA
      </a>

      <nav className="flex items-center gap-8">
        <a href="#projekty" className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
          Projekty
        </a>
        <a href="#o-nas" className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
          O nás
        </a>
        <a href="#kontakt" className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
          Kontakt
        </a>
        <button className="text-muted-foreground hover:text-foreground transition-colors duration-300" aria-label="Hledat">
          <Search size={18} strokeWidth={1.5} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
