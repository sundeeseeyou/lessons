import type { Metadata } from "next";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { Suspense } from "react";
import Shop from "./Shop";

export const metadata: Metadata = {
  title: "Lesson 12 - useReducer",
  description: "A coffee shop cart built with useReducer.",
};

export default function LessonTwelve() {
  return (
    <div className="flex flex-col justify-start items-center h-screen max-h-screen gap-8 font-heading mx-auto max-w-full w-180 bg-orange-100 px-8 pt-8 pb-16 rounded-xl border-4 ">
      <h1 className="font-heading text-5xl/snug font-bold flex flex-row items-center gap-4">
        <BiSolidCoffeeBean /> Toko Kopi Kutu
      </h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Shop />
      </Suspense>
    </div>
  );
}
