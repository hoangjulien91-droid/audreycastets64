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
      ? value.examplesAdultChecked.filter((i) => i !== index)
      : [...value.examplesAdultChecked, index];
    onChange({ ...value, examplesAdultChecked: newChecked });
  };

  const toggleExampleChild = (index: number) => {
    const newChecked = value.examplesChildChecked.includes(index)
      ? value.examplesChildChecked.filter((i) => i !== index)
      : [...value.examplesChildChecked, index];
    onChange({ ...value, examplesChildChecked: newChecked });
  };

  const togglePresentAdult = () => onChange({ ...value, presentAdult: !value.presentAdult });
  const togglePresentChild = () => onChange({ ...value, presentChild: !value.presentChild });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 space-y-8 duration-500">
      {/* Header Question */}
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <h2 className="font-display text-2xl leading-tight font-bold md:text-3xl">
          <span className="text-primary mr-2">{criterion.label}.</span>
          {criterion.description}
        </h2>
      </div>

      {/* Double Column Layout */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* ADULTE */}
        <div
          className={`relative rounded-2xl border-2 p-6 transition-all duration-300 ${value.presentAdult ? "border-primary bg-primary/5 shadow-premium" : "border-border/50 hover:border-primary/20 bg-white/50"} `}
        >
          <div className="bg-background text-primary border-primary/10 absolute -top-3 left-6 rounded-full border px-3 text-sm font-bold tracking-wider uppercase shadow-sm">
            Vie Adulte (Actuel)
          </div>

          <div className="mt-4 space-y-4">
            <p className="text-muted-foreground mb-3 pl-1 text-sm font-medium">
              Cochez les exemples qui vous correspondent :
            </p>
            <div className="space-y-3">
              {criterion.examplesAdult.map((ex, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleExampleAdult(idx)}
                  className={`group flex w-full items-start gap-4 rounded-xl p-4 text-left text-base transition-all ${
                    value.examplesAdultChecked.includes(idx)
                      ? "ring-primary/20 text-foreground translate-x-1 bg-white shadow-md ring-1"
                      : "text-muted-foreground hover:text-foreground hover:bg-white hover:shadow-sm"
                  } `}
                >
                  <div
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 transition-all duration-300 ${
                      value.examplesAdultChecked.includes(idx)
                        ? "bg-primary border-primary scale-110 shadow-sm"
                        : "border-input group-hover:border-primary/50"
                    } `}
                  >
                    {value.examplesAdultChecked.includes(idx) && (
                      <Check className="h-4 w-4 font-bold text-white" strokeWidth={3} />
                    )}
                  </div>
                  <span className="leading-snug">{ex}</span>
                </button>
              ))}
            </div>

            <div className="border-border/50 mt-2 border-t pt-6">
              <label className="group flex cursor-pointer items-center gap-4 rounded-xl p-2 transition-colors hover:bg-white/50">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-xl border-2 shadow-sm transition-all duration-300 ${
                    value.presentAdult
                      ? "bg-primary border-primary shadow-primary/20 scale-105"
                      : "border-input group-hover:border-primary bg-white"
                  } `}
                >
                  {value.presentAdult && <Check className="h-5 w-5 text-white" strokeWidth={3} />}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={value.presentAdult}
                  onChange={togglePresentAdult}
                />
                <div className="flex flex-col">
                  <span
                    className={`text-lg font-bold transition-colors ${value.presentAdult ? "text-primary" : "text-foreground"}`}
                  >
                    Le symptôme est présent
                  </span>
                  <span className="text-muted-foreground text-xs">
                    Cochez si le symptôme est fréquent
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* ENFANT */}
        <div
          className={`relative rounded-2xl border-2 p-6 transition-all duration-300 ${value.presentChild ? "border-primary bg-primary/5 shadow-premium" : "border-border/50 hover:border-primary/20 bg-white/50"} `}
        >
          <div className="bg-background text-primary border-primary/10 absolute -top-3 left-6 rounded-full border px-3 text-sm font-bold tracking-wider uppercase shadow-sm">
            Enfance (5-12 ans)
          </div>

          <div className="mt-4 space-y-4">
            <p className="text-muted-foreground mb-3 pl-1 text-sm font-medium">
              Souvenirs d'enfance correspondants :
            </p>
            <div className="space-y-3">
              {criterion.examplesChild.map((ex, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleExampleChild(idx)}
                  className={`group flex w-full items-start gap-4 rounded-xl p-4 text-left text-base transition-all ${
                    value.examplesChildChecked.includes(idx)
                      ? "ring-primary/20 text-foreground translate-x-1 bg-white shadow-md ring-1"
                      : "text-muted-foreground hover:text-foreground hover:bg-white hover:shadow-sm"
                  } `}
                >
                  <div
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 transition-all duration-300 ${
                      value.examplesChildChecked.includes(idx)
                        ? "bg-primary border-primary scale-110 shadow-sm"
                        : "border-input group-hover:border-primary/50"
                    } `}
                  >
                    {value.examplesChildChecked.includes(idx) && (
                      <Check className="h-4 w-4 font-bold text-white" strokeWidth={3} />
                    )}
                  </div>
                  <span className="leading-snug">{ex}</span>
                </button>
              ))}
            </div>

            <div className="border-border/50 mt-2 border-t pt-6">
              <label className="group flex cursor-pointer items-center gap-4 rounded-xl p-2 transition-colors hover:bg-white/50">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-xl border-2 shadow-sm transition-all duration-300 ${
                    value.presentChild
                      ? "bg-primary border-primary shadow-primary/20 scale-105"
                      : "border-input group-hover:border-primary bg-white"
                  } `}
                >
                  {value.presentChild && <Check className="h-5 w-5 text-white" strokeWidth={3} />}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={value.presentChild}
                  onChange={togglePresentChild}
                />
                <div className="flex flex-col">
                  <span
                    className={`text-lg font-bold transition-colors ${value.presentChild ? "text-primary" : "text-foreground"}`}
                  >
                    Le symptôme était présent
                  </span>
                  <span className="text-muted-foreground text-xs">
                    Cochez si le symptôme était fréquent
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Helper text */}
      <div className="text-muted-foreground flex items-center justify-center gap-2 text-center text-xs">
        <Info className="h-4 w-4" />
        Pour valider un critère, le symptôme doit être fréquent et gênant.
      </div>
    </div>
  );
}
