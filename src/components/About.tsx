import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import foundersImg from "@/assets/founders.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-nas" className="section-padding py-24 md:py-40 bg-secondary">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">O nás</span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mt-2 mb-8">
            O studiu SOA
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            SOA – Sons of Architecture je architektonické studio zaměřené na současnou architekturu, interiéry a veřejný prostor. Každý projekt vnímáme jako jedinečnou příležitost vytvořit prostor, který má charakter, kvalitu a dlouhodobou hodnotu.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={foundersImg}
            alt="Zakladatelé SOA"
            className="w-full aspect-[4/5] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
