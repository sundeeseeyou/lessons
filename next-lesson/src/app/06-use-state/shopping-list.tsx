"use client";

import { useState } from "react";

export default function ShoppingList() {
  const [items, setItems] = useState<string[]>([]);
  const [list, setList] = useState("");

  function addList() {
    setItems([...items, list]);
    // items.push(list);
    // setItems(items);
  }
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-4 p-4 bg-gray-100">
        <input
          onChange={(e) => setList(e.target.value)}
          type="text"
          name="list"
          id="list"
          value={list}
          className="border px-2 py-1"
          onKeyDown={(e) => {
            if (e.key === "Enter") addList();
          }}
        />
        <button
          type="button"
          onClick={addList}
          className="flex flex-col bg-black justify-center items-center w-8 h-8 p-4 aspect-square text-white text-4xl rounded-md hover:cursor-pointer"
        >
          +
        </button>
      </div>
      <ul className="space-y-4 pl-6 list-decimal">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
