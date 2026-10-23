"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("counter");

  function countHandler() {
    setCount(count + 1);
  }

  return (
    <>
      <button
        onClick={countHandler}
        className="p-4 bg-black text-xl rounded-md w-full text-white hover: cursor-pointer"
      >
        {count}
      </button>
    </>
  );
}
