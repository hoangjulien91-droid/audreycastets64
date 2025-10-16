import React from 'react';
import { Sparkles, Lock, User, Award } from 'lucide-react';

const values = [
  {
    icon: Lock,
    title: "Confidentialité Absolue",
    description: "Secret professionnel garanti. Vos échanges restent strictement confidentiels dans un cadre sécurisé et bienveillant.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: User,
    title: "Approche Personnalisée",
    description: "Chaque accompagnement est unique, adapté à votre personnalité, vos besoins et vos objectifs spécifiques.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Expertise Reconnue",
    description: "Formation continue, méthodes validées scientifiquement et expertise en TCC et psychologie du travail.",
    gradient: "from-pink-500 to-rose-500",
  }
];


const ValueCard = ({ icon: Icon, title, description, gradient }: {
  icon: React.ElementType,
  title: string,
  description: string,
  gradient: string,
}) => (
  <div className="group relative">
    <div className="relative bg-white rounded-[1.5rem] p-8 lg:p-12 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
      <div className="relative mx-auto mb-8 w-16 h-16">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full blur-xl opacity-60`}></div>
        <div className={`relative w-full h-full bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <h3 className="font-display text-2xl font-bold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const ValuesSection = () => {
  return (
    <section id="engagements" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mx-auto mb-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mes Valeurs & Engagements
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des principes forts qui guident chaque accompagnement pour votre réussite.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;