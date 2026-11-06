"use client";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeLabel({}) {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme} </p>;
}
