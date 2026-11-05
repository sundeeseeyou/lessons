import { cacheLife } from "next/cache";
import { Post } from "@/types/post";

export async function getPost() {
  "use cache";
  cacheLife("hours");
  const posts: Post[] = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json(),
  );
  const fetchedAt = new Date().toLocaleTimeString();

  return { posts, fetchedAt };
}
