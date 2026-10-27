export default function PageLayout({
  children,
}: LayoutProps<"/07-effect-and-ref">) {
  return (
    <>
      <section className="flex flex-1 w-full max-w-360 flex-col items-center justify-start gap-8 p-16 sm:items-start mx-auto">
        {children}
      </section>
    </>
  );
}
