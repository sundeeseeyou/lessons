"use client";

import { useSearchParams } from "next/navigation";

export default function CurrentSort() {
  const sort = useSearchParams().get("sort");

  return (
    <>
      <p>Sort: {sort ?? "none"}</p>
    </>
  );
}
