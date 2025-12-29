"use client";

import { useEffect } from "react";
import { getStoredTheme, applyTheme } from "@/lib/utils";

export default function ThemeInitializer() {
  useEffect(() => {
    const stored = getStoredTheme();
    applyTheme(stored ?? "system");
  }, []);
  return null;
}
