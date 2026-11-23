// src/app/15-route-handlers/example/LikeButton.tsx
"use client";

import { useState, useEffect } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [error, setError] = useState("");

  // load the current number once, when the component appears
  useEffect(() => {
    fetch("/api/likes")
      .then((res) => res.json())
      .then((data) => setLikes(data.likes));
  }, []);

  async function sendLike(amount: number) {
    const res = await fetch("/api/likes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error); // 400: show the API's message
      return;
    }

    setError("");
    setLikes(data.likes); // 200: show the new number
  }

  return (
    <div className="flex flex-col gap-2 p-8">
      <p>Likes: {likes}</p>
      <button onClick={() => sendLike(1)}>+1</button>
      <button onClick={() => sendLike(0)}>+0 (should fail)</button>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
