"use client";

import { usePathname } from "next/navigation";
import Link from "next/link"

export default function Breadcrumbs() {
  const pathname = usePathname();
  return (
    <header className="flex flex-row justify-center items-center gap-4">
     <Link href="/">Home</Link>
        <li>Home</li>
      </ul>
    </header>
  );
}
