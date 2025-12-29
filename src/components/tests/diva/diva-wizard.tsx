"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { DIVA_SECTIONS, DIVA_IMPACT_DOMAINS } from "@/lib/data/diva-questions";
import { DivaQuestion } from "./diva-question";
import { DivaResults } from "./diva-results";
import { DivaResult } from "@/types/diva";

// Flatten the criteria for linear navigation
const ALL_CRITERIA = DIVA_SECTIONS.flatMap((s) => s.criteria);
const TOTAL_STEPS = ALL_CRITERIA.length + DIVA_IMPACT_DOMAINS.length + 2; // + Intro + UserInfo

type FormData = {
  answers: Record<
    string,
    {
      presentAdult: boolean;
      presentChild: boolean;
      examplesAdultChecked: number[];
      examplesChildChecked: number[];
    }
  >;
  impactAnswers: Record<
    string,
    {
      presentAdult: boolean;
      presentChild: boolean;
    }
  >;
  userInfo: {
    name: string;
    email: string;
    birthDate: string;
  };
};

export function DivaWizard() {
  const [step, setStep] = useState(0);
  // 0 = Intro
  // 1..18 = Criteria A (Inattention + Hyperactivity)
  // 19..23 = Impact (Critère C)
  // 24 = UserInfo
  // 25 = Results

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [results, setResults] = useState<DivaResult | null>(null);

  const { register, watch, setValue, handleSubmit } = useForm<FormData>({
    defaultValues: {
      answers: {},
      impactAnswers: {},
      userInfo: { name: "", email: "", birthDate: "" },
    },
  });

  const answers = watch("answers");
  const impactAnswers = watch("impactAnswers");

  // Logic to determine what to show based on step
  const isCriterionStep = step >= 1 && step <= 18;
  const isImpactStep = step >= 19 && step <= 23;

  const currentCriterionIndex = step - 1;
  const currentCriterion = ALL_CRITERIA[currentCriterionIndex];

  const currentImpactIndex = step - 19;
  const currentImpact = DIVA_IMPACT_DOMAINS[currentImpactIndex];

  const progress = Math.min(100, (step / (TOTAL_STEPS - 2)) * 100);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Format Core Answers
      const formattedAnswers = Object.entries(data.answers).map(([key, value]) => ({
        criterionId: key,
        ...value,
      }));

      // Format Impact Answers
      const formattedImpactAnswers = Object.entries(data.impactAnswers).map(([key, value]) => ({
        domainId: key,
        ...value,
      }));

      const response = await fetch("/api/tests/diva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers: formattedAnswers,
          impactAnswers: formattedImpactAnswers,
          userData: data.userInfo,
        }),
      });

      if (!response.ok) throw new Error("Erreur lors de la soumission");

      const resultData = await response.json();
      setResults(resultData.results);
      setStep(25); // Go to results
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors du calcul des résultats.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 0: Intro
  if (step === 0) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-2xl space-y-8 text-center duration-700">
        <h1 className="font-display text-4xl font-bold">
          Pré-diagnostic TDAH Adulte <span className="text-primary">(DIVA 2.0)</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Ce questionnaire structuré explore les symptômes du TDAH et leur retentissement sur votre
          vie. Il se base sur les critères officiels du DSM-IV.
        </p>

        <div className="border-border/50 space-y-4 rounded-2xl border bg-white/50 p-6 text-left backdrop-blur-sm">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <span className="bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-full text-xs">
              i
            </span>
            Fonctionnement
          </h3>
          <p className="text-muted-foreground text-sm">
            Pour chaque symptôme, vous devrez évaluer <strong>deux périodes</strong> :
          </p>
          <div className="grid grid-cols-2 gap-4 text-center text-sm font-medium">
            <div className="rounded-xl bg-slate-100 p-3 text-slate-700">
              Vie Adulte (Derniers 6 mois)
            </div>
            <div className="rounded-xl bg-indigo-50 p-3 text-indigo-700">Enfance (5 à 12 ans)</div>
          </div>
          <p className="text-muted-foreground mt-2 text-sm italic">
            Prévoyez environ 15-20 minutes pour compléter ce test sérieusement.
          </p>
        </div>

        <button onClick={nextStep} className="btn-premium px-8 py-4 text-lg">
          Commencer l'entretien
        </button>
      </div>
    );
  }

  // Step 25: Results
  if (step === 25 && results) {
    return <DivaResults results={results} />;
  }

  // Step 24: User Info
  if (step === 24) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mx-auto max-w-md"
      >
        <div className="card-premium p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">Génération du rapport</h2>
          <p className="text-muted-foreground mb-8 text-center">
            Pour recevoir votre synthèse détaillée et permettre une analyse clinique, veuillez
            renseigner vos informations.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">Nom Complet</label>
              <input
                {...register("userInfo.name", { required: true })}
                type="text"
                className="border-input bg-background focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-all outline-none focus:ring-2"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Date de Naissance</label>
              <input
                {...register("userInfo.birthDate", { required: true })}
                type="date"
                className="border-input bg-background focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-all outline-none focus:ring-2"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input
                {...register("userInfo.email", { required: true, pattern: /^\S+@\S+$/i })}
                type="email"
                className="border-input bg-background focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-all outline-none focus:ring-2"
                placeholder="vous@exemple.com"
              />
            </div>

            <div className="space-y-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium flex w-full items-center justify-center gap-2"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Obtenir mon analyse"}
              </button>
              <button
                type="button"
                onClick={prevStep}
                className="text-muted-foreground hover:text-foreground w-full py-2 text-sm transition-colors"
              >
                Retour
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    );
  }

  // Criteria Steps (1-18)
  if (isCriterionStep && currentCriterion) {
    // Determine section title
    const isHyperactivity = currentCriterion.id.startsWith("A2");
    const sectionTitle = isHyperactivity ? "Hyperactivité / Impulsivité" : "Déficit de l'Attention";

    return (
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8">
          <div className="mb-2 flex items-end justify-between">
            <div>
              <span className="text-primary mb-1 block text-xs font-bold tracking-wider uppercase">
                {sectionTitle}
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Critère {currentCriterion.id}
              </span>
            </div>
            <span className="text-muted-foreground text-xs font-bold">{Math.round(progress)}%</span>
          </div>
          <div className="bg-secondary/30 h-1.5 overflow-hidden rounded-full">
            <motion.div
              className="bg-primary h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <DivaQuestion
          key={currentCriterion.id}
          criterion={currentCriterion}
          value={
            answers[currentCriterion.id] || {
              presentAdult: false,
              presentChild: false,
              examplesAdultChecked: [],
              examplesChildChecked: [],
            }
          }
          onChange={(newValue) => {
            setValue(`answers.${currentCriterion.id}`, newValue);
          }}
        />

        <div className="mt-12 flex justify-between">
          <button
            onClick={prevStep}
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Précédent
          </button>
          <button onClick={nextStep} className="btn-premium flex items-center gap-2 px-6 py-2">
            Suivant
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  // Impact Steps (19-23)
  if (isImpactStep && currentImpact) {
    return (
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8">
          <div className="mb-2 flex items-end justify-between">
            <div>
              <span className="mb-1 block text-xs font-bold tracking-wider text-rose-500 uppercase">
                Impact sur le Fonctionnement
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                Domaine : {currentImpact.label}
              </span>
            </div>
            <span className="text-muted-foreground text-xs font-bold">{Math.round(progress)}%</span>
          </div>
          <div className="bg-secondary/30 h-1.5 overflow-hidden rounded-full">
            <motion.div
              className="bg-primary h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 space-y-8 text-center duration-500">
          <h2 className="font-display text-2xl font-bold">
            Ces symptômes ont-ils causé des problèmes dans le domaine : <br />
            <span className="text-primary">{currentImpact.label}</span> ?
          </h2>

          <div className="grid gap-6 text-left md:grid-cols-2">
            {/* Adult Examples */}
            <div className="rounded-2xl border bg-white p-6">
              <h4 className="text-muted-foreground mb-4 text-sm font-bold uppercase">
                Exemples Adulte
              </h4>
              <ul className="text-foreground/80 list-inside list-disc space-y-2 text-sm">
                {currentImpact.examplesAdult.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
              <div className="mt-6 border-t pt-4">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    className="border-input text-primary focus:ring-primary/20 h-5 w-5 rounded"
                    checked={impactAnswers[currentImpact.id]?.presentAdult || false}
                    onChange={(e) =>
                      setValue(`impactAnswers.${currentImpact.id}.presentAdult`, e.target.checked)
                    }
                  />
                  <span className="font-semibold">Oui, cela me pose problème aujourd'hui</span>
                </label>
              </div>
            </div>

            {/* Child Examples */}
            <div className="rounded-2xl border bg-white p-6">
              <h4 className="text-muted-foreground mb-4 text-sm font-bold uppercase">
                Exemples Enfance
              </h4>
              <ul className="text-foreground/80 list-inside list-disc space-y-2 text-sm">
                {currentImpact.examplesChild.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
              <div className="mt-6 border-t pt-4">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    className="border-input text-primary focus:ring-primary/20 h-5 w-5 rounded"
                    checked={impactAnswers[currentImpact.id]?.presentChild || false}
                    onChange={(e) =>
                      setValue(`impactAnswers.${currentImpact.id}.presentChild`, e.target.checked)
                    }
                  />
                  <span className="font-semibold">Oui, cela me posait problème enfant</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between">
          <button
            onClick={prevStep}
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Précédent
          </button>
          <button onClick={nextStep} className="btn-premium flex items-center gap-2 px-6 py-2">
            Suivant
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return null;
}
