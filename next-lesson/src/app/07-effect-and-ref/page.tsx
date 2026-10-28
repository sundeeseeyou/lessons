import FocusInput from "./focus-input";
import Counter from "./title-counter";
import Timer from "./timer";

export default function LessonSeven() {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-6">
        <h1 className="text-4xl font-bold">Lesson 07</h1>
        <FocusInput />
        <Counter />
        <Timer />
      </div>
    </>
  );
}
