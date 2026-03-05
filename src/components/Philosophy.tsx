import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import philosophyImg from "@/assets/philosophy.jpg";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-24 md:py-40 bg-secondary">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Přístup</span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mt-2 mb-8">
            Naše filozofie
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground font-light mb-6">
            Věříme, že kvalitní architektura vzniká z hlubokého porozumění místu, kontextu a potřebám klienta. Každý projekt vnímáme jako jedinečný proces hledání nejlepšího řešení.
          </p>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            Naše práce stojí na dialogu – mezi prostorem a člověkem, mezi tradicí a inovací, mezi formou a funkcí. Usilujeme o architekturu, která je nadčasová a zároveň citlivá ke svému okolí.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={philosophyImg}
            alt="Architektonický detail"
            className="w-full aspect-square object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
