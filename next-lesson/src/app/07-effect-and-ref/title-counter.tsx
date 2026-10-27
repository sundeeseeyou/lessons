"use client";

import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function countHandler() {
    setCount(count + 1);
  }

  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log("effect ran");
  }, [count]);

  return (
    <>
      <button
        type="button"
        onClick={countHandler}
        className="px-6 py-2 bg-gray-400"
      >
        + Add {count}
      </button>
    </>
  );
}
