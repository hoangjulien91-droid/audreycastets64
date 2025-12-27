"use client";

import { motion } from "framer-motion";

export function AbstractServiceSchema() {
  return (
    <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden relative bg-zinc-50 border border-zinc-100 flex items-center justify-center">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      
      {/* Central Mechanism Animation */}
      <div className="relative z-10">
        {/* Core */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-40 h-40 border-2 border-dashed border-primary/30 rounded-full flex items-center justify-center"
        >
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="w-24 h-24 border border-primary/50 rounded-full" 
           />
        </motion.div>

        {/* Orbiting Elements */}
        {[0, 90, 180, 270].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm"
            style={{ marginLeft: -8, marginTop: -8 }}
            animate={{
              x: [Math.cos(deg * Math.PI / 180) * 80, Math.cos((deg + 360) * Math.PI / 180) * 80],
              y: [Math.sin(deg * Math.PI / 180) * 80, Math.sin((deg + 360) * Math.PI / 180) * 80]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Connecting Lines (Conceptual) */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
            <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg border border-primary/10">
                <span className="text-sm font-bold gradient-text">Processus Structuré</span>
            </div>
        </motion.div>
      </div>

      {/* Floating Blobs */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-20 h-20 bg-purple-200/20 rounded-full blur-xl"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
      />
    </div>
  );
}
