import type { Metadata } from "next";
import { Suspense } from "react";
import SelectOpt from "./select-option";
import CurrentSort from "./current-sort";
import PostList from "./post-lits";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export const metadata: Metadata = {
  title: "Lesson 8 - Search Params and useRouter",
  description: "Sort blog posts with ?sort= in the URL.",
};

export default function LessonEight({
  searchParams,
}: PageProps<"/08-search-params">) {
  return (
    <>
      <h1 className="text-4xl font-bold">Lesson 008</h1>
      <SelectOpt />
      <Suspense fallback={<p>Loading ...</p>}>
        <CurrentSort />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton count={10} />}>
        <PostList searchParams={searchParams} />
      </Suspense>
    </>
  );
}
