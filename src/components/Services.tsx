import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Network, 
  Cog, 
  Bot, 
  Code, 
  BarChart3, 
  Palette, 
  GraduationCap 
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Digital Ecosystem Development",
    description: "Full platforms connecting multiple systems into unified intelligent environments.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Cog,
    title: "Business Process Automation",
    description: "Workflow optimization and data automation to streamline operations.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Bot,
    title: "AI Integration & Chatbots",
    description: "Custom LLM solutions, voice AI, and intelligent automation tools.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Code,
    title: "Web & App Development",
    description: "Modern UI/UX with cutting-edge frontend and backend systems.",
    gradient: "from-primary to-accent",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Systems",
    description: "Advanced dashboards, visualization, and predictive analytics.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Palette,
    title: "UI/UX & Creative Design",
    description: "Branding, motion design, and comprehensive digital identity creation.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: GraduationCap,
    title: "WoxWeb Prime Academy",
    description: "Educational platform teaching Web Dev, Python, UI/UX, and AI to youth.",
    gradient: "from-primary to-secondary",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:glow-primary transition-all duration-500 group cursor-pointer"
            >
              <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
