import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { portfolioProjects, type Project } from "@/data/projects";

const Projects = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return;






















































};

const ProjectRow = ({ project, index, className = "", aspect }: {project: Project;index: number;className?: string;aspect: string;}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardRef = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <Link to={`/projekt/${project.id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className={`group cursor-pointer ${className}`}>
        
        <div ref={cardRef} className="relative overflow-hidden">
          <motion.img
            style={{ y: imgY }}
            src={project.img}
            alt={project.title}
            className={`w-full ${aspect} object-cover scale-[1.35] transition-transform duration-[1.2s] ease-out group-hover:scale-[1.4]`} />
          
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-700" />
        </div>
        <div className="mt-5 flex items-baseline justify-between">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-light text-foreground">{project.title}</h3>
            <p className="font-body text-sm text-muted-foreground font-light mt-2 leading-relaxed max-w-md">
              {project.description}
            </p>
          </div>
          <span className="font-body text-xs text-muted-foreground/50 font-extralight hidden md:block">{project.year}</span>
        </div>
      </motion.div>
    </Link>);

};

export default Projects;