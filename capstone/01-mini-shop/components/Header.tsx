import { PiStorefrontDuotone } from "react-icons/pi";

export default function Header() {
  return (
    <header className="flex flex-row justiy-between items-center gap-4 border-b-gray-300 border-b shadow-xs bg-white px-6 py-2 h-24">
      <div className="flex flex-row text-black text-xl items-center justify-between gap-2 font-bold">
        <PiStorefrontDuotone className="w-10 h-10" /> Mini Shop
      </div>
    </header>
  );
}
