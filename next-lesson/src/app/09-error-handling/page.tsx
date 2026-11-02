import Link from "next/link";

const links = [
  {
    label: "Post",
    url: "/09-error-handling/post",
  },
  {
    label: "Crash",
    url: "/09-error-handling/crash",
  },
  {
    label: "Form",
    url: "/09-error-handling/form",
  },
];

export default function LessonNine() {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-6">
        <h1 className="text-4xl font-bold">Lesson 009</h1>
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index} className="hover:underline">
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
