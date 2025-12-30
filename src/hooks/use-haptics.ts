"use client";

import { useCallback } from "react";

type HapticType = "light" | "medium" | "heavy" | "error" | "success";

const HAPTIC_PATTERNS: Record<HapticType, number | number[]> = {
  light: 10,
  medium: 20,
  heavy: 50,
  success: [10, 50, 10],
  error: [50, 100, 50],
};

export function useHaptics() {
  const trigger = useCallback((type: HapticType = "light") => {
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      try {
        navigator.vibrate(HAPTIC_PATTERNS[type]);
      } catch (e) {
        // Silently fail if vibration is blocked or not supported
        console.warn("Haptics failed:", e);
      }
    }
  }, []);

  return { trigger };
}
