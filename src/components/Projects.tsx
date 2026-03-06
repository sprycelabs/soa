import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { portfolioProjects, type Project } from "@/data/projects";

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
      <ProjectRow project={portfolioProjects[0]} index={0} className="col-span-12 mb-6" aspect="aspect-[21/9]" />

      {/* Asymmetric row */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 mb-6">
        <div className="col-span-12 md:col-span-5">
          <ProjectRow project={portfolioProjects[1]} index={1} aspect="aspect-[3/4]" />
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 md:mt-16">
          <ProjectRow project={portfolioProjects[2]} index={2} aspect="aspect-[4/3]" />
        </div>
      </div>

      {/* Offset single project */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 mb-16">
        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <ProjectRow project={portfolioProjects[3]} index={3} aspect="aspect-[16/9]" />
        </div>
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <Link
          to="/projekty"
          className="group inline-flex items-center gap-3 font-body text-xs tracking-widest uppercase text-foreground border border-foreground/20 px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
        >
          Všechny projekty
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
};

const ProjectRow = ({ project, index, className = "", aspect }: { project: Project; index: number; className?: string; aspect: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardRef = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <Link to={`/projekt/${project.id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className={`group cursor-pointer ${className}`}
      >
        <div ref={cardRef} className="relative overflow-hidden">
          <motion.img
            style={{ y: imgY }}
            src={project.img}
            alt={project.title}
            className={`w-full ${aspect} object-cover scale-[1.35] transition-transform duration-[1.2s] ease-out group-hover:scale-[1.4]`}
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
    </Link>
  );
};

export default Projects;
