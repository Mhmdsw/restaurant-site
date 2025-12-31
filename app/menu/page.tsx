import Link from "next/link";

const demo = [
  { name: "Margherita Pizza", price: 8.5, desc: "Tomato, mozzarella, basil" },
  { name: "Chicken Burger", price: 7.0, desc: "Crispy chicken, sauce, pickles" },
  { name: "Pasta Alfredo", price: 9.0, desc: "Creamy sauce, parmesan" },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">Menu</h1>
          <Link href="/" className="text-sm underline">Back</Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {demo.map((item) => (
            <div key={item.name} className="rounded-3xl border p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              <button className="mt-4 w-full rounded-2xl bg-black px-4 py-3 text-white hover:opacity-90">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
