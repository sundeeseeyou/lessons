import { Post } from "@/types/post";

export default async function PostList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { sort } = await searchParams;
  const posts: Post[] = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json(),
  );

  let sortedPost = posts;

  if (sort === "asc") {
    sortedPost = [...posts].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "desc") {
    sortedPost = [...posts]
      .sort((a, b) => a.title.localeCompare(b.title))
      .reverse();
  }

  return (
    <>
      <ul className="mt-4 space-y-4">
        {sortedPost.slice(0, 10).map((item) => (
          <li key={item.id} className="underline hover:cursor-pointer">
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}
