import type { Metadata } from "next";
import posts from "@/data/post";

type Props = {
  params: Promise<{ slug: string }>;
};

const getPost = (slug: string) => {
  return posts.find((post) => post.heading === slug);
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  //find posts from data/post
  const post = getPost(slug);

  return post
    ? { title: post.heading, description: post.content }
    : { title: "No data found" };
}

//static params

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.heading,
  }));
}

export default async function Page(
  props: PageProps<"/01-layouts-and-pages/[slug]">,
) {
  const { slug } = await props.params;
  const post = getPost(slug);

  return (
    <>
      <article className="flex flex-col justify-center items-start">
        {post && (
          <div className="flex flex-col justify-start item-start gap-4">
            <h1 className="text-4xl font-bold">{post.heading}</h1>
            <p>{post.content}</p>
          </div>
        )}
      </article>
    </>
  );
}
