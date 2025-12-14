import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex gap-4">
        <Link href="/" className="hover:text-gray-300 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition">
          About
        </Link>
        <Link href="/products" className="hover:text-gray-300 transition">
          Products
        </Link>
      </nav>
    </header>
  );
}

