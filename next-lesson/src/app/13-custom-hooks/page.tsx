import OnlineBadge from "./OnlineBadge";
import SaveButton from "./SaveButton";

export default function LessonThirteen() {
  return (
    <section className="flex flex-1 w-full max-w-360 flex-col items-center justify-start gap-8 p-16 sm:items-start mx-auto lg:h-screen">
      <div className="flex flex-col justify-start items-start gap-6 font-heading">
        <h1 className="font-heading text-5xl/snug font-bold flex flex-row items-center gap-4">
          Lesson 13 - Custom Hooks
        </h1>
        <OnlineBadge />
        <SaveButton />
      </div>
    </section>
  );
}
