import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { allProjects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = allProjects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-light text-foreground mb-4">Projekt nenalezen</h1>
          <Link to="/" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back link */}
      <div className="section-padding pt-32 pb-8">
        <Link
          to="/#projekty"
          className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět na projekty
        </Link>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full aspect-[21/9] object-cover"
          />
        </div>
      </motion.div>

      {/* Project info */}
      <div className="section-padding py-16 md:py-24">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {/* Title & meta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 md:col-span-7"
          >
            <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
              {project.category}
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mt-3 leading-[0.9]">
              {project.title}
            </h1>
            <p className="font-body text-base md:text-lg text-foreground/70 font-light leading-relaxed mt-8 max-w-2xl">
              {project.description}
            </p>
          </motion.div>

          {/* Meta sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-12 md:col-span-4 md:col-start-9 mt-8 md:mt-0"
          >
            <div className="space-y-6">
              <div>
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-1">Lokalita</span>
                <span className="font-body text-sm text-foreground font-light">{project.location}</span>
              </div>
              <div>
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-1">Rok</span>
                <span className="font-body text-sm text-foreground font-light">{project.year}</span>
              </div>
              {project.area && (
                <div>
                  <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-1">Plocha</span>
                  <span className="font-body text-sm text-foreground font-light">{project.area}</span>
                </div>
              )}
              {project.client && (
                <div>
                  <span className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-1">Klient</span>
                  <span className="font-body text-sm text-foreground font-light">{project.client}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-12 gap-4 md:gap-8 mt-16 md:mt-24"
        >
          <div className="col-span-12 md:col-span-7">
            <div className="w-12 h-px bg-foreground/20 mb-8" />
            <div className="space-y-6">
              {project.details.map((detail, i) => (
                <p key={i} className="font-body text-sm md:text-base text-foreground/70 font-light leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
