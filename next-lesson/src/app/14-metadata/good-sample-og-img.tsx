// // app/blog/[slug]/opengraph-image.tsx
// export default async function Image({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const post = await getPost(slug); // { title, featuredImage: "https://cms.../foto.jpg" }

//   return new ImageResponse(
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         position: "relative",
//       }}
//     >
//       {/* lapisan 1: featured image, memenuhi seluruh gambar */}
//       <img
//         src={post.featuredImage}
//         width={1200}
//         height={630}
//         style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
//       />

//       {/* lapisan 2: overlay gelap supaya teks terbaca */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           display: "flex",
//           background: "rgba(0,0,0,0.5)",
//         }}
//       />

//       {/* lapisan 3: teks dari data */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: 60,
//           left: 60,
//           display: "flex",
//           color: "white",
//           fontSize: 64,
//         }}
//       >
//         {post.title}
//       </div>
//     </div>,
//     size,
//   );
// }
