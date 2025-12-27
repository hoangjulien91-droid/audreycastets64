import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Brain, AlertTriangle } from 'lucide-react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Tests & Pré-diagnostic | Audrey Castets - Psychologue du Travail',
  description: 'Évaluez votre niveau de Burnout ou de TDAH grâce à nos outils de pré-diagnostic en ligne.',
};

export default function TestsPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Tests & <span className="text-primary">Pré-diagnostic</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ces questionnaires sont des outils de dépistage et ne remplacent pas un diagnostic médical.
                Ils vous permettent de faire le point sur votre situation actuelle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Burnout Card */}
              <div className="card-premium p-8 flex flex-col items-start relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="w-7 h-7 text-rose-600" />
                </div>
                
                <h2 className="text-2xl font-bold font-display text-foreground mb-3">
                  Test Burnout
                </h2>
                <p className="text-muted-foreground mb-8 flex-1">
                  Évaluez votre niveau d'épuisement professionnel (MBI). Ce test analyse la fatigue émotionnelle, la dépersonnalisation et l'accomplissement personnel.
                </p>
                
                <Link 
                  href="/tests/burnout"
                  className="btn-premium w-full group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Commencer le test
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>

              {/* TDAH Card */}
              <div className="card-premium p-8 flex flex-col items-start relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-7 h-7 text-violet-600" />
                </div>
                
                <h2 className="text-2xl font-bold font-display text-foreground mb-3">
                  Test TDAH
                </h2>
                <p className="text-muted-foreground mb-8 flex-1">
                  Échelle auto-rapportée pour le TDAH adulte (ASRS v1.1). Identifiez les symptômes potentiels de trouble du déficit de l'attention.
                </p>
                
                <Link 
                  href="/tests/tdah"
                  className="btn-premium w-full group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Commencer le test
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
