import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start gap-8 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex justify-start align-center">
          <h1 className="text-4xl">Table of Lessons</h1>
        </div>
        <nav>
          <Link href="/01-layouts-and-pages">01. Layout and Pages</Link>
        </nav>
      </main>
    </div>
  );
}
