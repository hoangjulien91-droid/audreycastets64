import React from 'react';

const PsychologySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            La Psychologie du Travail
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-4xl mx-auto leading-relaxed">
            Pour toutes les personnes qui s'interrogent sur leur travail, leur recherche d'emploi ou leur avenir professionnel, quand une situation de malaise voire de souffrance apparaît.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1: Pour qui ? */}
          <div className="h-full flex flex-col rounded-2xl bg-card text-card-foreground p-10 text-center shadow-[0_4px_16px_rgba(217,111,143,0.08)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(217,111,143,0.12)] hover:-translate-y-1">
            <div className="w-20 h-20 bg-[#E8E5E3] rounded-2xl flex items-center justify-center mx-auto mb-6 shrink-0">
              <span className="text-4xl" role="img" aria-label="Target Icon">🎯</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Pour qui ?
            </h3>
            <div className="text-muted-foreground font-body leading-relaxed text-left">
              <p className="mb-4">
                L'accompagnement a pour but d'exprimer ce qui ne va pas, de prendre du recul, et d'identifier des leviers avec des exercices pratiques et des échanges constructifs.
              </p>
              <p>
                L'objectif est de vous donner des clefs pour appréhender les situations de crise, de tension ou de conflits.
              </p>
            </div>
          </div>

          {/* Card 2: Pourquoi consulter ? */}
          <div className="h-full flex flex-col rounded-2xl bg-card text-card-foreground p-10 text-center shadow-[0_4px_16px_rgba(217,111,143,0.08)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(217,111,143,0.12)] hover:-translate-y-1">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-[#E895AE] rounded-2xl flex items-center justify-center mx-auto mb-6 shrink-0">
              <span className="text-4xl" role="img" aria-label="Thought Bubble Icon">💭</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Pourquoi consulter ?
            </h3>
            <div className="text-muted-foreground font-body leading-relaxed text-left">
              <p className="mb-4">
                Il est parfois difficile de comprendre certaines situations qui peuvent provoquer ennui, perte de sens, conflits avec les collègues ou la hiérarchie, harcèlement, agressivité, voire l'isolement professionnel.
              </p>
              <p>
                Les entretiens interrogent le rapport à son travail et questionnent l'organisation du travail.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:max-w-4xl lg:mx-auto">
          {/* Card 3: Éthique et Déontologie */}
          <div className="rounded-2xl bg-card text-card-foreground p-10 text-center shadow-[0_4px_16px_rgba(217,111,143,0.08)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(217,111,143,0.12)] hover:-translate-y-1">
            <div className="w-20 h-20 bg-[#E8E5E3] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl" role="img" aria-label="Shield Icon">🛡️</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Éthique et Déontologie
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
              Dans ce cadre, le psychologue du travail veille à préserver la neutralité, confidentialité des échanges et l'anonymat des personnes reçues, conformément au code de déontologie des psychologues. Les rendez-vous sont déterminés en fonction de vos disponibilités (le midi, le soir).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychologySection;