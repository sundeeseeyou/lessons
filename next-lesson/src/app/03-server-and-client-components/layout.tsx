import { Suspense } from "react";

export default function PageLayout({
  children,
}: LayoutProps<"/03-server-and-client-components">) {
  return (
    <>
      <section className="flex flex-1 w-full max-w-360 flex-col items-center justify-start gap-8 p-16 sm:items-start mx-auto">
        <Suspense fallback="Loading...">{children}</Suspense>
      </section>
    </>
  );
}
