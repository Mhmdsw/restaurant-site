import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant",
  description: "Premium restaurant website",
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-full px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
    >
      {label}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#07080B] text-white">
        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07080B]/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                🍽️
              </span>
              <span className="text-lg">Restaurant</span>
            </Link>

            <nav className="flex items-center gap-1">
              <NavLink href="/menu" label="Menu" />
              <NavLink href="/contact" label="Contact" />
              <Link
                href="/admin/login"
                className="ml-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Admin
              </Link>
            </nav>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <span>© {new Date().getFullYear()} Restaurant</span>
              <span className="text-white/40">Next.js • Tailwind • Vercel</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
