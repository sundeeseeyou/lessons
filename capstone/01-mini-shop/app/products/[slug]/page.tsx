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
    <article className="flex flex-col w-full max-w-360 mx-auto min-h-screen h-full p-4 text-foreground px-16 py-4 gap-6 my-16">
      <div className="flex flex-col max-w-360">
        <h1 className="text-4xl font-bold">Product Page: {product.name}</h1>
        <div>
          <p>{product.name}</p>
        </div>
      </div>
    </article>
  );
}
