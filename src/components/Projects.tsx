import { motion, useInView } from "framer-motion";
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

const Projects = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="projekty" className="section-padding py-24 md:py-40">
      <div className="grid grid-cols-12 gap-4 md:gap-6 mb-20">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="col-span-12 md:col-span-6"
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Portfolio</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mt-2 leading-[0.9]">
            Projekty
          </h2>
        </motion.div>
      </div>

      {/* Full-width first project */}
      <ProjectRow project={projects[0]} index={0} className="col-span-12 mb-6" aspect="aspect-[21/9]" />

      {/* Asymmetric row */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 mb-6">
        <div className="col-span-12 md:col-span-5">
          <ProjectRow project={projects[1]} index={1} aspect="aspect-[3/4]" />
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 md:mt-16">
          <ProjectRow project={projects[2]} index={2} aspect="aspect-[4/3]" />
        </div>
      </div>

      {/* Offset single project */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <ProjectRow project={projects[3]} index={3} aspect="aspect-[16/9]" />
        </div>
      </div>
    </section>
  );
};

const ProjectRow = ({ project, index, className = "", aspect }: { project: typeof projects[0]; index: number; className?: string; aspect: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group cursor-pointer ${className}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className={`w-full ${aspect} object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-700" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="font-body text-xs tracking-widest uppercase text-primary-foreground/70">
            {project.category}
          </span>
          <h3 className="font-display text-2xl md:text-4xl text-primary-foreground font-light mt-1">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
