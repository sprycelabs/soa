import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import foundersImg from "@/assets/founders.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-nas" className="relative overflow-hidden">
      {/* Full-width image */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <img
          src={foundersImg}
          alt="Zakladatelé SOA"
          className="w-full aspect-[21/9] object-cover"
        />
      </motion.div>

      {/* Overlapping text block */}
      <div className="section-padding -mt-20 md:-mt-32 relative z-10">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-12 md:col-span-7 bg-background p-8 md:p-16"
          >
            <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">O nás</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-2 mb-8 leading-[0.9]">
              O studiu SOA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="font-body text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                SOA – Sons of Architecture je architektonické studio zaměřené na současnou architekturu, interiéry a veřejný prostor.
              </p>
              <p className="font-body text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                Každý projekt vnímáme jako jedinečnou příležitost vytvořit prostor, který má charakter, kvalitu a dlouhodobou hodnotu.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
