import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import PostList from "./posts";

export const metadata: Metadata = {
  title: "Lesson 4 - Fetching Data",
  description: "Fetch blog posts in a server component, with a loading state.",
};

export default function LessonFour() {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <h1 className="text-4xl font-bold">Lesson 04</h1>
        <Suspense fallback="Loading...">
          <PostList />
        </Suspense>
        <Link href="/04-fetching-data/with-loading">With Loading Style</Link>
      </div>
    </>
  );
}
