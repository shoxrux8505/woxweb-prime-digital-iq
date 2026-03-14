import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Check, Crown, Gem, Shield, Phone } from "lucide-react";
import { Button } from "./ui/button";
import SpotlightCard from "./core/spotlight-card/spotlight-card";

const plans = [
  {
    key: "standard",
    icon: Shield,
    price: 499,
    gradient: "from-primary to-secondary",
    popular: false,
  },
  {
    key: "gold",
    icon: Crown,
    price: 599,
    gradient: "from-yellow-500 to-amber-400",
    popular: true,
  },
  {
    key: "platinum",
    icon: Gem,
    price: 1200,
    gradient: "from-accent to-primary",
    popular: false,
  },
];

const Pricing = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t("pricing.title")}{" "}
            <span className="gradient-text">{t("pricing.titleHighlight")}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <SpotlightCard
              key={plan.key}
              spotlightColor={
                plan.popular
                  ? "rgba(245, 158, 11, 0.25)"
                  : "rgba(0, 229, 255, 0.2)"
              }
              delay={index * 0.15}
              isInView={isInView}
              className={
                plan.popular
                  ? "border border-yellow-500/30 relative"
                  : "relative"
              }
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-sm font-bold text-background">
                  {t("pricing.popular")}
                </div>
              )}

              <div className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${plan.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {t(`pricing.${plan.key}.title`)}
                </h3>

                <div className="mb-6">
                  <span className="text-5xl font-black gradient-text">
                    ${plan.price}
                  </span>
                </div>

                <ul className="text-left space-y-3 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {t(`pricing.${plan.key}.feature${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-background hover:opacity-90"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("pricing.cta")}
                </Button>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Free Consultation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary p-0.5">
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  {t("pricing.consultation.title")}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {t("pricing.consultation.description")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-black text-primary">
                {t("pricing.consultation.price")}
              </span>
              <Button
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("pricing.consultation.cta")}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
