import { Post } from "@/types/post";

export default async function PostList() {
  const posts: Post[] = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json(),
  );
  console.log(posts);

  return (
    <>
      <ul className="mt-4 space-y-4">
        {posts.slice(0, 10).map((item) => (
          <li key={item.id} className="underline hover:cursor-pointer">
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}
