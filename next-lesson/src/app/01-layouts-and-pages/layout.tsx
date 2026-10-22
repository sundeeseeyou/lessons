import { Suspense } from "react";
import Link from "next/link";

export default function PageLayout({
  children,
}: LayoutProps<"/01-layouts-and-pages">) {
  return (
    <section className="flex flex-1 w-full max-w-360 flex-col items-center justify-start gap-8 p-16 sm:items-start mx-auto">
      <header className="flex flex-row gap-6 bg-gray-200 px-6 py-2 rounded">
        <Link href="/01-layouts-and-pages">Lesson 01</Link>
        <Link href="/01-layouts-and-pages/about">About</Link>
      </header>
      <Suspense>{children}</Suspense>
    </section>
  );
}
