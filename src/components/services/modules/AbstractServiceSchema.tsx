"use client";


export function AbstractServiceSchema() {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl border border-zinc-100 bg-zinc-50 md:aspect-[21/9]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

      {/* Central Mechanism Animation */}
      <div className="relative z-10">
        {/* Core */}
        <div className="border-primary/30 flex h-40 w-40 animate-[spin_20s_linear_infinite] items-center justify-center rounded-full border-2 border-dashed">
          <div className="border-primary/50 h-24 w-24 animate-[spin_15s_linear_infinite_reverse] rounded-full border" />
        </div>

        {/* Orbiting Elements - Using rotating container */}
        <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
           {[0, 90, 180, 270].map((deg, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 h-0 w-0"
              style={{ transform: `rotate(${deg}deg)` }}
            >
               <div
                  className="border-primary absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-white shadow-sm"
                  style={{ transform: `translate(80px, 0) rotate(-${deg}deg)` }}
               >
                 <div className="h-full w-full animate-[spin_20s_linear_infinite_reverse]" />
               </div>
            </div>
           ))}
        </div>


        {/* Connecting Lines (Conceptual) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center animate-in fade-in delay-1000">
          <div className="border-primary/10 rounded-full border bg-white/90 px-6 py-2 shadow-lg backdrop-blur-sm">
            <span className="gradient-text text-sm font-bold">Processus Structuré</span>
          </div>
        </div>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-10 right-10 h-20 w-20 animate-[bounce_4s_infinite] rounded-full bg-purple-200/20 blur-xl" />
      <div className="bg-primary/10 absolute bottom-10 left-10 h-32 w-32 animate-[bounce_5s_infinite] rounded-full blur-xl" />
    </div>
  );
}
