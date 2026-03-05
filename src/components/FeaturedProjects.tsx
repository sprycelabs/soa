import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";
import featured3 from "@/assets/featured-3.jpg";
import featured4 from "@/assets/featured-4.jpg";

const projects = [
  { img: featured1, title: "Rodinný dům Praha", location: "Praha 6", category: "Architektura" },
  { img: featured2, title: "Kanceláře Delta", location: "Brno", category: "Interiér" },
  { img: featured3, title: "Rekonstrukce historického domu", location: "Praha 1", category: "Architektura" },
  { img: featured4, title: "Městský park Brno", location: "Brno", category: "Urbanismus" },
];

const FeaturedProjects = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="vybrane-projekty" className="section-padding py-24 md:py-40">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Vybrané realizace</span>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-2">Naše projekty</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <FeaturedCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

const FeaturedCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
      </div>
      <div className="mt-4">
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          {project.category} · {project.location}
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mt-1">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
