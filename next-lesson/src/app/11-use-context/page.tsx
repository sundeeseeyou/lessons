import type { Metadata } from "next";
import { ThemeContext } from "./ThemeContext";
import ThemeLabel from "./ThemeLabel";

export const metadata: Metadata = {
  title: "Lesson 11 - useContext",
  description: "A dark mode switch shared across the whole site.",
};

export default function LessonEleven() {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-6 font-heading">
        <h1 className="font-heading text-5xl/snug font-bold">Lesson 11</h1>
        <ThemeLabel />
        <div className="p-6 rounded-xl bg-white text-black dark:bg-[#030303] border dark:text-white transition-colors duration-300">
          Kartu ini ikut tema
        </div>
      </div>
    </>
  );
}
