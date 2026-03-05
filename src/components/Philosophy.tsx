import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import philosophyImg from "@/assets/philosophy.jpg";

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Top: Full-width editorial title spanning the grid */}
      <div ref={ref} className="section-padding pt-32 md:pt-48 pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
          {/* Label + title spanning most columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="col-span-12 md:col-span-8"
          >
            <div className="luxury-divider mb-6" />
            <span className="luxury-label block mb-4">Přístup</span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-[9rem] xl:text-[11rem] font-light text-foreground leading-[0.82] tracking-tight">
              Naše
              <br />
              <span className="italic">filozofie</span>
            </h2>
          </motion.div>

          {/* Pull quote aligned to bottom-right of title row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="col-span-12 md:col-span-3 md:col-start-10 self-end pb-2"
          >
            <div className="w-8 h-px bg-gold mb-4" />
            <p className="font-display text-lg md:text-xl italic text-foreground/70 leading-[1.4]">
              „Architektura je dialog mezi prostorem a člověkem."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Middle: Image + overlapping text columns — magazine layout */}
      <div className="relative">
        {/* Large image — offset to the right, bleeding edge */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-padding"
        >
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 md:col-span-7 md:col-start-5">
              <img
                src={philosophyImg}
                alt="Architektonický detail"
                className="w-full aspect-[4/3] md:aspect-[16/10] object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Two text columns overlapping the image from the left */}
        <div className="section-padding relative md:absolute md:bottom-0 md:left-0 md:right-0 pb-16 md:pb-0">
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="col-span-12 md:col-span-4 md:col-start-1 md:-mb-16 lg:-mb-24"
            >
              <div className="bg-secondary p-8 md:p-10 lg:p-12">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold block mb-4">01</span>
                <p className="font-body text-sm md:text-base leading-[1.9] text-muted-foreground font-extralight">
                  Věříme, že kvalitní architektura vzniká z hlubokého porozumění místu, kontextu a potřebám klienta. Každý projekt vnímáme jako jedinečný proces hledání nejlepšího řešení.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="col-span-12 md:col-span-3 md:col-start-1 md:-mb-8 lg:-mb-12 mt-2 md:mt-0"
            >
              <div className="bg-background/80 backdrop-blur-sm p-8 md:p-10 lg:p-12">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold block mb-4">02</span>
                <p className="font-body text-sm md:text-base leading-[1.9] text-muted-foreground font-extralight">
                  Naše práce stojí na dialogu – mezi tradicí a inovací, mezi formou a funkcí. Usilujeme o architekturu nadčasovou a citlivou ke svému okolí.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-24 md:h-40" />
    </section>
  );
};

export default Philosophy;
