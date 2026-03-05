import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import philosophyImg from "@/assets/philosophy.jpg";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const goldLineY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const ease = [0.25, 0.46, 0.45, 0.94] as const;

  return (
    <section className="bg-secondary relative overflow-hidden">
      <div ref={ref} className="relative">
        {/* Title spanning full width with offset */}
        <div className="section-padding pt-32 md:pt-48 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="grid grid-cols-12 gap-4 md:gap-8"
          >
            <div className="col-span-12 md:col-span-8">
              <div className="luxury-divider mb-6" />
              <span className="luxury-label block mb-6">Přístup</span>
            </div>
            <div className="col-span-12">
              <h2 className="font-display text-5xl md:text-7xl lg:text-[9rem] xl:text-[11rem] font-light text-foreground leading-[0.82] tracking-tight">
                Naše
                <span className="italic ml-4 md:ml-8">filozofie</span>
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Editorial layout: two text columns + offset image */}
        <div className="section-padding pb-32 md:pb-48">
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
            {/* Left text column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="col-span-12 md:col-span-3 md:col-start-1"
            >
              <div className="luxury-divider mb-6 hidden md:block" />
              <p className="font-body text-sm md:text-base leading-[1.9] text-muted-foreground font-extralight">
                Věříme, že kvalitní architektura vzniká z hlubokého porozumění místu, kontextu a potřebám klienta. Každý projekt vnímáme jako jedinečný proces hledání nejlepšího řešení.
              </p>
            </motion.div>

            {/* Right text column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="col-span-12 md:col-span-3 md:col-start-5"
            >
              <div className="luxury-divider mb-6 hidden md:block" />
              <p className="font-body text-sm md:text-base leading-[1.9] text-muted-foreground font-extralight">
                Naše práce stojí na dialogu – mezi prostorem a člověkem, mezi tradicí a inovací, mezi formou a funkcí. Usilujeme o architekturu, která je nadčasová a zároveň citlivá ke svému okolí.
              </p>
            </motion.div>

            {/* Image – offset, overlapping grid edge */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.25, ease }}
              className="col-span-12 md:col-span-4 md:col-start-9 mt-12 md:-mt-32 relative z-10"
            >
              <div className="relative">
                <img
                  src={philosophyImg}
                  alt="Architektonický detail"
                  className="w-full aspect-[3/4] object-cover"
                />
                {/* Decorative gold line */}
                <div className="absolute -bottom-4 -left-4 w-16 h-px bg-gold hidden md:block" />
                <div className="absolute -bottom-4 -left-4 w-px h-16 bg-gold hidden md:block" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
