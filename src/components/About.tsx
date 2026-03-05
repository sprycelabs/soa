import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import foundersImg from "@/assets/founders.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectionRef = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [180, -180]);

  return (
    <section id="o-nas" ref={sectionRef} className="relative">
      <div className="overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="w-full"
          style={{ y: imgY }}
        >
          <img
            src={foundersImg}
            alt="Zakladatelé SOA"
            className="w-full aspect-[21/9] object-cover scale-[1.4]"
          />
        </motion.div>
      </div>

      <div className="section-padding -mt-24 md:-mt-40 relative z-10">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-12 md:col-span-7 bg-background p-10 md:p-20"
          >
            <div className="luxury-divider mb-6" />
            <span className="luxury-label block mb-4">O nás</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-10 leading-[0.85]">
              O studiu <span className="italic">SOA</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="font-body text-sm md:text-base leading-[1.8] text-muted-foreground font-extralight">
                SOA – Sons of Architecture je architektonické studio zaměřené na současnou architekturu, interiéry a veřejný prostor.
              </p>
              <p className="font-body text-sm md:text-base leading-[1.8] text-muted-foreground font-extralight">
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
