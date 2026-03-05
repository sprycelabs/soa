import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontakt" className="section-padding py-24 md:py-40">
      <div ref={ref} className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Large editorial title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="col-span-12 mb-16 md:mb-24"
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-4">Kontakt</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-light text-foreground leading-[0.85]">
            Pojďme navrhnout
            <br />
            něco výjimečného.
          </h2>
        </motion.div>

        {/* Contact details spread across columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 md:col-span-3"
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">Email</span>
          <a href="mailto:studio@soa.cz" className="font-body text-base text-foreground hover:text-muted-foreground transition-colors duration-300">
            studio@soa.cz
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-12 md:col-span-3"
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">Telefon</span>
          <span className="font-body text-base text-foreground">+420 123 456 789</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-12 md:col-span-3"
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2">Adresa</span>
          <span className="font-body text-base text-foreground">Vinohradská 12<br />Praha 2, 120 00</span>
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-12 mt-12"
        >
          <a
            href="mailto:studio@soa.cz"
            className="inline-block px-10 py-5 border border-foreground text-foreground font-body text-sm tracking-widest uppercase hover:bg-foreground hover:text-primary-foreground transition-all duration-500"
          >
            Kontaktovat studio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
