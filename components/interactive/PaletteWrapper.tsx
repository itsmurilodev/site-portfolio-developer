"use client";

import dynamic from "next/dynamic";

// Dynamically import the CommandPalette console on-demand (client-side only, warning-free)
export const PaletteWrapper = dynamic(
  () => import("./CommandPalette").then((mod) => mod.CommandPalette),
  { ssr: false }
);
