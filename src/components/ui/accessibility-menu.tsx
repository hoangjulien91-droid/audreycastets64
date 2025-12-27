'use client';

import { useAccessibility } from '@/components/providers/accessibility-provider';
import { Button } from '@/components/ui/button';
import { Type } from 'lucide-react';
import { motion } from 'framer-motion';

export function AccessibilityMenu() {
  const { isDyslexic, toggleDyslexic } = useAccessibility();

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          variant={isDyslexic ? "default" : "outline"}
          size="icon"
          onClick={toggleDyslexic}
          className="rounded-full shadow-lg border-2 border-primary/20 backdrop-blur-sm hover:scale-110 transition-transform h-12 w-12"
          aria-label={isDyslexic ? "Désactiver le mode dyslexie" : "Activer le mode dyslexie"}
          title="Mode Dyslexie"
        >
          <Type className={`h-6 w-6 ${isDyslexic ? 'text-white' : 'text-primary'}`} />
        </Button>
      </motion.div>
    </div>
  );
}
