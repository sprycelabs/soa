import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  { name: "ArchDaily", detail: "Building of the Year 2024 – nominace", year: "2024" },
  { name: "Dezeen", detail: "Featured Project", year: "2023" },
  { name: "Česká cena za architekturu", detail: "Finalista", year: "2023" },
  { name: "BigMat Award", detail: "Shortlist", year: "2022" },
  { name: "ASB Magazine", detail: "Projekt roku", year: "2022" },
];

const Awards = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-24 md:py-40">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="col-span-12 md:col-span-4 mb-12 md:mb-0"
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Uznání</span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground mt-2 leading-[0.9]">
            Ocenění
            <br />
            <span className="text-muted-foreground">&</span> publikace
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
      className="grid grid-cols-12 gap-4 py-5 border-b border-border items-baseline"
    >
      <span className="col-span-1 font-body text-xs text-muted-foreground">{award.year}</span>
      <span className="col-span-5 font-display text-xl md:text-2xl font-light text-foreground">{award.name}</span>
      <span className="col-span-6 font-body text-sm text-muted-foreground font-light text-right">{award.detail}</span>
    </motion.div>
  );
};

export default Awards;
