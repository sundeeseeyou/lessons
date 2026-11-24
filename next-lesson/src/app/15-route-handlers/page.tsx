// src/app/15-route-handlers/example/page.tsx
// FIX: komentar path di atas salah. File ini ada di src/app/15-route-handlers/page.tsx
// import LikeButton from "./example/LikeButton";
import ItemList from "./todo/ItemList";

export default function LikesExample() {
  return (
    <>
      {/*<LikeButton />*/}
      <section className="flex flex-1 w-full max-w-360 flex-col items-center justify-start gap-8 p-16 sm:items-start mx-auto lg:h-screen">
        <div className="flex flex-col justify-start items-start gap-6 font-heading">
          <h1 className="font-heading text-5xl/snug font-bold flex flex-row items-center gap-4">
            Lesson 15 - Route Handlers
          </h1>
          <ItemList />
        </div>
      </section>
    </>
  );
}
