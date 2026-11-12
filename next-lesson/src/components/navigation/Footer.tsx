import { cacheLife } from "next/cache";

export default async function Footer() {
  "use cache";
  cacheLife("days");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col justify-center items-center w-full h-16 border-t p-0">
      <div className="flex flex-col justify-center items-center max-w-360 p-4 mx-auto">
        <p>{currentYear} © Bladjar | Jangan Berhenti Belajar</p>
      </div>
    </footer>
  );
}
