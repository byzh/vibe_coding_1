import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Next.js
        </h1>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
          A Next.js project with TypeScript and Tailwind CSS
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/about"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            About Page
          </Link>
          <Link
            href="/products"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Products
          </Link>
        </div>
      </div>
    </main>
  );
}
