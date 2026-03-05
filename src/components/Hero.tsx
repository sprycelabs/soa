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

      <div className="relative h-full grid grid-cols-12 gap-4 section-padding items-end pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-12 md:col-span-8"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-light text-primary-foreground tracking-tight leading-[0.9]">
            SOA –
            <br />
            Sons of
            <br />
            Architecture
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="col-span-12 md:col-span-4 md:col-start-9"
        >
          <p className="font-body text-sm md:text-base text-primary-foreground/80 font-light tracking-wide leading-relaxed">
            „Architektonické studio zaměřené na moderní architekturu, interiéry a veřejný prostor."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
