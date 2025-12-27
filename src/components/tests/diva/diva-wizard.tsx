"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { DIVA_SECTIONS, DIVA_IMPACT_DOMAINS } from '@/lib/data/diva-questions';
import { DivaQuestion } from './diva-question';
import { DivaResults } from './diva-results';
import { DivaResult } from '@/types/diva';

// Flatten the criteria for linear navigation
const ALL_CRITERIA = DIVA_SECTIONS.flatMap(s => s.criteria);
const TOTAL_STEPS = ALL_CRITERIA.length + DIVA_IMPACT_DOMAINS.length + 2; // + Intro + UserInfo

type FormData = {
  answers: Record<string, {
    presentAdult: boolean;
    presentChild: boolean;
    examplesAdultChecked: number[];
    examplesChildChecked: number[];
  }>;
  impactAnswers: Record<string, {
    presentAdult: boolean;
    presentChild: boolean;
  }>;
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
      userInfo: { name: '', email: '', birthDate: '' }
    }
  });

  const answers = watch('answers');
  const impactAnswers = watch('impactAnswers');
  
  // Logic to determine what to show based on step
  const isCriterionStep = step >= 1 && step <= 18;
  const isImpactStep = step >= 19 && step <= 23;
  
  const currentCriterionIndex = step - 1;
  const currentCriterion = ALL_CRITERIA[currentCriterionIndex];
  
  const currentImpactIndex = step - 19;
  const currentImpact = DIVA_IMPACT_DOMAINS[currentImpactIndex];

  const progress = Math.min(100, (step / (TOTAL_STEPS - 2)) * 100);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Format Core Answers
      const formattedAnswers = Object.entries(data.answers).map(([key, value]) => ({
        criterionId: key,
        ...value
      }));

       // Format Impact Answers
      const formattedImpactAnswers = Object.entries(data.impactAnswers).map(([key, value]) => ({
        domainId: key,
        ...value
      }));

      const response = await fetch('/api/tests/diva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers: formattedAnswers,
          impactAnswers: formattedImpactAnswers,
          userData: data.userInfo
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de la soumission');

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
      <div className="max-w-2xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl font-display font-bold">
          Pré-diagnostic TDAH Adulte <span className="text-primary">(DIVA 2.0)</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Ce questionnaire structuré explore les symptômes du TDAH et leur retentissement sur votre vie.
          Il se base sur les critères officiels du DSM-IV.
        </p>
        
        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 text-left space-y-4">
             <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">i</span>
                Fonctionnement
            </h3>
            <p className="text-sm text-muted-foreground">
                Pour chaque symptôme, vous devrez évaluer <strong>deux périodes</strong> :
            </p>
            <div className="grid grid-cols-2 gap-4 text-center text-sm font-medium">
                <div className="p-3 rounded-xl bg-slate-100 text-slate-700">
                    Vie Adulte (Derniers 6 mois)
                </div>
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-700">
                    Enfance (5 à 12 ans)
                </div>
            </div>
            <p className="text-sm text-muted-foreground italic mt-2">
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
        className="max-w-md mx-auto"
      >
        <div className="card-premium p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Génération du rapport</h2>
            <p className="text-center text-muted-foreground mb-8">
                Pour recevoir votre synthèse détaillée et permettre une analyse clinique, veuillez renseigner vos informations.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Nom Complet</label>
                    <input 
                        {...register("userInfo.name", { required: true })}
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Votre nom"
                    />
                </div>
                 <div>
                    <label className="block text-sm font-medium mb-2">Date de Naissance</label>
                    <input 
                        {...register("userInfo.birthDate", { required: true })}
                        type="date"
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                        {...register("userInfo.email", { required: true, pattern: /^\S+@\S+$/i })}
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="vous@exemple.com"
                    />
                </div>

                <div className="pt-4 space-y-4">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-premium w-full flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? <Loader2 className="animate-spin" /> : "Obtenir mon analyse"}
                    </button>
                    <button 
                        type="button" 
                        onClick={prevStep}
                        className="w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
      <div className="max-w-4xl mx-auto w-full">
         <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 block">
                        {sectionTitle}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                        Critère {currentCriterion.id}
                    </span>
                </div>
                <span className="text-xs font-bold text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-secondary/30 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>

        <DivaQuestion 
            key={currentCriterion.id}
            criterion={currentCriterion}
            value={answers[currentCriterion.id] || { 
                presentAdult: false, 
                presentChild: false, 
                examplesAdultChecked: [], 
                examplesChildChecked: [] 
            }}
            onChange={(newValue) => {
                setValue(`answers.${currentCriterion.id}`, newValue);
            }}
        />

        <div className="flex justify-between mt-12">
            <button 
                onClick={prevStep}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Précédent
            </button>
            <button 
                onClick={nextStep}
                className="btn-premium px-6 py-2 flex items-center gap-2"
            >
                Suivant
                <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      </div>
    );
  }

  // Impact Steps (19-23)
  if (isImpactStep && currentImpact) {
      return (
      <div className="max-w-4xl mx-auto w-full">
         <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-1 block">
                        Impact sur le Fonctionnement
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                        Domaine : {currentImpact.label}
                    </span>
                </div>
                 <span className="text-xs font-bold text-muted-foreground">{Math.round(progress)}%</span>
            </div>
             <div className="h-1.5 bg-secondary/30 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>

        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
             <h2 className="text-2xl font-bold font-display">
                Ces symptômes ont-ils causé des problèmes dans le domaine : <br/>
                <span className="text-primary">{currentImpact.label}</span> ?
             </h2>

             <div className="grid md:grid-cols-2 gap-6 text-left">
                {/* Adult Examples */}
                <div className="bg-white border rounded-2xl p-6">
                    <h4 className="font-bold text-sm uppercase text-muted-foreground mb-4">Exemples Adulte</h4>
                    <ul className="space-y-2 text-sm text-foreground/80 list-disc list-inside">
                        {currentImpact.examplesAdult.map((ex, i) => <li key={i}>{ex}</li>)}
                    </ul>
                    <div className="mt-6 pt-4 border-t">
                         <label className="flex items-center gap-3 cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="w-5 h-5 rounded border-input text-primary focus:ring-primary/20"
                                checked={impactAnswers[currentImpact.id]?.presentAdult || false}
                                onChange={(e) => setValue(`impactAnswers.${currentImpact.id}.presentAdult`, e.target.checked)}
                            />
                            <span className="font-semibold">Oui, cela me pose problème aujourd'hui</span>
                        </label>
                    </div>
                </div>

                {/* Child Examples */}
                <div className="bg-white border rounded-2xl p-6">
                    <h4 className="font-bold text-sm uppercase text-muted-foreground mb-4">Exemples Enfance</h4>
                    <ul className="space-y-2 text-sm text-foreground/80 list-disc list-inside">
                        {currentImpact.examplesChild.map((ex, i) => <li key={i}>{ex}</li>)}
                    </ul>
                     <div className="mt-6 pt-4 border-t">
                         <label className="flex items-center gap-3 cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="w-5 h-5 rounded border-input text-primary focus:ring-primary/20"
                                checked={impactAnswers[currentImpact.id]?.presentChild || false}
                                onChange={(e) => setValue(`impactAnswers.${currentImpact.id}.presentChild`, e.target.checked)}
                            />
                            <span className="font-semibold">Oui, cela me posait problème enfant</span>
                        </label>
                    </div>
                </div>
             </div>
        </div>

        <div className="flex justify-between mt-12">
            <button 
                onClick={prevStep}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Précédent
            </button>
            <button 
                onClick={nextStep}
                className="btn-premium px-6 py-2 flex items-center gap-2"
            >
                Suivant
                <ArrowRight className="w-4 h-4" />
            </button>
        </div>
      </div>
    );
  }

  return null;
}
