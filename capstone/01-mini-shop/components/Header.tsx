import { PiStorefrontDuotone } from "react-icons/pi";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justiy-between items-center gap-4 border-b-line border-b shadow-xs bg-background px-6 py-2 h-16">
      <Link href="/">
        <div className="flex flex-row text-foreground text-xl items-center justify-between gap-2 font-bold">
          <PiStorefrontDuotone className="w-10 h-10" /> Mini Shop
        </div>
      </Link>
    </header>
  );
}
