"use client";
import { usePathname, useRouter } from "next/navigation";

const opt = [
  {
    value: "asc",
    label: "A-Z",
  },
  {
    value: "desc",
    label: "Z-A",
  },
];

export default function SelectOpt() {
  const path = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col p-4 rounded gap-4">
        <select
          name="sort"
          id="sort"
          onChange={(e) => router.push(path + "?sort=" + e.target.value)}
          className="px-6 py-2 bg-gray-200 border rounded-md"
        >
          {opt.map((x) => (
            <option value={x.value} key={x.value}>
              {x.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
