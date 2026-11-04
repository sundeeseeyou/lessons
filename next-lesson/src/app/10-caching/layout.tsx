export default function PageLayout({ children }: LayoutProps<"/10-caching">) {
  return (
    <>
      <section className="flex flex-1 w-full max-w-360 flex-col items-center justify-start gap-8 p-16 sm:items-start mx-auto border border-y-0 ">
        {children}
      </section>
    </>
  );
}
