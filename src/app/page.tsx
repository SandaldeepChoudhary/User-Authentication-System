import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center flex-col w-40">
        <h1>Hello This is homepage</h1>
        <Link href="/signup" className="p-4 bg-blue-600 text-white">
          Click me
        </Link>
      </div>
    </main>
  );
}
