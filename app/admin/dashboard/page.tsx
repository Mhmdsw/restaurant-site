"use client";

import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">Dashboard</h1>
          <Link href="/" className="rounded-2xl border px-4 py-2 hover:bg-gray-50">
            Home
          </Link>
        </div>

        <p className="mt-3 text-gray-600">Welcome Admin ✅</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border p-6">
            <h2 className="text-lg font-bold">Menu Items</h2>
            <p className="mt-2 text-sm text-gray-600">Add / edit dishes later.</p>
          </div>

          <div className="rounded-3xl border p-6">
            <h2 className="text-lg font-bold">Categories</h2>
            <p className="mt-2 text-sm text-gray-600">Organize your menu.</p>
          </div>

          <div className="rounded-3xl border p-6">
            <h2 className="text-lg font-bold">Orders</h2>
            <p className="mt-2 text-sm text-gray-600">View customer orders.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
