import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

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
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    value: "200+",
    label: "Personnes accompagnées",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    value: "95%",
    label: "Satisfaction client",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Clock,
    value: "24h",
    label: "Délai de réponse",
    gradient: "from-pink-500 to-rose-500",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Chiffres clés
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Une expertise <span className="text-primary">reconnue</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-3xl p-6 lg:p-8 border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500 text-center hover:-translate-y-2">
                <div className="relative mx-auto mb-4 w-14 h-14">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                  <div className={`relative w-full h-full bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  <span>{stat.value}</span>
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;