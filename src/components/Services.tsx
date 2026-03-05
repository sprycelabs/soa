import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Sofa, TreePine, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architektura budov",
    description: "Navrhujeme obytné, komerční i veřejné budovy s důrazem na kvalitu prostoru a udržitelnost.",
  },
  {
    icon: Sofa,
    title: "Interiérový design",
    description: "Vytváříme interiéry, které spojují estetiku s funkcí a reflektují potřeby uživatelů.",
  },
  {
    icon: TreePine,
    title: "Urbanismus",
    description: "Navrhujeme veřejné prostory a urbanistické celky, které zlepšují kvalitu života ve městech.",
  },
  {
    icon: Lightbulb,
    title: "Koncepční studie",
    description: "Zpracováváme studie proveditelnosti a koncepční návrhy pro komplexní architektonické zadání.",
  },
];

const Services = () => {
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
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Služby</span>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-2">Co navrhujeme</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Icon size={28} strokeWidth={1} className="text-foreground mb-4" />
      <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-3">{service.title}</h3>
      <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

export default Services;
