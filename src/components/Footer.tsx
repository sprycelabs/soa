import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="section-padding py-20 md:py-28 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-4">
            <span className="font-display text-3xl font-light tracking-wider text-foreground block">
              SOA
            </span>
            <p className="font-body text-xs text-muted-foreground mt-2 font-extralight tracking-widest">
              Sons of Architecture
            </p>
            <div className="luxury-divider mt-6" />
          </div>

          <nav className="col-span-12 md:col-span-4 md:col-start-6 flex flex-col gap-4">
            <a href="#projekty" className="font-body text-[10px] tracking-[0.35em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500">
              Projekty
            </a>
            <a href="#o-nas" className="font-body text-[10px] tracking-[0.35em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500">
              O nás
            </a>
            <a href="#kontakt" className="font-body text-[10px] tracking-[0.35em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500">
              Kontakt
            </a>
          </nav>

          <div className="col-span-12 md:col-span-2 md:col-start-11 flex md:justify-end">
            <span className="font-body text-[10px] tracking-[0.35em] uppercase text-muted-foreground/50">
              Est. 2018
            </span>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <p className="font-body text-[10px] text-muted-foreground/50 font-extralight tracking-widest">
            © {new Date().getFullYear()} SOA – Sons of Architecture
          </p>
          <p className="font-body text-[10px] text-muted-foreground/50 font-extralight tracking-widest hidden md:block">
            Praha, Česká republika
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
