import Link from "next/link";

export default function Products() {
  const products = [
    { id: 1, name: "Product 1", price: "$99" },
    { id: 2, name: "Product 2", price: "$149" },
    { id: 3, name: "Product 3", price: "$199" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          This page demonstrates server-side rendering with data. In ASP.NET, this would be a ProductsController with a view.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{product.price}</p>
            </div>
          ))}
        </div>
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

