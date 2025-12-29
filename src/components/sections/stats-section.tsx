"use client";

import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Clock } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  bgColor: string;
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    value: 5,
    suffix: "+",
    label: "Années d'expérience",
    bgColor: "#9D6B8C",
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "Patients accompagnés",
    bgColor: "#8B7CB3",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Satisfaction client",
    bgColor: "#C27B9E",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "h",
    label: "Délai de réponse",
    bgColor: "#9B8AA3",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-spacing bg-warm-rose/30 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-primary top-0 left-1/4 h-[500px] w-[500px] opacity-20" />
        <div className="orb orb-violet right-1/4 bottom-0 h-[400px] w-[400px] opacity-15" />
      </div>

      <div className="relative z-10 container">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="badge-premium mb-5 inline-flex">
            <Award className="h-4 w-4" aria-hidden="true" />
            <span>Chiffres clés</span>
          </div>
          <h2 className="text-foreground">
            Une expertise <span className="text-primary">reconnue</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-premium relative overflow-hidden p-6 text-center lg:p-8">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5"
                  style={{ backgroundColor: stat.bgColor }}
                  aria-hidden="true"
                />

                <motion.div
                  className="relative mx-auto mb-4 h-14 w-14"
                  whileHover={shouldReduceMotion ? {} : { rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="relative flex h-full w-full items-center justify-center rounded-xl shadow-md"
                    style={{ backgroundColor: stat.bgColor }}
                  >
                    <stat.icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                </motion.div>

                <div className="text-foreground mb-2 text-4xl font-bold lg:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-muted-foreground text-sm font-medium lg:text-base">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
