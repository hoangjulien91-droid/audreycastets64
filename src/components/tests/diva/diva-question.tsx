"use client";

import { DivaCriterion } from "@/types/diva";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

interface DivaQuestionProps {
  criterion: DivaCriterion;
  // External state control
  value: {
    presentAdult: boolean;
    presentChild: boolean;
    examplesAdultChecked: number[];
    examplesChildChecked: number[];
  };
  onChange: (newValue: { 
    presentAdult: boolean;
    presentChild: boolean;
    examplesAdultChecked: number[];
    examplesChildChecked: number[];
  }) => void;
}

export function DivaQuestion({ criterion, value, onChange }: DivaQuestionProps) {
  
  const toggleExampleAdult = (index: number) => {
    const newChecked = value.examplesAdultChecked.includes(index)
      ? value.examplesAdultChecked.filter(i => i !== index)
      : [...value.examplesAdultChecked, index];
    onChange({ ...value, examplesAdultChecked: newChecked });
  };

  const toggleExampleChild = (index: number) => {
    const newChecked = value.examplesChildChecked.includes(index)
      ? value.examplesChildChecked.filter(i => i !== index)
      : [...value.examplesChildChecked, index];
    onChange({ ...value, examplesChildChecked: newChecked });
  };

  const togglePresentAdult = () => onChange({ ...value, presentAdult: !value.presentAdult });
  const togglePresentChild = () => onChange({ ...value, presentChild: !value.presentChild });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Question */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-display leading-tight">
          <span className="text-primary mr-2">{criterion.label}.</span>
          {criterion.description}
        </h2>
      </div>

      {/* Double Column Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* ADULTE */}
        <div className={`
            p-6 rounded-2xl border-2 transition-all duration-300 relative
            ${value.presentAdult ? 'border-primary bg-primary/5' : 'border-border bg-white'}
        `}>
             <div className="absolute -top-3 left-6 px-3 bg-background text-sm font-bold text-primary uppercase tracking-wider">
                Vie Adulte (Actuel)
             </div>

             <div className="space-y-4 mt-2">
                <p className="text-sm text-muted-foreground font-medium mb-3">
                    Cochez les exemples qui vous correspondent :
                </p>
                <div className="space-y-2">
                    {criterion.examplesAdult.map((ex, idx) => (
                        <button
                            key={idx}
                            onClick={() => toggleExampleAdult(idx)}
                            className={`w-full text-left p-3 rounded-xl text-sm transition-all flex items-start gap-3
                                ${value.examplesAdultChecked.includes(idx) 
                                    ? 'bg-white shadow-sm ring-1 ring-primary/20 text-foreground' 
                                    : 'hover:bg-accent/50 text-muted-foreground'
                                }
                            `}
                        >
                            <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors
                                ${value.examplesAdultChecked.includes(idx) ? 'bg-primary border-primary' : 'border-input'}
                            `}>
                                {value.examplesAdultChecked.includes(idx) && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span>{ex}</span>
                        </button>
                    ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                    <label className="flex items-center gap-4 cursor-pointer group">
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                            ${value.presentAdult ? 'bg-primary border-primary' : 'border-input group-hover:border-primary/50'}
                        `}>
                            {value.presentAdult && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={value.presentAdult} 
                            onChange={togglePresentAdult}
                        />
                        <span className={`font-semibold ${value.presentAdult ? 'text-primary' : 'text-foreground'}`}>
                            Le symptôme est présent
                        </span>
                    </label>
                </div>
             </div>
        </div>

        {/* ENFANT */}
        <div className={`
            p-6 rounded-2xl border-2 transition-all duration-300 relative
            ${value.presentChild ? 'border-primary bg-primary/5' : 'border-border bg-white'}
        `}>
             <div className="absolute -top-3 left-6 px-3 bg-background text-sm font-bold text-primary uppercase tracking-wider">
                Enfance (5-12 ans)
             </div>

             <div className="space-y-4 mt-2">
                <p className="text-sm text-muted-foreground font-medium mb-3">
                    Souvenirs d'enfance correspondants :
                </p>
                <div className="space-y-2">
                    {criterion.examplesChild.map((ex, idx) => (
                        <button
                            key={idx}
                            onClick={() => toggleExampleChild(idx)}
                            className={`w-full text-left p-3 rounded-xl text-sm transition-all flex items-start gap-3
                                ${value.examplesChildChecked.includes(idx) 
                                    ? 'bg-white shadow-sm ring-1 ring-primary/20 text-foreground' 
                                    : 'hover:bg-accent/50 text-muted-foreground'
                                }
                            `}
                        >
                            <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors
                                ${value.examplesChildChecked.includes(idx) ? 'bg-primary border-primary' : 'border-input'}
                            `}>
                                {value.examplesChildChecked.includes(idx) && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <span>{ex}</span>
                        </button>
                    ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                    <label className="flex items-center gap-4 cursor-pointer group">
                         <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                            ${value.presentChild ? 'bg-primary border-primary' : 'border-input group-hover:border-primary/50'}
                        `}>
                            {value.presentChild && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={value.presentChild} 
                            onChange={togglePresentChild}
                        />
                        <span className={`font-semibold ${value.presentChild ? 'text-primary' : 'text-foreground'}`}>
                            Le symptôme était présent
                        </span>
                    </label>
                </div>
             </div>
        </div>

      </div>
        
      {/* Helper text */}
      <div className="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
        <Info className="w-4 h-4" />
        Pour valider un critère, le symptôme doit être fréquent et gênant.
      </div>

    </div>
  );
}
