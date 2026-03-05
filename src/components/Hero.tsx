import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Moderní architektura"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="relative h-full grid grid-cols-12 gap-4 section-padding items-end pb-16 md:pb-24">
        <div className="col-span-12 md:col-span-9">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60 block mb-6"
          >
            Architektonické studio
          </motion.span>

          <h1 className="font-display font-light text-primary-foreground leading-[0.85] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-[4rem] md:text-[8rem] lg:text-[12rem]"
            >
              SOA
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-[2.5rem] md:text-[5rem] lg:text-[7rem] text-primary-foreground/70"
            >
              Sons of
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="block text-[2.5rem] md:text-[5rem] lg:text-[7rem] italic"
            >
              Architecture
            </motion.span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="col-span-12 md:col-span-3 md:col-start-10 md:self-end"
        >
          <p className="font-body text-sm text-primary-foreground/60 font-light leading-relaxed">
            Architektura · Interiéry · Veřejný prostor
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
