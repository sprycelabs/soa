import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontakt" className="section-padding py-32 md:py-48">
      <div ref={ref} className="grid grid-cols-12 gap-4 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="col-span-12 mb-20 md:mb-28"
        >
          <div className="luxury-divider mb-6" />
          <span className="luxury-label block mb-6">Kontakt</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-light text-foreground leading-[0.82]">
            Pojďme navrhnout
            <br />
            něco <span className="italic">výjimečného.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-span-12 md:col-span-3"
        >
          <span className="luxury-label block mb-3">Email</span>
          <a href="mailto:studio@soa.cz" className="font-body text-base text-foreground hover:text-muted-foreground transition-colors duration-500 font-extralight">
            studio@soa.cz
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="col-span-12 md:col-span-3"
        >
          <span className="luxury-label block mb-3">Telefon</span>
          <span className="font-body text-base text-foreground font-extralight">+420 123 456 789</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="col-span-12 md:col-span-3"
        >
          <span className="luxury-label block mb-3">Adresa</span>
          <span className="font-body text-base text-foreground font-extralight">Vinohradská 12<br />Praha 2, 120 00</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="col-span-12 mt-16"
        >
          <a
            href="mailto:studio@soa.cz"
            className="inline-block px-12 py-5 border border-foreground text-foreground font-body text-[10px] tracking-[0.35em] uppercase hover:bg-foreground hover:text-primary-foreground transition-all duration-700"
          >
            Kontaktovat studio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
