"use client";

import { useState, useEffect } from "react";
export default function ItemList() {
  const [item, setItem] = useState<string[]>([]);
  // const [text, setText] = useState("");
  // const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => setItem(data.todos));
  }, []);

  console.log(item);
  return (
    <div className="flex flex-col gap-2 p-8">
      {item.map((x, index) => (
        <p key={index}>{x}</p>
      ))}
    </div>
  );
}
