import { useState, useEffect, useRef } from "react";
import { Search, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { allProjects } from "@/data/projects";

const navLinks = [
  { label: "Projekty", href: "#projekty" },
  { label: "O nás", href: "#o-nas" },
  { label: "Tým", href: "#tym" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => { document.body.style.overflow = ""; };
  }, [searchOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = query.trim()
    ? allProjects.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.location.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-16 lg:px-24 xl:px-36 flex items-center justify-between ${
          scrolled
            ? "py-3 md:py-4 bg-background/90 backdrop-blur-md border-b border-border"
            : "py-5 md:py-8 bg-transparent"
        }`}
      >
        <a href="#" className="font-display text-xl md:text-2xl font-semibold tracking-wider text-foreground">
          LAstudio
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setSearchOpen(true)}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Hledat"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setSearchOpen(true)}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Hledat"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-foreground"
            aria-label="Menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col"
          >
            <div className="px-6 py-5 flex items-center justify-between">
              <span className="font-display text-xl font-semibold tracking-wider text-foreground">LAstudio</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-foreground"
                aria-label="Zavřít"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col px-6 gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="font-display text-4xl font-light text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-6 pb-8">
              <div className="luxury-divider mb-4" />
              <p className="font-body text-xs text-muted-foreground font-extralight tracking-widest">
                info@s-o-a.cz
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md"
          >
            <div className="px-6 md:px-16 lg:px-24 xl:px-36 pt-5 md:pt-8 h-full flex flex-col">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <span className="font-display text-xl md:text-2xl font-semibold tracking-wider text-foreground">SOA</span>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label="Zavřít"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Search input */}
              <div className="border-b border-foreground pb-4 mb-8 md:mb-12">
                <div className="flex items-center gap-4">
                  <Search size={18} strokeWidth={1.5} className="text-muted-foreground shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Hledat projekt..."
                    className="w-full bg-transparent font-display text-2xl md:text-5xl font-light text-foreground placeholder:text-muted-foreground/40 outline-none"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="flex-1 overflow-y-auto pb-8">
                {query.trim() === "" ? (
                  <p className="font-body text-sm text-muted-foreground font-light">
                    Zadejte název projektu, kategorii nebo lokalitu.
                  </p>
                ) : filtered.length === 0 ? (
                  <p className="font-body text-sm text-muted-foreground font-light">
                    Žádné výsledky pro „{query}"
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="group cursor-pointer"
                        onClick={() => {
                          setSearchOpen(false);
                          navigate(`/projekt/${project.id}`, { state: { from: "projekty" } });
                        }}
                      >
                        <div className="overflow-hidden">
                          <img
                            src={project.img}
                            alt={project.title}
                            className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="mt-3">
                          <h3 className="font-display text-lg md:text-xl font-light text-foreground">{project.title}</h3>
                          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                            {project.category} · {project.location}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
