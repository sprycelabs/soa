import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import philosophyImg from "@/assets/philosophy.jpg";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-32 md:py-48 bg-secondary relative overflow-hidden">
      <div ref={ref} className="grid grid-cols-12 gap-4 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="col-span-12 mb-12 md:mb-20"
        >
          <div className="luxury-divider mb-6" />
          <span className="luxury-label block mb-4">Přístup</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-light text-foreground leading-[0.82] tracking-tight">
            Naše
            <br />
            <span className="italic">filozofie</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-span-12 md:col-span-4 md:col-start-1"
        >
          <p className="font-body text-sm md:text-base leading-[1.8] text-muted-foreground font-extralight">
            Věříme, že kvalitní architektura vzniká z hlubokého porozumění místu, kontextu a potřebám klienta. Každý projekt vnímáme jako jedinečný proces hledání nejlepšího řešení.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="col-span-12 md:col-span-4 md:col-start-1 mt-4 md:mt-8"
        >
          <p className="font-body text-sm md:text-base leading-[1.8] text-muted-foreground font-extralight">
            Naše práce stojí na dialogu – mezi prostorem a člověkem, mezi tradicí a inovací, mezi formou a funkcí. Usilujeme o architekturu, která je nadčasová a zároveň citlivá ke svému okolí.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="col-span-12 md:col-span-5 md:col-start-8 md:row-start-2 md:row-span-2 mt-8 md:mt-0"
        >
          <img
            src={philosophyImg}
            alt="Architektonický detail"
            className="w-full aspect-[3/4] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
