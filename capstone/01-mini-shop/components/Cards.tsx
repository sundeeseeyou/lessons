"use client";

import { PRODUCTS } from "@/data/products";
import Link from "next/link";

export default function CardPrice() {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-8">
      {PRODUCTS.map((x, index) => (
        <Link href={x.slug} key={index}>
          <div className="flex flex-col rounded-[20px] p-4 border border-gray-200 bg-base">
            <div className="flex flex-col text-8xl justify-center items-center bg-orange-900/15 aspect-3/2 rounded-md">
              {x.emoji}
            </div>
            <h2 className="text-xl font-bold mt-4 mb-2">{x.name}</h2>
            <p className="text-sm/snug text-gray-700">{x.description}</p>
            <p className="text-2xl font-bold self-end">Rp{x.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
