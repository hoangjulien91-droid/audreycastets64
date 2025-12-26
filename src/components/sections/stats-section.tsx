"use client";

import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    value: 5,
    suffix: "+",
    label: "Années d'expérience",
    color: "bg-primary",
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "Patients accompagnés",
    color: "bg-violet",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Satisfaction client",
    color: "bg-rose",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "h",
    label: "Délai de réponse",
    color: "bg-mauve",
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
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-spacing bg-warm-rose/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="orb orb-primary w-[500px] h-[500px] top-0 left-1/4 opacity-20" />
        <div className="orb orb-violet w-[400px] h-[400px] bottom-0 right-1/4 opacity-15" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-premium mb-5 inline-flex">
            <Award className="w-4 h-4" aria-hidden="true" />
            <span>Chiffres clés</span>
          </div>
          <h2 className="text-foreground">
            Une expertise <span className="text-primary">reconnue</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-premium relative p-6 lg:p-8 text-center overflow-hidden">
                <div className={`absolute inset-0 ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} aria-hidden="true" />
                
                <motion.div 
                  className="relative mx-auto mb-4 w-14 h-14"
                  whileHover={shouldReduceMotion ? {} : { rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`relative w-full h-full ${stat.color} rounded-xl flex items-center justify-center shadow-md`}>
                    <stat.icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                </motion.div>

                <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-sm lg:text-base text-muted-foreground font-medium">
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
