"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import links from "@/data/links";

export default function Breadcrumbs() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row gap-6">
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={pathname === item.href ? "font-bold" : ""}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
