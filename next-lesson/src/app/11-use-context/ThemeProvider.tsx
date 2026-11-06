"use client";
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const [] = useState("");
  return <ThemeContext value="dark">{children}</ThemeContext>;
}
