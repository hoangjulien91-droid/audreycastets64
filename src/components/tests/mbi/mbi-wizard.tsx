"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRight, ArrowLeft, Loader2, Check } from 'lucide-react';
import { MBI_QUESTIONS, MBI_SCALE } from '@/lib/data/mbi-questions';
import { MBIResults } from './mbi-results';
import { MBIResult } from '@/types/mbi';

type FormData = {
  answers: Record<number, number>; // questionId -> value
  userInfo: {
    name: string;
    email: string;
  };
};

export function MBIWizard() {
  const [step, setStep] = useState(0); // 0 = Intro, 1..22 = Questions, 23 = UserInfo, 24 = Results
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [results, setResults] = useState<MBIResult | null>(null);
  
  const { register, watch, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      answers: {},
      userInfo: { name: '', email: '' }
    }
  });

  const answers = watch('answers');
  const currentQuestionIndex = step - 1;
  const currentQuestion = MBI_QUESTIONS[currentQuestionIndex];
  const progress = Math.min(100, Math.max(0, (currentQuestionIndex / MBI_QUESTIONS.length) * 100));

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Format answers for API
      const formattedAnswers = Object.entries(data.answers).map(([key, value]) => ({
        questionId: parseInt(key),
        value: value
      }));

      const response = await fetch('/api/tests/mbi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers: formattedAnswers,
          userData: data.userInfo
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de la soumission');

      const resultData = await response.json();
      setResults(resultData.results);
      setStep(24); // Go to results
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
          Test d'Inventaire de Burnout <span className="text-primary">(MBI)</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Ce questionnaire de reference (Maslach Burnout Inventory) permet d'évaluer les trois dimensions de l'épuisement professionnel : 
          <br className="hidden md:block" />
          l'épuisement émotionnel, la dépersonnalisation et l'accomplissement personnel.
        </p>
        
        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 text-left space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">i</span>
                Instructions
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Il y a 22 questions.</li>
                <li>• Pour chaque affirmation, indiquez la fréquence de votre ressenti.</li>
                <li>• Soyez le plus honnête possible, il n'y a pas de bonne ou mauvaise réponse.</li>
                <li>• Vos résultats sont strictement confidentiels.</li>
            </ul>
        </div>

        <button onClick={nextStep} className="btn-premium px-8 py-4 text-lg">
          Commencer le test
        </button>
      </div>
    );
  }

  // Step 24: Results
  if (step === 24 && results) {
    return <MBIResults results={results} />;
  }

  // Step 23: User Info
  if (step === 23) {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-md mx-auto"
      >
        <div className="card-premium p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Dernière étape</h2>
            <p className="text-center text-muted-foreground mb-8">
                Entrez vos coordonnées pour recevoir votre bilan détaillé par email et accéder à vos résultats.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Prénom / Nom</label>
                    <input 
                        {...register("userInfo.name", { required: true })}
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Votre nom"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Email professionnel</label>
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
                        {isSubmitting ? <Loader2 className="animate-spin" /> : "Voir mes résultats"}
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

  // Steps 1..22: Questions
  if (currentQuestion) {
    const isAnswered = answers && answers[currentQuestion.id] !== undefined;

    return (
      <div className="max-w-3xl mx-auto w-full">
        {/* Progress Bar */}
        <div className="mb-12">
            <div className="flex justify-between text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">
                <span>Question {step} / {MBI_QUESTIONS.length}</span>
                <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>

        <AnimatePresence mode="wait">
            <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-center leading-snug min-h-[100px] flex items-center justify-center">
                    "{currentQuestion.text}"
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {MBI_SCALE.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => {
                                setValue(`answers.${currentQuestion.id}` as any, option.value);
                                // Auto advance after short delay for better UX
                                setTimeout(() => {
                                    if (step < MBI_QUESTIONS.length) {
                                        nextStep();
                                    } else {
                                        setStep(23); // Go to User Info
                                    }
                                }, 250);
                            }}
                            className={`
                                relative p-4 rounded-xl border text-left transition-all duration-200 group
                                ${answers[currentQuestion.id] === option.value 
                                    ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' 
                                    : 'border-border bg-white hover:border-primary/50 hover:shadow-sm'
                                }
                            `}
                        >
                            <div className="flex items-center justify-between">
                                <span className={`font-medium ${answers[currentQuestion.id] === option.value ? 'text-primary' : 'text-foreground'}`}>
                                    {option.label}
                                </span>
                                {answers[currentQuestion.id] === option.value && (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                        <Check className="w-4 h-4 text-primary" />
                                    </motion.div>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-12">
            <button 
                onClick={prevStep}
                className={`flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors ${step === 1 ? 'invisible' : ''}`}
            >
                <ArrowLeft className="w-4 h-4" />
                Précédent
            </button>
            <div className="text-sm text-muted-foreground italic">
                Choisissez la réponse la plus spontanée
            </div>
        </div>
      </div>
    );
  }

  return null;
}
