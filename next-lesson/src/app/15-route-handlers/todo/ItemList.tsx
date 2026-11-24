"use client";

import { useState, useEffect } from "react";
export default function ItemList() {
  const [item, setItem] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => setItem(data.todos));
  }, []);

  async function handleAdd() {
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: text }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error); // Status 400 dari route.ts
      return;
    }
    setError("");
    setItem(data.todos); // List terbaru dari server
    setText(""); // Reset input field
  }
  return (
    <div className="flex flex-col gap-2 p-8">
      <h2 className="text-2xl font-bold">List Items from Routes</h2>
      <ul className="space-y-2 ml-4 list-disc text-lg">
        {item.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          className="border-b px-2 py-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded w-20"
        >
          {" "}
          Add
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
