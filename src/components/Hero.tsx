import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Moderní architektura"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
      </div>

      <div className="relative h-full grid grid-cols-12 gap-4 section-padding items-end pb-16 md:pb-24">
        <div className="col-span-12 md:col-span-9">
          {/* Gold divider line */}
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
      </div>
    </section>
  );
};

export default Hero;
