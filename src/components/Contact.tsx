import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontakt" className="section-padding py-24 md:py-40">
      <div ref={ref} className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Kontakt</span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-2 mb-12">
            Pojďme vytvořit něco výjimečného.
          </h2>

          <div className="space-y-6 font-body text-base text-muted-foreground font-light">
            <div>
              <span className="text-xs tracking-widest uppercase block mb-1">Email</span>
              <a href="mailto:studio@soa.cz" className="text-foreground hover:text-muted-foreground transition-colors duration-300">
                studio@soa.cz
              </a>
            </div>
            <div>
              <span className="text-xs tracking-widest uppercase block mb-1">Telefon</span>
              <span className="text-foreground">+420 123 456 789</span>
            </div>
            <div>
              <span className="text-xs tracking-widest uppercase block mb-1">Adresa</span>
              <span className="text-foreground">Vinohradská 12, Praha 2, 120 00</span>
            </div>
          </div>

          <a
            href="mailto:studio@soa.cz"
            className="inline-block mt-12 px-8 py-4 border border-foreground text-foreground font-body text-sm tracking-widest uppercase hover:bg-foreground hover:text-primary-foreground transition-all duration-500"
          >
            Kontaktovat studio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
