import { Suspense } from "react";
import FreshClock from "./FreshClock";
import CachedClock from "./CachedClock";
import CachedPost from "./cached-posts";

export default function LessonTen() {
  return (
    <div className="flex flex-col w-full p-4 justify-center items-center gap-8">
      <h1 className="text-4xl font-bold">Caching</h1>
      <div className="flex flex-row justify-center items-center gap-4">
        <Suspense fallback={<div className="w-30 bg-gray-600 h-8" />}>
          <FreshClock />
        </Suspense>
        <CachedClock />
      </div>

      <CachedPost />
    </div>
  );
}
