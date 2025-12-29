"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type AccessibilityContextType = {
  isDyslexic: boolean;
  toggleDyslexic: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [isDyslexic, setIsDyslexic] = useState(false);

  useEffect(() => {
    // Check local storage on mount
    const stored = localStorage.getItem("dyslexic-mode");
    if (stored === "true") {
      setIsDyslexic(true);
      document.body.classList.add("dyslexic-font");
    }
  }, []);

  const toggleDyslexic = () => {
    setIsDyslexic((prev) => {
      const newValue = !prev;
      if (newValue) {
        document.body.classList.add("dyslexic-font");
        localStorage.setItem("dyslexic-mode", "true");
      } else {
        document.body.classList.remove("dyslexic-font");
        localStorage.setItem("dyslexic-mode", "false");
      }
      return newValue;
    });
  };

  return (
    <AccessibilityContext.Provider value={{ isDyslexic, toggleDyslexic }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
}
