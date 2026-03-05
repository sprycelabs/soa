import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";
import featured3 from "@/assets/featured-3.jpg";
import featured4 from "@/assets/featured-4.jpg";

const projects = [
  { img: featured1, title: "Rodinný dům Praha", location: "Praha 6", category: "Architektura", year: "2024" },
  { img: featured2, title: "Kanceláře Delta", location: "Brno", category: "Interiér", year: "2023" },
  { img: featured3, title: "Rekonstrukce historického domu", location: "Praha 1", category: "Architektura", year: "2023" },
  { img: featured4, title: "Městský park Brno", location: "Brno", category: "Urbanismus", year: "2022" },
];

const FeaturedProjects = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="vybrane-projekty" className="section-padding py-32 md:py-48">
      <div className="grid grid-cols-12 gap-4 mb-24">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-8"
        >
          <div className="luxury-divider mb-6" />
          <span className="luxury-label block mb-4">Vybrané realizace</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mt-2 leading-[0.85]">
            Naše projekty
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="col-span-12 md:col-span-3 md:col-start-10 flex items-end"
        >
          <p className="font-body text-sm text-muted-foreground font-extralight leading-relaxed">
            Výběr z našich nejnovějších realizací v oblasti architektury, interiérového designu a urbanismu.
          </p>
        </motion.div>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-12 gap-4 md:gap-8 mb-8">
        <div className="col-span-12 md:col-span-7">
          <FeaturedCard project={projects[0]} index={0} aspect="aspect-[4/3]" />
        </div>
        <div className="col-span-12 md:col-span-5 md:mt-32">
          <FeaturedCard project={projects[1]} index={1} aspect="aspect-[3/4]" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-4 md:col-start-2">
          <FeaturedCard project={projects[2]} index={2} aspect="aspect-[3/4]" />
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 md:-mt-24">
          <FeaturedCard project={projects[3]} index={3} aspect="aspect-[16/10]" />
        </div>
      </div>
    </section>
  );
};

const FeaturedCard = ({ project, index, aspect }: { project: typeof projects[0]; index: number; aspect: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className={`w-full ${aspect} object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]`}
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-700" />
      </div>
      <div className="mt-6 flex items-baseline justify-between">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-light text-foreground">{project.title}</h3>
          <span className="luxury-label text-muted-foreground mt-2 block">
            {project.category} · {project.location}
          </span>
        </div>
        <span className="font-body text-xs text-muted-foreground/50 font-extralight hidden md:block">{project.year}</span>
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
