import Link from "next/link";
import lessons from "@/data/lesson";

export default function Home() {
  return (
    <section className="flex w-full lg:max-w-360 flex-col items-center justify-start gap-8 p-16 mx-auto sm:items-start">
      <div className="flex justify-start align-center">
        <h1 className="text-4xl font-bold">Table of Lessons</h1>
      </div>
      <nav className="flex flex-col justify-start items-start space-y-4 px-8 py-4 border">
        {lessons.map((list, id) => (
          <Link key={id} href={list.url}>
            {list.title}
          </Link>
        ))}
      </nav>
    </section>
  );
}
