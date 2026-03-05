import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <img
          src={heroImg}
          alt="Moderní architektura"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
      <motion.div className="absolute inset-0 bg-foreground" style={{ opacity: overlayOpacity }} />

      <motion.div
        style={{ y: textY }}
        className="relative h-full grid grid-cols-12 gap-4 section-padding items-end pb-16 md:pb-24"
      >
        <div className="col-span-12 md:col-span-9">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="luxury-divider mb-8 origin-left"
          />

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="luxury-label block mb-8 text-primary-foreground/50"
          >
            Architektonické studio · Praha
          </motion.span>

          <h1 className="font-display font-light text-primary-foreground leading-[0.82] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block text-[4.5rem] md:text-[9rem] lg:text-[13rem]"
            >
              SOA
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block text-[2.5rem] md:text-[5rem] lg:text-[7rem] text-primary-foreground/60"
            >
              Sons of
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block text-[2.5rem] md:text-[5rem] lg:text-[7rem] italic text-primary-foreground/80"
            >
              Architecture
            </motion.span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="col-span-12 md:col-span-3 md:col-start-10 md:self-end"
        >
          <div className="luxury-divider mb-4" />
          <p className="font-body text-xs text-primary-foreground/50 font-extralight tracking-widest leading-relaxed uppercase">
            Architektura · Interiéry · Veřejný prostor
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
