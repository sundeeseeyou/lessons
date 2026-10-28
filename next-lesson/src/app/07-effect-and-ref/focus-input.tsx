"use client";
import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        className="bg-gray-100 focus-visible:border-amber-600"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.focus()}
        className="px-6 py-4 bg-black text-white hover:cursor-pointer"
      >
        Focus
      </button>
    </>
  );
}
