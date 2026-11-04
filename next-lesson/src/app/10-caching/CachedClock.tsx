import { cacheLife } from "next/cache";

export default async function CachedClock() {
  "use cache";
  cacheLife("minutes");
  const time = new Date().toLocaleTimeString();
  return (
    <div className="flex flex-col p-4 bg-purple-200 border-2 border-gray-400 rounded-xl">
      <p className="text-xl font-bold">Cached: {time} </p>
    </div>
  );
}
