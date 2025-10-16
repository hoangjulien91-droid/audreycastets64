import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Theme utilities
export type ThemeName = "light" | "dark" | "system"

const THEME_STORAGE_KEY = "theme-preference"

export function getStoredTheme(): ThemeName | null {
  if (typeof window === "undefined") return null
  const raw = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (raw === "light" || raw === "dark" || raw === "system") return raw
  return null
}

export function storeTheme(theme: ThemeName) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(THEME_STORAGE_KEY, theme)
}

export function prefersDark(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
}

export function applyTheme(theme: ThemeName) {
  if (typeof document === "undefined") return
  const root = document.documentElement
  const effectiveDark = theme === "dark" || (theme === "system" && prefersDark())
  root.classList.toggle("dark", effectiveDark)
}