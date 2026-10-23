import { Suspense } from "react";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

export default function PageLayout({
  children,
}: LayoutProps<"/02-linking-and-navigating">) {
  return (
    <section className="flex flex-1 w-full max-w-360 flex-col items-center justify-start gap-8 p-16 sm:items-start mx-auto">
      <header className="flex flex-row gap-6 bg-gray-200 px-6 py-2 rounded">
        <Suspense>
          <Breadcrumbs />
          <a href="/02-linking-and-navigating/b">Page B</a>
          <input type="text" className="bg-white" />
        </Suspense>
      </header>
      <Suspense>{children}</Suspense>
    </section>
  );
}
