import Counter from "@/components/Counter";

export default function LessonThree() {
  console.log("page");

  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <h1 className="text-4xl font-bold">Lesson 03</h1>
        <p>This is lesson 3</p>
        {/* Counter compoenent */}
        <div className="flex flex-col justify-center items-center gap-8 p-8 mx-auto w-1/2 rounded-md bg-gray-200">
          <h2 className="text-2xl font-bold">Counter</h2>
          <Counter />
        </div>
      </div>
    </>
  );
}
