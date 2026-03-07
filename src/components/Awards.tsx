import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  { name: "Grand Prix Architektů", detail: "Krajinářská architektura a zahradní tvorba", year: "2020" },
  { name: "Grand Prix Architektů", detail: "Šetrná stavba", year: "2020" },
  { name: "Veřejný interiér roku", detail: "Výherce", year: "2020" },
  { name: "Stavba roku", detail: "Cena MMR ČR", year: "2020" },
  { name: "Stavba roku Středočeského kraje ", detail: "Výherce", year: "2020" },
];

const Awards = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-32 md:py-48">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-4 mb-16 md:mb-0"
        >
          <div className="luxury-divider mb-6" />
          <span className="luxury-label block mb-4">Uznání</span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[0.85]">
            Ocenění
            <br />
            <span className="italic text-muted-foreground">&amp; publikace</span>
          </h2>
        </motion.div>

        <div className="col-span-12 md:col-span-7 md:col-start-6">
          {awards.map((award, i) => (
            <AwardRow key={award.name} award={award} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardRow = ({ award, index }: { award: typeof awards[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="grid grid-cols-12 gap-4 py-6 border-b border-border items-baseline group hover:bg-accent/30 transition-colors duration-500 -mx-4 px-4"
    >
      <span className="col-span-2 md:col-span-1 font-body text-[10px] tracking-widest text-[hsl(var(--gold))]">{award.year}</span>
      <span className="col-span-5 font-display text-xl md:text-2xl font-light text-foreground">{award.name}</span>
      <span className="col-span-5 md:col-span-6 font-body text-xs text-muted-foreground font-extralight text-right tracking-wider">{award.detail}</span>
    </motion.div>
  );
};

export default Awards;
