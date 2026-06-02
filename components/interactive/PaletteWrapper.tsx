"use client";

import dynamic from "next/dynamic";

export const PaletteWrapper = dynamic(
  () => import("./CommandPalette").then((mod) => mod.CommandPalette),
  { ssr: false }
);
