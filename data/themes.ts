export const THEME_STORAGE_KEY = "cbs-theme";

export const themes = [
  {
    id: "strawberry-cream",
    label: "Strawberry Cream",
    swatch: "#E7A0A8",
  },
  {
    id: "lavender-dreams",
    label: "Lavender Dreams",
    swatch: "#CDB8E6",
  },
  {
    id: "matcha-garden",
    label: "Matcha Garden",
    swatch: "#B7CDA8",
  },
  {
    id: "vanilla-cocoa",
    label: "Vanilla Cocoa",
    swatch: "#E2B48A",
  },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export function isThemeId(value: string | null): value is ThemeId {
  return themes.some((theme) => theme.id === value);
}
