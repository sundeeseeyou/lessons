"use client";

import { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name-input"
        id="name-input"
        value={name}
        className="bg-gray-200 text-black"
      />
      <p>Hello, {name}</p>
    </div>
  );
}
