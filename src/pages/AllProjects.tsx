import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { allProjects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AllProjects = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="section-padding pt-32 pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět
        </Link>
      </div>

      <section className="section-padding py-12 md:py-20">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Portfolio</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mt-2 leading-[0.9]">
            Všechny projekty
          </h1>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {allProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className={`col-span-12 ${i % 3 === 0 ? "md:col-span-7" : i % 3 === 1 ? "md:col-span-5" : "md:col-span-6 md:col-start-4"} mb-8`}
            >
              <Link to={`/projekt/${project.id}`} className="group block">
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-700" />
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-light text-foreground">{project.title}</h2>
                    <span className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2 block">
                      {project.category} · {project.location}
                    </span>
                  </div>
                  <span className="font-body text-xs text-muted-foreground/50 font-extralight hidden md:block">{project.year}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllProjects;
