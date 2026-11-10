"use client";
import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}
