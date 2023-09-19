import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-end">
        <Link href={'/quiz'} className="rounded-full bg-indigo-500 px-5 py-3 text-2xl text-white shadow-lg">
          Start Quiz
        </Link>
    </main>
  );
}
