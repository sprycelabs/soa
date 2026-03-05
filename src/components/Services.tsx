import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Sofa, TreePine, Lightbulb } from "lucide-react";

const services = [
  { icon: Building2, title: "Architektura budov", description: "Navrhujeme obytné, komerční i veřejné budovy s důrazem na kvalitu prostoru a udržitelnost.", num: "01" },
  { icon: Sofa, title: "Interiérový design", description: "Vytváříme interiéry, které spojují estetiku s funkcí a reflektují potřeby uživatelů.", num: "02" },
  { icon: TreePine, title: "Urbanismus", description: "Navrhujeme veřejné prostory a urbanistické celky, které zlepšují kvalitu života ve městech.", num: "03" },
  { icon: Lightbulb, title: "Koncepční studie", description: "Zpracováváme studie proveditelnosti a koncepční návrhy pro komplexní architektonické zadání.", num: "04" },
];

const Services = () => {
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
          className="col-span-12 md:col-span-5 mb-16 md:mb-0"
        >
          <div className="luxury-divider mb-6" />
          <span className="luxury-label block mb-4">Služby</span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[0.85]">
            Co
            <br />
            <span className="italic">navrhujeme</span>
          </h2>
        </motion.div>

        <div className="col-span-12 md:col-span-6 md:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-14">
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
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="border-t border-border pt-8"
    >
      <div className="flex items-center justify-between mb-5">
        <Icon size={22} strokeWidth={1} className="text-foreground" />
        <span className="font-body text-[10px] tracking-widest text-muted-foreground/40">{service.num}</span>
      </div>
      <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-3">{service.title}</h3>
      <p className="font-body text-sm text-muted-foreground font-extralight leading-[1.8]">{service.description}</p>
    </motion.div>
  );
};

export default Services;
