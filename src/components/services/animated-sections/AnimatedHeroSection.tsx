"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, Users, Target, Shield } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const glowPulse = {
  initial: { opacity: 0.5, scale: 0.8 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [0.8, 1.1, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity
    }
  }
};

export function AnimatedHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div ref={containerRef} style={{ opacity }}>
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div 
          style={{ y: y1 }}
          variants={glowPulse}
          initial="initial"
          animate="animate"
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          variants={glowPulse}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent-violet/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-bg-soft rounded-full border border-primary/20 shadow-sm mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-sm font-medium text-primary">
            Mes Services
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Des accompagnements <motion.span 
            className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent-violet to-primary"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            personnalisés
          </motion.span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
          Des accompagnements personnalisés pour particuliers et professionnels, alliant expertise clinique et approche bienveillante pour des résultats durables.
        </motion.p>

        <motion.div variants={staggerContainer} className="flex flex-wrap gap-3 justify-center">
          {[
            { icon: <Heart className="w-4 h-4" />, label: "TCC & EFT" },
            { icon: <Users className="w-4 h-4" />, label: "Psychologie du Travail" },
            { icon: <Target className="w-4 h-4" />, label: "Accompagnement RH" },
            { icon: <Shield className="w-4 h-4" />, label: "Confidentiel" }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(165, 148, 179, 0.3)" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-border-soft/50 shadow-sm"
            >
              <span className="text-primary">{item.icon}</span>
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
