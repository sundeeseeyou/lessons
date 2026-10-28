import ToggleBtn from "./toggle";
import NameInput from "./name-input";
import ShoppingList from "./shopping-list";

export default function LessonSix() {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-6">
        <h1 className="text-4xl font-bold">Lesson 06</h1>

        <ToggleBtn />
        <NameInput />
        <ShoppingList />
      </div>
    </>
  );
}
