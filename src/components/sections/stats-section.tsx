"use client";

import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
  gradient: string;
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    value: "+5",
    label: "Années d'expérience",
    gradient: "from-primary to-primary-soft",
  },
  {
    icon: Users,
    value: "200+",
    label: "Personnes accompagnées",
    gradient: "from-accent-teal to-accent-teal-light",
  },
  {
    icon: Award,
    value: "95%",
    label: "Satisfaction client",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: Clock,
    value: "24h",
    label: "Délai de réponse",
    gradient: "from-primary-soft to-primary-light",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-warm-beige relative overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent-teal/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
          >
            Chiffres clés
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Une expertise <span className="gradient-text">reconnue</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="relative bg-white rounded-3xl p-6 lg:p-8 border border-primary/10 shadow-lg text-center"
                whileHover={{ 
                  y: -8,
                  shadow: "0 20px 40px rgba(139, 122, 152, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative mx-auto mb-4 w-14 h-14"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-lg opacity-60`}></div>
                  <div className={`relative w-full h-full bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>

                <motion.div 
                  className={`text-4xl lg:text-5xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: index * 0.1 + 0.2
                  }}
                >
                  <span>{stat.value}</span>
                </motion.div>

                <div className="text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;