import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin } from "lucide-react";

const navLinks = [
{ label: "Projekty", href: "#projekty" },
{ label: "O nás", href: "#o-nas" },
{ label: "Tým", href: "#tym" },
{ label: "Kontakt", href: "#kontakt" }];


const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="section-padding pt-24 md:pt-32 pb-12 bg-foreground text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}>
        
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Column 1 — Studio */}
          <div className="col-span-12 md:col-span-4">
            <span className="font-display text-4xl md:text-5xl font-light tracking-wider block leading-[0.85]">
              LAstudio
            </span>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-primary-foreground/40 mt-3 mb-6">
              Architecture & Design
            </p>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="font-body text-sm text-primary-foreground/50 font-extralight leading-[1.8] max-w-xs">
              Architektonické studio zaměřené na moderní architekturu, interiéry a veřejný prostor.
            </p>
          </div>

          {/* Column 2 — Navigace */}
          <div className="col-span-6 md:col-span-2 md:col-start-6">
            <span className="luxury-label block mb-6 text-primary-foreground/30">Navigace</span>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) =>
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-500 font-extralight">
                
                  {link.label}
                </a>
              )}
            </nav>
          </div>

          {/* Column 3 — Kontakt */}
          <div className="col-span-6 md:col-span-3">
            <span className="luxury-label block mb-6 text-primary-foreground/30">Kontakt</span>
            <div className="space-y-5">
              <div>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/30 block mb-1">
                  Email
                </span>
                <a
                  href="mailto:studio@soa.cz"
                  className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-500 font-extralight">
                  
                  ​info@s-o-a.cz
                </a>
              </div>
              <div>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/30 block mb-1">
                  Telefon
                </span>
                <span className="font-body text-sm text-primary-foreground/60 font-extralight">
                  +420 774 322 109
                </span>
              </div>
              <div>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/30 block mb-1">
                  Adresa
                </span>
                <span className="font-body text-sm text-primary-foreground/60 font-extralight">
                  Václavské nám. 828/23
110 00 Praha, Česká Republika
                </span>
              </div>
            </div>
          </div>

          {/* Column 4 — Sociální sítě */}
          <div className="col-span-12 md:col-span-2 md:col-start-11">
            <span className="luxury-label block mb-6 text-primary-foreground/30">Sledujte nás</span>
            <div className="flex md:flex-col gap-5">
              <a href="https://www.instagram.com/soaarchitekti/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-500 group">
                
                <Instagram size={18} strokeWidth={1.2} />
                <span className="font-body text-sm font-extralight">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/soa-architekti/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-500 group">
                
                <Linkedin size={18} strokeWidth={1.2} />
                <span className="font-body text-sm font-extralight">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-20 md:mt-28 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-body text-[10px] text-primary-foreground/30 font-extralight tracking-[0.2em]">
            © {new Date().getFullYear()} SOA architekti, s.r.o.
          </p>
          <p className="font-body text-[10px] text-primary-foreground/30 font-extralight tracking-[0.2em]">
            Všechna práva vyhrazena
          </p>
        </div>
      </motion.div>
    </footer>);

};

export default Footer;