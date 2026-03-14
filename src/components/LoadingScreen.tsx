import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 600);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="relative flex items-center justify-center">
            {/* Spinning ring */}
            <motion.div
              className="absolute w-40 h-40 rounded-full border-[3px] border-transparent border-t-primary border-r-primary/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
            {/* Second ring */}
            <motion.div
              className="absolute w-48 h-48 rounded-full border-[2px] border-transparent border-b-accent border-l-accent/50"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
            {/* Glow pulse */}
            <motion.div
              className="absolute w-36 h-36 rounded-full bg-primary/10 blur-xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Logo */}
            <motion.img
              src={logo}
              alt="WoxWeb Prime"
              className="w-24 h-24 object-contain relative z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
