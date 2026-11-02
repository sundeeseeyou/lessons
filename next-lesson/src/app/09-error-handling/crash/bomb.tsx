"use client";

import { useState } from "react";

export default function Bomb() {
  const [explode, setExplode] = useState(false);

  function ButtonHandler() {
    setExplode(true);
  }

  if (explode) throw new Error("Boom");

  function KaboomHandler() {
    throw new Error("Kaboom");
  }

  return (
    <>
      <div className="flex flex-row gap-6">
        <button
          type="button"
          onClick={ButtonHandler}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-950 transition-all hover:cursor-pointer"
        >
          💥 Explode
        </button>
        <button
          type="button"
          onClick={KaboomHandler}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-950 transition-all hover:cursor-pointer"
        >
          💥Kaboom
        </button>
      </div>
    </>
  );
}
