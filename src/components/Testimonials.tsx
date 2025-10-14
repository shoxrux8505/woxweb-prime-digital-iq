import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "WoxWeb Prime transformed our entire digital infrastructure. Their AI integration capabilities are unmatched.",
    author: "Dr. Sarah Johnson",
    role: "Director of Digital Transformation",
    organization: "Government Innovation Hub",
  },
  {
    quote: "The automation systems they built saved us countless hours and dramatically improved our efficiency.",
    author: "Michael Chen",
    role: "CTO",
    organization: "TechCorp Solutions",
  },
  {
    quote: "Their academy program is exceptional. My students are now building real AI applications.",
    author: "Prof. Ahmed Hassan",
    role: "Computer Science Department Head",
    organization: "National University",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((curr) => (curr - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            What our partners say about us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-12 md:p-16 rounded-3xl glow-accent">
            <Quote className="w-12 h-12 text-primary mb-8 mx-auto" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="space-y-2">
                <p className="text-lg font-bold gradient-text">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].organization}
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-primary' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
