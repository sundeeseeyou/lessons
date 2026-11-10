"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex border p-2 text-2xl"
    >
      {theme === "light" ? <BiSun /> : <BiMoon />}
    </button>
  );
}
