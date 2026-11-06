import { ThemeContext } from "./ThemeContext";
import ThemeLabel from "./ThemeLabel";

export default function LessonEleven() {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-6 font-heading">
        <h1 className="font-heading text-5xl/snug font-bold">Lesson 11</h1>
        <ThemeLabel />
      </div>
    </>
  );
}
