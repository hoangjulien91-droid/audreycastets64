"use client";

import { motion } from "framer-motion";

export function AbstractServiceSchema() {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl border border-zinc-100 bg-zinc-50 md:aspect-[21/9]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

      {/* Central Mechanism Animation */}
      <div className="relative z-10">
        {/* Core */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="border-primary/30 flex h-40 w-40 items-center justify-center rounded-full border-2 border-dashed"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="border-primary/50 h-24 w-24 rounded-full border"
          />
        </motion.div>

        {/* Orbiting Elements */}
        {[0, 90, 180, 270].map((deg, i) => (
          <motion.div
            key={i}
            className="border-primary absolute top-1/2 left-1/2 h-4 w-4 rounded-full border-2 bg-white shadow-sm"
            style={{ marginLeft: -8, marginTop: -8 }}
            animate={{
              x: [
                Math.cos((deg * Math.PI) / 180) * 80,
                Math.cos(((deg + 360) * Math.PI) / 180) * 80,
              ],
              y: [
                Math.sin((deg * Math.PI) / 180) * 80,
                Math.sin(((deg + 360) * Math.PI) / 180) * 80,
              ],
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
          <div className="border-primary/10 rounded-full border bg-white/90 px-6 py-2 shadow-lg backdrop-blur-sm">
            <span className="gradient-text text-sm font-bold">Processus Structuré</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Blobs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 h-20 w-20 rounded-full bg-purple-200/20 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="bg-primary/10 absolute bottom-10 left-10 h-32 w-32 rounded-full blur-xl"
      />
    </div>
  );
}
