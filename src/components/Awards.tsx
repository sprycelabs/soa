import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  { name: "ArchDaily", detail: "Building of the Year 2024 – nominace" },
  { name: "Dezeen", detail: "Featured Project 2023" },
  { name: "Česká cena za architekturu", detail: "Finalista 2023" },
  { name: "BigMat Award", detail: "Shortlist 2022" },
  { name: "ASB Magazine", detail: "Projekt roku 2022" },
];

const Awards = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-24 md:py-40">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Uznání</span>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-2">Ocenění a publikace</h2>
      </motion.div>

      <div className="max-w-3xl">
        {awards.map((award, i) => (
          <AwardRow key={award.name} award={award} index={i} />
        ))}
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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex items-baseline justify-between py-5 border-b border-border"
    >
      <span className="font-display text-xl md:text-2xl font-light text-foreground">{award.name}</span>
      <span className="font-body text-sm text-muted-foreground font-light">{award.detail}</span>
    </motion.div>
  );
};

export default Awards;
