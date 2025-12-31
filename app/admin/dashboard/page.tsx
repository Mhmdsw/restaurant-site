import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Open today • Fast delivery
            </div>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Taste that feels premium.
            </h1>

            <p className="text-gray-600">
              Browse our menu, discover signature dishes, and order easily.
              Built as a modern restaurant website.
            </p>

            <div className="flex gap-3">
              <Link
                href="/menu"
                className="rounded-2xl bg-black px-5 py-3 text-white hover:opacity-90"
              >
                View Menu
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border px-5 py-3 hover:bg-gray-50"
              >
                Contact
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 text-sm">
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Fresh</div>
                <div className="text-gray-600">Daily prep</div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Fast</div>
                <div className="text-gray-600">Quick service</div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Pro</div>
                <div className="text-gray-600">Clean UI</div>
              </div>
            </div>
          </div>

          {/* Featured card */}
          <div className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6">
            <div className="rounded-2xl border bg-white p-6">
              <div className="text-sm font-semibold text-gray-500">
                Today’s Highlight
              </div>
              <h2 className="mt-2 text-2xl font-bold">Chef’s Special Burger</h2>
              <p className="mt-2 text-gray-600">
                Juicy beef, melted cheese, crispy lettuce, and our house sauce.
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">$9.99</span>
                <Link
                  href="/menu"
                  className="rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
                >
                  See Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-extrabold">Popular Picks</h2>
          <p className="mt-2 text-gray-600">
            Customer favorites — simple, tasty, and always available.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { name: "Margherita Pizza", desc: "Classic tomato & mozzarella", price: "$8.50" },
              { name: "Chicken Burger", desc: "Crispy chicken, house sauce", price: "$7.00" },
              { name: "Pasta Alfredo", desc: "Creamy parmesan sauce", price: "$9.00" },
            ].map((x) => (
              <div key={x.name} className="rounded-3xl border p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold">{x.name}</h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                    {x.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{x.desc}</p>
                <Link
                  href="/menu"
                  className="mt-4 inline-block rounded-2xl bg-black px-4 py-2 text-white hover:opacity-90"
                >
                  Order
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
