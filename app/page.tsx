import Link from "next/link";

const picks = [
  { name: "Truffle Burger", desc: "House patty, truffle aioli, aged cheddar", price: "$12.90" },
  { name: "Margherita", desc: "San Marzano, mozzarella, basil, olive oil", price: "$9.50" },
  { name: "Alfredo Pasta", desc: "Creamy parmesan, grilled chicken option", price: "$11.00" },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open today • Premium taste • Fast service
            </div>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Premium dining,
              <span className="block text-white/70">modern experience.</span>
            </h1>

            <p className="max-w-xl text-white/70">
              A clean, high-end restaurant website. Browse categories, see featured dishes, and
              order with a smooth experience.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-black hover:opacity-90 transition"
              >
                Explore Menu
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Book / Contact
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-semibold">Fresh</div>
                <div className="text-white/60">Daily prep</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-semibold">Fast</div>
                <div className="text-white/60">Quick order</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-semibold">Premium</div>
                <div className="text-white/60">Clean design</div>
              </div>
            </div>
          </div>

          {/* Featured Card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
              <div className="rounded-2xl border border-white/10 bg-[#0B0D12] p-6">
                <div className="text-xs font-semibold text-white/50">Today’s Highlight</div>
                <h2 className="mt-2 text-2xl font-extrabold">Chef’s Special</h2>
                <p className="mt-2 text-white/70">
                  Tender beef, melted cheese, crisp lettuce — with a house sauce that hits.
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-extrabold">$9.99</span>
                  <Link
                    href="/menu"
                    className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
                  >
                    See Menu
                  </Link>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {picks.map((p) => (
                  <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-xs font-semibold text-white/60">{p.price}</div>
                    </div>
                    <div className="mt-2 text-xs text-white/60">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold">Popular Picks</h2>
              <p className="mt-2 text-white/60">Customer favorites — clean and always available.</p>
            </div>
            <Link
              href="/menu"
              className="hidden rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition md:inline-block"
            >
              View full menu
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {picks.map((x) => (
              <div key={x.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold">{x.name}</h3>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80">
                    {x.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/60">{x.desc}</p>
                <Link
                  href="/menu"
                  className="mt-5 inline-block w-full rounded-2xl bg-white px-4 py-3 text-center font-semibold text-black hover:opacity-90 transition"
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
