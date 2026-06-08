/** AUTO-GENERATED - DO NOT EDIT MANUALLY **/
export const THEMES = [
  "light",
  "amethyst-haze-light",
  "amethyst-haze",
  "apple",
  "aurora-neon",
  "caffeine-light",
  "caffeine",
  "catppuccin-light",
  "catppuccin",
  "celestial",
  "CMYK",
  "ink-vapor",
  "ivory-chrome",
  "marshmallow-light",
  "marshmallow",
  "midnight-pearl",
  "mocha-mousse-light",
  "mocha-mousse",
  "neon-cyberpunk",
  "obsidian-gold",
  "pastel-dreams-light",
  "pastel-dreams",
  "quiet-atelier",
  "rose-latte",
  "royal-velvet",
  "test",
  "testtest"
] as const;

export type Theme = typeof THEMES[number];
export const ThemeList = [...THEMES] as string[];

export const themePalettes: Record<Theme, { 
  '--background': string | null;
  '--primary': string | null;
  '--accent': string | null;
}> = {
  "light": {
    "--background": "oklch(1 0 0)",
    "--primary": "oklch(0.21 0.006 285.885)",
    "--accent": "oklch(0.967 0.001 286.375)"
  },
  "amethyst-haze-light": {
    "--background": "oklch(0.9777 0.0041 301.4256)",
    "--primary": "oklch(0.6104 0.0767 299.7335)",
    "--accent": "oklch(0.7889 0.0802 359.9375)"
  },
  "amethyst-haze": {
    "--background": "oklch(0.2166 0.0215 292.8474)",
    "--primary": "oklch(0.7058 0.0777 302.0489)",
    "--accent": "oklch(0.3181 0.0321 308.6149)"
  },
  "apple": {
    "--background": "oklch(0.99 0 0)",
    "--primary": "oklch(0.62 0.18 250)",
    "--accent": "oklch(0.62 0.18 250)"
  },
  "aurora-neon": {
    "--background": "oklch(14% 0.04 265)",
    "--primary": "oklch(72% 0.23 265)",
    "--accent": "oklch(66% 0.18 190)"
  },
  "caffeine-light": {
    "--background": "oklch(0.9821 0 0)",
    "--primary": "oklch(0.4341 0.0392 41.9938)",
    "--accent": "oklch(0.9310 0 0)"
  },
  "caffeine": {
    "--background": "oklch(0.1776 0 0)",
    "--primary": "oklch(0.9247 0.0524 66.1732)",
    "--accent": "oklch(0.2850 0 0)"
  },
  "catppuccin-light": {
    "--background": "oklch(0.9578 0.0058 264.5321)",
    "--primary": "oklch(0.5547 0.2503 297.0156)",
    "--accent": "oklch(0.6820 0.1448 235.3822)"
  },
  "catppuccin": {
    "--background": "oklch(0.2155 0.0254 284.0647)",
    "--primary": "oklch(0.7871 0.1187 304.7693)",
    "--accent": "oklch(0.8467 0.0833 210.2545)"
  },
  "celestial": {
    "--background": "oklch(12% 0.04 255)",
    "--primary": "oklch(95.547% 0.07539 96.149)",
    "--accent": "oklch(82% 0.12 85)"
  },
  "CMYK": {
    "--background": "oklch(10% 0.02 260)",
    "--primary": "oklch(70% 0.22 255)",
    "--accent": "oklch(82% 0.18 95)"
  },
  "ink-vapor": {
    "--background": "oklch(97% 0.005 240)",
    "--primary": "oklch(60% 0.12 285)",
    "--accent": "oklch(88% 0.06 320)"
  },
  "ivory-chrome": {
    "--background": "oklch(98% 0.01 95)",
    "--primary": "oklch(62% 0.10 255)",
    "--accent": "oklch(88% 0.03 180)"
  },
  "marshmallow-light": {
    "--background": "oklch(0.97 0.01 264.53)",
    "--primary": "oklch(0.80 0.14 349.25)",
    "--accent": "oklch(0.83 0.09 248.95)"
  },
  "marshmallow": {
    "--background": "oklch(0.22 0 0)",
    "--primary": "oklch(0.80 0.14 349.25)",
    "--accent": "oklch(0.83 0.09 248.95)"
  },
  "midnight-pearl": {
    "--background": "oklch(12% 0.01 260)",
    "--primary": "oklch(72% 0.10 240)",
    "--accent": "oklch(78% 0.06 320)"
  },
  "mocha-mousse-light": {
    "--background": "oklch(0.9529 0.0146 102.4597)",
    "--primary": "oklch(0.6083 0.0623 44.3588)",
    "--accent": "oklch(0.8502 0.0389 49.0874)"
  },
  "mocha-mousse": {
    "--background": "oklch(0.2721 0.0141 48.1783)",
    "--primary": "oklch(0.7272 0.0539 52.3320)",
    "--accent": "oklch(0.7473 0.0387 80.5476)"
  },
  "neon-cyberpunk": {
    "--background": "oklch(12% 0.02 280)",
    "--primary": "oklch(70% 0.25 300)",
    "--accent": "oklch(75% 0.22 160)"
  },
  "obsidian-gold": {
    "--background": "oklch(10% 0.01 260)",
    "--primary": "oklch(75% 0.12 85)",
    "--accent": "oklch(70% 0.10 60)"
  },
  "pastel-dreams-light": {
    "--background": "oklch(0.97 0.01 314.78)",
    "--primary": "oklch(0.71 0.16 293.54)",
    "--accent": "oklch(0.94 0.03 321.94)"
  },
  "pastel-dreams": {
    "--background": "oklch(0.22 0.01 56.04)",
    "--primary": "oklch(0.79 0.12 295.75)",
    "--accent": "oklch(0.39 0.05 304.64)"
  },
  "quiet-atelier": {
    "--background": "oklch(0.96 0.01 90)",
    "--primary": "oklch(0.55 0.14 35)",
    "--accent": "oklch(0.62 0.12 200)"
  },
  "rose-latte": {
    "--background": "oklch(97% 0.015 15)",
    "--primary": "oklch(68% 0.18 12)",
    "--accent": "oklch(78% 0.12 350)"
  },
  "royal-velvet": {
    "--background": "oklch(12% 0.03 300)",
    "--primary": "oklch(65% 0.22 315)",
    "--accent": "oklch(78% 0.15 70)"
  },
  "test": {
    "--background": "#fffffe",
    "--primary": "#7c3aed",
    "--accent": "#8b5cf6"
  },
  "testtest": {
    "--background": "#fcfcf7",
    "--primary": "#1a2018",
    "--accent": "oklch(72% 0.10 190)"
  }
};