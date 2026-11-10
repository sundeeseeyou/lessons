import Link from "next/link";
import Image from "next/image";
import logo from "@public/main-logo.svg";
import ThemeToggle from "@/app/11-use-context/ThemeToggle";

export default function Header() {
  return (
    <>
      <header className="flex flex-row justify-between items-center w-full px-16 py-4 mx-auto border-b border-b-gray-300 dark:bg-[#030303] dark:text-white transition-colors duration-100">
        <Link
          href="/"
          className="flex flex-row justify-center-safe items-center gap-2"
        >
          <Image
            src={logo}
            width={50}
            alt="Main Logo"
            loading="eager"
            className="dark:invert"
          />
          <p className="text-2xl font-bold">Bladjar</p>
        </Link>
        <nav className="flex flex-row justify-around items-center gap-6 text-md">
          <Link href="/home">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <ThemeToggle />
          <Link
            href="/signup"
            className="px-6 py-2 outline bg-black text-white"
          >
            Sign Up
          </Link>
        </nav>
      </header>
    </>
  );
}
