"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import posts from "@/data/post";

export default function LessonOne() {
  const urlPath = usePathname();
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4">
        <h1 className="text-4xl font-bold">Lesson 01</h1>
        <ul className="mb-4 space-y-4">
          {posts.map((items, id) => (
            <li key={id}>
              <Link
                href={`${urlPath}/${encodeURIComponent(items.heading)}`}
                className="hover:underline hover:transition-all"
              >
                {items.heading}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
