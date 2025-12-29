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
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const glowPulse = {
  initial: { opacity: 0.5, scale: 0.8 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [0.8, 1.1, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

export function AnimatedHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div ref={containerRef} style={{ opacity }}>
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <motion.div
          style={{ y: y1 }}
          variants={glowPulse}
          initial="initial"
          animate="animate"
          className="bg-primary/20 absolute top-20 right-20 h-[500px] w-[500px] rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          variants={glowPulse}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="bg-accent-violet/20 absolute bottom-20 left-20 h-96 w-96 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto max-w-5xl text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-bg-soft border-primary/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm"
        >
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}>
            <Sparkles className="text-primary h-4 w-4" />
          </motion.div>
          <span className="text-primary text-sm font-medium">Mes Services</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-display text-foreground mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
        >
          Des accompagnements{" "}
          <motion.span
            className="from-primary via-accent-violet to-primary bg-linear-to-r bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            personnalisés
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl"
        >
          Des accompagnements personnalisés pour particuliers et professionnels, alliant expertise
          clinique et approche bienveillante pour des résultats durables.
        </motion.p>

        <motion.div variants={staggerContainer} className="flex flex-wrap justify-center gap-3">
          {[
            { icon: <Heart className="h-4 w-4" />, label: "TCC & EFT" },
            { icon: <Users className="h-4 w-4" />, label: "Psychologie du Travail" },
            { icon: <Target className="h-4 w-4" />, label: "Accompagnement RH" },
            { icon: <Shield className="h-4 w-4" />, label: "Confidentiel" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(165, 148, 179, 0.3)" }}
              className="border-border-soft/50 inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm"
            >
              <span className="text-primary">{item.icon}</span>
              <span className="text-foreground text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
