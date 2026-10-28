export default function LoadingSkeleton({ count }: { count: number }) {
  return (
    <ul className="mt-4 space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <li
          key={index}
          className="h-5 w-72 rounded bg-linear-to-r from-gray-300 via-gray-100 to-gray-300 bg-size-[200%_100%] animate-shimmer"
        />
      ))}
    </ul>
  );
}
