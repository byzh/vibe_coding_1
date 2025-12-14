import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8">About Page</h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          This is the about page in Next.js App Router.
        </p>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          In ASP.NET, this would be equivalent to an About.cshtml view or AboutController.
        </p>
        <Link
          href="/"
          className="text-blue-500 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

