import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Analýza a koncept", description: "Poznáváme místo, kontext a vaše potřeby. Definujeme směr projektu." },
  { num: "02", title: "Architektonická studie", description: "Navrhujeme prostorové řešení, hmotu a atmosféru budoucího projektu." },
  { num: "03", title: "Projektová dokumentace", description: "Zpracováváme kompletní dokumentaci pro stavební povolení a realizaci." },
  { num: "04", title: "Realizace", description: "Dohlížíme na stavbu a zajišťujeme, že výsledek odpovídá návrhu." },
];

const Process = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-24 md:py-40 bg-secondary">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Proces</span>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-2">Jak pracujeme</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
        {/* Horizontal line connecting steps on desktop */}
        <div className="hidden md:block absolute top-[14px] left-0 right-0 h-px bg-border" />

        {steps.map((step, i) => (
          <StepCard key={step.num} step={step} index={i} />
        ))}
      </div>
    </section>
  );
};

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="w-7 h-7 rounded-full border border-foreground bg-secondary flex items-center justify-center mb-6 relative z-10">
        <span className="font-body text-[10px] text-foreground">{step.num}</span>
      </div>
      <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-3">{step.title}</h3>
      <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{step.description}</p>
    </motion.div>
  );
};

export default Process;
