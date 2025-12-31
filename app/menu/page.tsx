const demo = [
  { name: "Margherita Pizza", price: 8.5, desc: "Tomato, mozzarella, basil" },
  { name: "Chicken Burger", price: 7.0, desc: "Crispy chicken, sauce, pickles" },
  { name: "Pasta Alfredo", price: 9.0, desc: "Creamy sauce, parmesan" },
  { name: "Greek Salad", price: 5.5, desc: "Feta, olives, cucumber" },
  { name: "Fries", price: 3.0, desc: "Crispy golden fries" },
  { name: "Soft Drink", price: 1.5, desc: "Coke, Sprite, Fanta" },
];

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold">Menu</h1>
          <p className="mt-2 text-gray-600">
            Clean, simple, and delicious — updated daily.
          </p>
        </div>

        <div className="hidden md:block">
          <span className="rounded-full border px-3 py-1 text-sm text-gray-600">
            Tip: Soon this will come from the database ✅
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {demo.map((item) => (
          <div key={item.name} className="rounded-3xl border p-6">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                ${item.price.toFixed(2)}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>

            <button className="mt-5 w-full rounded-2xl bg-black px-4 py-3 text-white hover:opacity-90">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
