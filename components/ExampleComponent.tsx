// Example of a reusable component (similar to ASP.NET Partial Views)
export default function ExampleComponent({ title }: { title: string }) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">
        This is an example component, similar to a Partial View in ASP.NET MVC.
      </p>
    </div>
  );
}



