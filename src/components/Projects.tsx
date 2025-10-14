import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink, Building2, Users2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: Building2,
      titleKey: "projects.project1.title",
      descriptionKey: "projects.project1.description",
      tags: ["AI", "Government", "Democracy"],
    },
    {
      icon: Users2,
      titleKey: "projects.project2.title",
      descriptionKey: "projects.project2.description",
      tags: ["Platform", "Communication", "Politics"],
    },
    {
      icon: Heart,
      titleKey: "projects.project3.title",
      descriptionKey: "projects.project3.description",
      tags: ["Healthcare", "AI", "Automation"],
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t("projects.title")} <span className="gradient-text">{t("projects.titleHighlight")}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 rounded-2xl hover:glow-accent transition-all duration-500 group"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                {t(project.titleKey)}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(project.descriptionKey)}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="group px-8 py-6 text-lg rounded-xl border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
          >
            {t("projects.viewAll")}
            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
