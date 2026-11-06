import { connection } from "next/server";

export default async function FreshClock() {
  await connection();
  const time = new Date().toLocaleTimeString();
  return (
    <div className="flex flex-col p-4 bg-pink-300 shadow-xl  border-2 border-gray-400 rounded-xl ">
      <p className="text-xl font-bold">Fresh: {time}</p>
    </div>
  );
}
