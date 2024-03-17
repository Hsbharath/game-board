import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-50 dark:bg-sky-600 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 dark:text-white md:text-3xl md:leading-normal`}>
            <strong>Welcome to Game Board.</strong>
          </p>
          <Link href="/dashboard" className="flex items-center gap-5 rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-400 md:text-base">
            <span>Dashboard</span>
          </Link>
        </div>
    </main>
  );
}
