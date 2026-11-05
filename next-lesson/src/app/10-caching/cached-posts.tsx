import { getPost } from "./data";

export default async function CachedPost() {
  const { posts, fetchedAt } = await getPost();

  return (
    <>
      <p>Fetched at: {fetchedAt}</p>
      <ul className="space-y-4">
        {posts.slice(0, 5).map((item, index) => (
          <li key={index}>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
