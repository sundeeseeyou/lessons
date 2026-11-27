import { PRODUCTS } from "@/data/products";
import { notFound } from "next/navigation";

function getPRODUCTS(slug: string) {
  return PRODUCTS.find((x) => x.slug === slug);
}

export async function generateStaticParams() {
  return PRODUCTS.map((x) => ({
    slug: x.slug,
  }));
}

export default async function ProductPage(
  props: PageProps<"/products/[slug]">,
) {
  const { slug } = await props.params;
  const product = getPRODUCTS(slug);
  if (!product) notFound();
  return (
    <article className="flex flex-col w-full max-w-180 mx-auto min-h-screen h-full p-4 text-foreground px-16 py-4 gap-6 my-16">
      <div className="flex flex-col ">
        <span className="mb-6">Product Page: </span>
        <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
        <div className="flex flex-col justify-center items-center text-8xl aspect-3/2 bg-amber-900/20 dark:bg-amber-100/10">
          <p>{product.emoji}</p>
        </div>
        <div className="flex flex-col gap-2 px-4 pt-2 pb-4 mt-6">
          <h3 className="text-2xl font-bold">
            Rp{product.price.toLocaleString("id-ID")}
          </h3>
          <p>{product.description}</p>
        </div>
      </div>
    </article>
  );
}
