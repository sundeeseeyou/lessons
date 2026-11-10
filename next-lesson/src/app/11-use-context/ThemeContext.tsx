"use client";

import { ThemeValue } from "@/types/theme";

import { createContext } from "react";

export const ThemeContext = createContext<ThemeValue>({
  theme: "light",
  toggleTheme: () => {},
});
