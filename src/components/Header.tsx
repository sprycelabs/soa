import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";
import featured3 from "@/assets/featured-3.jpg";
import featured4 from "@/assets/featured-4.jpg";

const allProjects = [
  { img: featured1, title: "Rodinný dům Praha", location: "Praha 6", category: "Architektura" },
  { img: featured2, title: "Kanceláře Delta", location: "Brno", category: "Interiér" },
  { img: featured3, title: "Rekonstrukce historického domu", location: "Praha 1", category: "Architektura" },
  { img: featured4, title: "Městský park Brno", location: "Brno", category: "Urbanismus" },
  { img: project1, title: "Městský dům", location: "Praha", category: "Architektura" },
  { img: project2, title: "Nové kanceláře studio Delta", location: "Praha", category: "Interiér" },
  { img: project3, title: "ZS LOBSTERS", location: "Praha", category: "Architektura" },
  { img: project4, title: "Floridian Beach House", location: "Miami", category: "Urbanismus" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
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
          <button
            onClick={() => setSearchOpen(true)}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            aria-label="Hledat"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
        </nav>
      </header>

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
            <div className="section-padding pt-8 h-full flex flex-col">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-12">
                <span className="font-display text-2xl font-semibold tracking-wider text-foreground">SOA</span>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label="Zavřít"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Search input */}
              <div className="border-b border-foreground pb-4 mb-12">
                <div className="flex items-center gap-4">
                  <Search size={20} strokeWidth={1.5} className="text-muted-foreground shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Hledat projekt..."
                    className="w-full bg-transparent font-display text-3xl md:text-5xl font-light text-foreground placeholder:text-muted-foreground/40 outline-none"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="flex-1 overflow-y-auto">
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
                          document.getElementById("projekty")?.scrollIntoView({ behavior: "smooth" });
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
                          <h3 className="font-display text-xl font-light text-foreground">{project.title}</h3>
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
