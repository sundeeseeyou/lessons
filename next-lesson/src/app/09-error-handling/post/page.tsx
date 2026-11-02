import { notFound } from "next/navigation";
import post from "@/data/post";

function getPost(heading: string) {
  return post.find((post) => post.heading === heading);
}

export default function ErrorPage() {
  const found = getPost("none");

  if (!found) notFound();

  return (
    <>
      <h1>{found.heading}</h1>
      <p>{found.content}</p>
    </>
  );
}
