"use client";

export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-16 w-full">
      <h2 className="text-4xl text-red-500 font-extrabold animate-spin">
        {error instanceof Error ? error.message : String(error)}
      </h2>
      <button
        className="bg-black text-white hover:cursor-pointer px-6 py-2 rounded-md"
        onClick={() => retry()}
      >
        🔄️ Try again
      </button>
    </div>
  );
}
