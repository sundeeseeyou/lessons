"use client";

import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    // return () => clearInterval(id);
  }, []);

  return (
    <>
      <p>{seconds} detik</p>
    </>
  );
}
