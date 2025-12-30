"use client";

import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  bgColorVar: string;
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    value: 5,
    suffix: "+",
    label: "Années d'expérience",
    bgColorVar: "var(--color-primary)",
  },
  {
    icon: Users,
    value: 200,
    suffix: "+",
    label: "Patients accompagnés",
    bgColorVar: "var(--color-violet)",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Satisfaction client",
    bgColorVar: "var(--color-rose)",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "h",
    label: "Délai de réponse",
    bgColorVar: "var(--color-mauve)",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="section-spacing bg-warm-rose/30 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-primary top-0 left-1/4 h-[500px] w-[500px] opacity-20" />
        <div className="orb orb-violet right-1/4 bottom-0 h-[400px] w-[400px] opacity-15" />
      </div>

      <div className="relative z-10 container">
        <SectionHeader
          align="center"
          badge="Chiffres clés"
          title={
            <>
              Une expertise <span className="text-primary">reconnue</span>
            </>
          }
          className="mb-14"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group animate-in fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-premium relative overflow-hidden p-6 text-center lg:p-8">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5"
                  style={{ backgroundColor: stat.bgColorVar }}
                  aria-hidden="true"
                />

                <div className="relative mx-auto mb-4 h-14 w-14 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div
                    className="relative flex h-full w-full items-center justify-center rounded-xl shadow-md"
                    style={{ backgroundColor: stat.bgColorVar }}
                  >
                    <stat.icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                </div>

                <div className="text-foreground mb-2 text-4xl font-bold lg:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-muted-foreground text-sm font-medium lg:text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
