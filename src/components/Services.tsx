import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Sofa, TreePine, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architektura budov",
    description: "Navrhujeme obytné, komerční i veřejné budovy s důrazem na kvalitu prostoru a udržitelnost.",
    num: "01",
  },
  {
    icon: Sofa,
    title: "Interiérový design",
    description: "Vytváříme interiéry, které spojují estetiku s funkcí a reflektují potřeby uživatelů.",
    num: "02",
  },
  {
    icon: TreePine,
    title: "Urbanismus",
    description: "Navrhujeme veřejné prostory a urbanistické celky, které zlepšují kvalitu života ve městech.",
    num: "03",
  },
  {
    icon: Lightbulb,
    title: "Koncepční studie",
    description: "Zpracováváme studie proveditelnosti a koncepční návrhy pro komplexní architektonické zadání.",
    num: "04",
  },
];

const Services = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-24 md:py-40">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Title on the left */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="col-span-12 md:col-span-5 mb-12 md:mb-0"
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Služby</span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground mt-2 leading-[0.9]">
            Co
            <br />
            navrhujeme
          </h2>
        </motion.div>

        {/* Services on the right in a 2-col sub-grid */}
        <div className="col-span-12 md:col-span-6 md:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
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
      className="border-t border-border pt-6"
    >
      <div className="flex items-center justify-between mb-4">
        <Icon size={24} strokeWidth={1} className="text-foreground" />
        <span className="font-body text-xs text-muted-foreground">{service.num}</span>
      </div>
      <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-3">{service.title}</h3>
      <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">{service.description}</p>
    </motion.div>
  );
};

export default Services;
