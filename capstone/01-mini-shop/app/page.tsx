import CardPrice from "@/components/Cards";

export default function Homepage() {
  return (
    <main className="flex flex-col w-full max-w-360 bg-background mx-auto min-h-screen h-full p-4 text-foreground px-16 py-4 gap-6 my-16">
      <div className="flex flex-col max-w-360">
        <h1 className="text-4xl font-bold">Welcome to Mini Shop</h1>
      </div>
      <CardPrice />
    </main>
  );
}
