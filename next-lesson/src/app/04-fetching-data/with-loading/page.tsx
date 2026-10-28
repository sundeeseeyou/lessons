import { Post } from "@/types/post";
import Link from "next/link";

export default async function WithLoading() {
  const posts: Post[] = await fetch("https://api.vercel.app/blog").then((res) =>
    res.json(),
  );
  console.log(posts);

  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <h1 className="text-4xl font-bold">Lesson 04</h1>
        <ul className="space-y-6">
          {posts.slice(0, 10).map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>

        <Link href="./"> Go Back </Link>
      </div>
    </>
  );
}

//solution without server side

// import { Post } from "@/types/post";
// import BackButton from "./back-button";

// export default async function WithLoading() {
//   const posts: Post[] = await fetch("https://api.vercel.app/blog").then((res) =>
//     res.json(),
//   );
//   console.log(posts);

//   return (
//     <>
//       <div className="flex flex-col justify-start items-start gap-4 w-full">
//         <h1 className="text-4xl font-bold">Lesson 04</h1>
//         <ul className="space-y-6">
//           {posts.slice(0, 10).map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//         <BackButton />
//       </div>
//     </>
//   );
// }
