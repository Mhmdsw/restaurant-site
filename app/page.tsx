import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Restaurant
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <Link href="/menu" className="hover:underline">Menu</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link
              href="/admin/login"
              className="rounded-full border px-3 py-1 hover:bg-gray-50"
            >
              Admin
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            A modern restaurant website — fast, clean, and professional.
          </h1>
          <p className="text-gray-600">
            Browse the menu, discover categories, and place orders easily. Built
            with Next.js and ready for Vercel deployment.
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
              <div className="text-gray-600">Daily menu</div>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="font-semibold">Fast</div>
              <div className="text-gray-600">Quick browsing</div>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="font-semibold">Premium</div>
              <div className="text-gray-600">Pro design</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6">
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-sm font-semibold text-gray-500">Today’s Highlight</div>
            <h2 className="mt-2 text-2xl font-bold">Chef’s Special Burger</h2>
            <p className="mt-2 text-gray-600">
              Juicy beef, melted cheese, fresh lettuce, and our house sauce.
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
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Restaurant. Built for Vercel.
        </div>
      </footer>
    </main>
  );
}
