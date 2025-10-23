import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Network,
  Cog,
  Bot,
  Code,
  BarChart3,
  Palette,
  GraduationCap,
} from "lucide-react";
import SpotlightCard from "./core/spotlight-card/spotlight-card";

const Services = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Network,
      titleKey: "services.service1.title",
      descriptionKey: "services.service1.description",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Cog,
      titleKey: "services.service2.title",
      descriptionKey: "services.service2.description",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Bot,
      titleKey: "services.service3.title",
      descriptionKey: "services.service3.description",
      gradient: "from-accent to-primary",
    },
    {
      icon: Code,
      titleKey: "services.service4.title",
      descriptionKey: "services.service4.description",
      gradient: "from-primary to-accent",
    },
    {
      icon: BarChart3,
      titleKey: "services.service5.title",
      descriptionKey: "services.service5.description",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Palette,
      titleKey: "services.service6.title",
      descriptionKey: "services.service6.description",
      gradient: "from-accent to-secondary",
    },
    {
      icon: GraduationCap,
      titleKey: "services.service7.title",
      descriptionKey: "services.service7.description",
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t("services.title")}{" "}
            <span className="gradient-text">
              {t("services.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <SpotlightCard
              spotlightColor="rgba(0, 229, 255, 0.2)"
              delay={index * 0.1}
              isInView={isInView}
            >
              <div
                className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                {t(service.titleKey)}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {t(service.descriptionKey)}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
