import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurant Site",
  description: "Modern restaurant website",
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          Restaurant
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link className="hover:underline" href="/menu">Menu</Link>
          <Link className="hover:underline" href="/contact">Contact</Link>
          <Link
            href="/admin/login"
            className="rounded-full border px-3 py-1 hover:bg-gray-50"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Restaurant</span>
          <span className="text-gray-400">Built with Next.js • Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
