import CardPrice from "@/components/Cards";

export default function Homepage() {
  return (
    <main className="flex flex-col w-full max-w-580 bg-[#f8f9f9] mx-auto min-h-screen h-full p-4 text-black">
      <div className="flex flex-col max-w-360 px-16 py-4">
        <h1 className="text-4xl font-bold">Welcome to Mini Shop</h1>
      </div>
      <CardPrice />
    </main>
  );
}
