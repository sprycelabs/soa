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

      <div className="relative h-full flex flex-col justify-end section-padding pb-20 md:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground tracking-tight"
        >
          SOA – Sons of Architecture
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-base md:text-lg text-primary-foreground/80 mt-6 max-w-2xl font-light tracking-wide"
        >
          „Architektonické studio zaměřené na moderní architekturu, interiéry a veřejný prostor."
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
