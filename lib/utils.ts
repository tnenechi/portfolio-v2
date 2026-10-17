import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Teach tailwind-merge the custom spacing tokens (see app/globals.css) so
// e.g. cn("p-space-md", "pt-0") resolves conflicts correctly.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ["space-3xs", "space-2xs", "space-xs", "space-sm", "space-md", "space-lg", "space-xl", "space-2xl", "space-3xl"],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Deterministic gradient background derived from a string id.
 * Used as a placeholder cover for entities (e.g. projects) that don't
 * yet have a real image asset, so the same id always renders the same gradient.
 */
export function coverGradient(id: string): string {
  let hash = 0
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash)
  }
  const h1 = Math.abs(hash) % 360
  const h2 = (h1 + 40) % 360
  return `linear-gradient(135deg, oklch(0.45 0.18 ${h1}) 0%, oklch(0.35 0.14 ${h2}) 100%)`
}
