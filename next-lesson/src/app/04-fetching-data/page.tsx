import Link from "next/link";
import { Post } from "@/types/post";

export default async function LessonFour() {
  const posts: Post[] = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json(),
  );
  console.log(posts);

  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <h1 className="text-4xl font-bold">Lesson 04</h1>
        <ul className=" mt-4 space-y-4">
          {posts.map((item) => (
            <li key={item.id} className="underline hover:cursor-pointer">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
