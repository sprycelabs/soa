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
    <section className="section-padding py-32 md:py-48 bg-secondary">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="col-span-12 mb-20 md:mb-32"
        >
          <div className="luxury-divider mb-6" />
          <span className="luxury-label block mb-4">Proces</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[0.85]">
            Jak <span className="italic">pracujeme</span>
          </h2>
        </motion.div>

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

  const colClasses = [
    "col-span-12 md:col-span-5 md:col-start-1",
    "col-span-12 md:col-span-5 md:col-start-4",
    "col-span-12 md:col-span-5 md:col-start-7",
    "col-span-12 md:col-span-5 md:col-start-3",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`${colClasses[index]} mb-16 md:mb-20 flex gap-8 items-start`}
    >
      <span className="font-display text-6xl md:text-8xl font-extralight text-[hsl(var(--gold-light))] leading-none shrink-0 opacity-40">
        {step.num}
      </span>
      <div className="pt-3 md:pt-5">
        <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-3">{step.title}</h3>
        <p className="font-body text-sm text-muted-foreground font-extralight leading-[1.8]">{step.description}</p>
      </div>
    </motion.div>
  );
};

export default Process;
