import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

interface Step {
  title: string;
  description: string;
}

interface MethodologyStepsProps {
  steps: Step[];
}

export function MethodologySteps({ steps }: MethodologyStepsProps) {
  return (
    <div className="py-12">
      <SectionHeader
        as="h3"
        size="subsection"
        align="center"
        title={
          <>
            Notre méthodologie <span className="text-primary">étape par étape</span>
          </>
        }
        className="mb-12"
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Ligne verticale de fond */}
        <div className="from-primary/20 to-primary/5 absolute top-4 bottom-4 left-[27px] w-1 rounded-full bg-linear-to-b via-purple-200" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex gap-6 animate-in slide-in-left"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Point de la timeline */}
              <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-4 border-primary/10 bg-card shadow-sm transition-all hover:scale-110">
                <span className="font-display text-primary text-xl font-bold">{index + 1}</span>
              </div>

              {/* Contenu */}
              <div className="card-premium flex-1 rounded-2xl p-6 pt-2 transition-transform duration-300 hover:translate-x-2 backdrop-blur-sm">
                <h4 className="text-foreground mb-2 flex items-center gap-2 text-lg font-bold">
                  {step.title}
                  {index === steps.length - 1 && (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  )}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
