import { PRODUCTS } from "@/data/products";
import Link from "next/link";

export default function CardPrice() {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-4">
      {PRODUCTS.map((x, index) => (
        <Link href={x.slug} key={index}>
          <div className="flex flex-col rounded-md px-4 py-4 border border-gray-200 bg-white">
            <span>{x.emoji}</span>
            <h2>{x.name}</h2>
            <p>Rp{x.price}</p>
            <p>{x.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
