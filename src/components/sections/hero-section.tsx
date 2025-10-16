import Image from "next/image";
import { Sparkles, Heart, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50/50 via-background to-pink-50/30 py-16 sm:py-20 md:py-28 lg:py-36">
      {/* Background decorative elements - Plus subtils */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md rounded-full border border-primary/20 shadow-sm mb-6 sm:mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Bienvenue dans votre espace de bien-être
              </span>
            </div>

            {/* Main Heading - Tailles responsives */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 sm:mb-4 leading-[1.1] tracking-tight">
              Audrey <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-600 to-purple-600">Castets</span>
            </h1>

            {/* Subtitle with Heart */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-5 sm:mb-8">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
              <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold font-display">
                Psychologue du Travail
              </p>
            </div>

            {/* Description - Meilleure lisibilité */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 font-body">
              Accompagnement personnalisé en <strong className="text-gray-800 font-semibold">TCC et EFT</strong> pour les particuliers. Expertise en <strong className="text-gray-800 font-semibold">psychologie du travail</strong> pour les professionnels.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-primary to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Prendre RDV
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-primary bg-white rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Découvrir mes services
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Glow effect background - Plus subtil */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/15 via-pink-400/15 to-purple-500/15 rounded-full blur-3xl group-hover:opacity-100 opacity-70 transition-opacity duration-700"></div>
              
              {/* Main image container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full"></div>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c38f5070-6b82-4e11-be55-a586c48aeec5-psychologue-portfolio-nextjs-supaba-vercel-app/assets/images/next-885887-next-992762-audrey-castets-BNy4GS-r-1.jpg"
                  alt="Audrey Castets, Psychologue du Travail"
                  width={500}
                  height={500}
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-cover rounded-full shadow-2xl ring-8 ring-white/80 group-hover:ring-primary/20 transition-all duration-500 transform group-hover:scale-[1.02]"
                  priority
                />
              </div>

              {/* Experience Badge - Responsive */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-5 backdrop-blur-sm border border-primary/10 transform group-hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary via-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">+5</p>
                    <p className="text-[10px] sm:text-xs text-gray-600 font-medium whitespace-nowrap">
                      Années d&apos;expérience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}