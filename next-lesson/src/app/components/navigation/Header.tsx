import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/main-logo.svg";

export default function Header() {
  return (
    <>
      <header className="flex flex-row justify-between items-center w-full px-32 py-4 mx-auto border-b border-b-gray-300">
        <Link
          href="/"
          className="flex flex-row justify-center-safe items-center gap-2"
        >
          <Image src={logo} width={50} alt="Main Logo" loading="eager" />
          <p className="text-2xl font-bold">Bladjar</p>
        </Link>
        <nav className="flex flex-row justify-around items-center gap-6 text-md">
          <Link href="/home">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
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
