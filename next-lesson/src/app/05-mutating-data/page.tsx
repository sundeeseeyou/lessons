import { todos } from "./todos";
import { addTodo } from "./actions";

export default function LessonFive() {
  return (
    <>
      <h1 className="text-4xl font-bold">Lesson 05</h1>
      <div className="flex flex-col justify-start items-start bg-gray-200 px-8 py-4 rounded-md gap-6">
        <form className="flex flex-col" action={addTodo}>
          <label className="flex flex-col gap-4">
            Input Title
            <input
              type="text"
              id="title"
              name="title"
              className="bg-white px-2 py-1 rounded-md"
            />
          </label>
          <button
            type="submit"
            className="bg-black text-white px-6 mt-6 self-end py-2 hover: cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
      <h2 className="text-2xl font-bold">Result Input</h2>
      <ul className="space-y-4 ml-4 list-disc">
        {todos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
