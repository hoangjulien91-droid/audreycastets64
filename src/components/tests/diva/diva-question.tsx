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
            ${value.presentAdult ? 'border-primary bg-primary/5 shadow-premium' : 'border-border/50 bg-white/50 hover:border-primary/20'}
        `}>
             <div className="absolute -top-3 left-6 px-3 bg-background text-sm font-bold text-primary uppercase tracking-wider shadow-sm border border-primary/10 rounded-full">
                Vie Adulte (Actuel)
             </div>

             <div className="space-y-4 mt-4">
                <p className="text-sm text-muted-foreground font-medium mb-3 pl-1">
                    Cochez les exemples qui vous correspondent :
                </p>
                <div className="space-y-3">
                    {criterion.examplesAdult.map((ex, idx) => (
                        <button
                            key={idx}
                            onClick={() => toggleExampleAdult(idx)}
                            className={`w-full text-left p-4 rounded-xl text-base transition-all flex items-start gap-4 group
                                ${value.examplesAdultChecked.includes(idx) 
                                    ? 'bg-white shadow-md ring-1 ring-primary/20 text-foreground translate-x-1' 
                                    : 'hover:bg-white hover:shadow-sm text-muted-foreground hover:text-foreground'
                                }
                            `}
                        >
                            <div className={`mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all duration-300
                                ${value.examplesAdultChecked.includes(idx) 
                                    ? 'bg-primary border-primary scale-110 shadow-sm' 
                                    : 'border-input group-hover:border-primary/50'
                                }
                            `}>
                                {value.examplesAdultChecked.includes(idx) && <Check className="w-4 h-4 text-white font-bold" strokeWidth={3} />}
                            </div>
                            <span className="leading-snug">{ex}</span>
                        </button>
                    ))}
                </div>

                <div className="pt-6 mt-2 border-t border-border/50">
                    <label className="flex items-center gap-4 cursor-pointer group p-2 rounded-xl hover:bg-white/50 transition-colors">
                        <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-300 shadow-sm
                            ${value.presentAdult 
                                ? 'bg-primary border-primary scale-105 shadow-primary/20' 
                                : 'border-input bg-white group-hover:border-primary'
                            }
                        `}>
                            {value.presentAdult && <Check className="w-5 h-5 text-white" strokeWidth={3} />}
                        </div>
                        <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={value.presentAdult} 
                            onChange={togglePresentAdult}
                        />
                        <div className="flex flex-col">
                            <span className={`font-bold text-lg transition-colors ${value.presentAdult ? 'text-primary' : 'text-foreground'}`}>
                                Le symptôme est présent
                            </span>
                            <span className="text-xs text-muted-foreground">Cochez si le symptôme est fréquent</span>
                        </div>
                    </label>
                </div>
             </div>
        </div>

        {/* ENFANT */}
        <div className={`
            p-6 rounded-2xl border-2 transition-all duration-300 relative
            ${value.presentChild ? 'border-primary bg-primary/5 shadow-premium' : 'border-border/50 bg-white/50 hover:border-primary/20'}
        `}>
             <div className="absolute -top-3 left-6 px-3 bg-background text-sm font-bold text-primary uppercase tracking-wider shadow-sm border border-primary/10 rounded-full">
                Enfance (5-12 ans)
             </div>

             <div className="space-y-4 mt-4">
                <p className="text-sm text-muted-foreground font-medium mb-3 pl-1">
                    Souvenirs d'enfance correspondants :
                </p>
                <div className="space-y-3">
                    {criterion.examplesChild.map((ex, idx) => (
                        <button
                            key={idx}
                            onClick={() => toggleExampleChild(idx)}
                            className={`w-full text-left p-4 rounded-xl text-base transition-all flex items-start gap-4 group
                                ${value.examplesChildChecked.includes(idx) 
                                    ? 'bg-white shadow-md ring-1 ring-primary/20 text-foreground translate-x-1' 
                                    : 'hover:bg-white hover:shadow-sm text-muted-foreground hover:text-foreground'
                                }
                            `}
                        >
                            <div className={`mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all duration-300
                                ${value.examplesChildChecked.includes(idx) 
                                    ? 'bg-primary border-primary scale-110 shadow-sm' 
                                    : 'border-input group-hover:border-primary/50'
                                }
                            `}>
                                {value.examplesChildChecked.includes(idx) && <Check className="w-4 h-4 text-white font-bold" strokeWidth={3} />}
                            </div>
                            <span className="leading-snug">{ex}</span>
                        </button>
                    ))}
                </div>

                <div className="pt-6 mt-2 border-t border-border/50">
                    <label className="flex items-center gap-4 cursor-pointer group p-2 rounded-xl hover:bg-white/50 transition-colors">
                         <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-300 shadow-sm
                            ${value.presentChild 
                                ? 'bg-primary border-primary scale-105 shadow-primary/20' 
                                : 'border-input bg-white group-hover:border-primary'
                            }
                        `}>
                            {value.presentChild && <Check className="w-5 h-5 text-white" strokeWidth={3} />}
                        </div>
                        <input 
                            type="checkbox" 
                            className="hidden" 
                            checked={value.presentChild} 
                            onChange={togglePresentChild}
                        />
                         <div className="flex flex-col">
                            <span className={`font-bold text-lg transition-colors ${value.presentChild ? 'text-primary' : 'text-foreground'}`}>
                                Le symptôme était présent
                            </span>
                            <span className="text-xs text-muted-foreground">Cochez si le symptôme était fréquent</span>
                        </div>
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
