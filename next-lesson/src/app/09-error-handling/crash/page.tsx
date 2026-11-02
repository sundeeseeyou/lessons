import Bomb from "./bomb";

export default function CrashPage() {
  return (
    <>
      <h1 className="text-4xl font-bold">Crash Test</h1>
      <div className="flex flex-col justify-center items-center w-full">
        <Bomb />
      </div>
    </>
  );
}
