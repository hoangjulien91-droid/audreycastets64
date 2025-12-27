"use client";

import { motion } from "framer-motion";
import { Link } from 'next-view-transitions';
import { Sparkles, ArrowRight } from "lucide-react";

export function AnimatedFinalCTA() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#FDFCFB] to-[#F9F7F4]/50" />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-br from-primary/5 via-violet-500/5 to-rose-400/5 rounded-full blur-3xl opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="card-premium p-10 md:p-14 relative overflow-hidden">
             {/* Gradient Border Glow */}
             <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-violet/10 to-rose/10 opacity-50 pointer-events-none" />
             
             <div className="relative z-10">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-linear-to-br from-[#F8F5F7] to-[#FFFFFF] shadow-sm border border-white flex items-center justify-center transform hover:scale-110 transition-transform duration-500"
                >
                  <Sparkles className="w-8 h-8 text-primary" />
                </motion.div>

                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Prêt(e) à démarrer <br className="hidden md:block" />
                  <span className="gradient-text">votre accompagnement ?</span>
                </h2>

                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Prenons contact pour échanger sur vos besoins et trouver ensemble la solution la plus adaptée à votre situation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-premium w-full sm:w-auto min-w-[200px]"
                    >
                      Prendre contact
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </Link>
                  
                  <Link href="/mon-approche" className="w-full sm:w-auto">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-secondary-premium w-full sm:w-auto min-w-[200px]"
                    >
                      Découvrir mon approche
                    </motion.div>
                  </Link>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
