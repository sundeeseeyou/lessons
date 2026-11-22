import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Lesson 1 - Layout and Pages", // judul untuk /01-layouts-and-pages sendiri
    template: "Lesson 1 - %s | Bladjar", // pola untuk halaman anak: [slug], about
  },
  description: "Nested layouts, pages and a dynamic [slug] route.",
};

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
