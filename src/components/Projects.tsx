import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "Městský dům", category: "Architektura" },
  { img: project2, title: "Nové kanceláře studio Delta", category: "Interiér" },
  { img: project3, title: "ZS LOBSTERS", category: "Architektura" },
  { img: project4, title: "Floridian Beach House", category: "Urbanismus" },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group cursor-pointer ${index % 3 === 0 ? "md:col-span-2" : "md:col-span-1"}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="font-body text-xs tracking-widest uppercase text-primary-foreground/70">
            {project.category}
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-primary-foreground font-light mt-1">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="projekty" className="section-padding py-24 md:py-40">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Portfolio</span>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground mt-2">Projekty</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
