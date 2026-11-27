import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col w-full max-w-360 mx-auto min-h-screen h-full p-4 text-foreground px-16 py-4 gap-6 my-16">
      <h1 className="text-4xl font-extrabold">Error 404</h1>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
