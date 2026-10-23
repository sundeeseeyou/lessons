export default function Loading() {
  return (
    <div className="flex items-center justify-center space-x-1.5 h-6 w-full">
      <div className="w-3 h-3 bg-gray-500 animate-bounce duration-150 transform-3d rounded-full" />
      <div className="w-3 h-3 bg-gray-500 animate-bounce duration-150 transform-3d rounded-full" />
      <div className="w-3 h-3 bg-gray-500 animate-bounce duration-150 transform-3d rounded-full" />
    </div>
  );
}
