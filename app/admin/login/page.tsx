"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Demo: go to dashboard مباشرة (بعدها منعمل login الحقيقي)
    router.push("/admin/dashboard");
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-md px-4 py-16">
        <h1 className="text-3xl font-extrabold">Admin Login</h1>
        <p className="mt-2 text-sm text-gray-600">
          Sign in to manage menu items and orders.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-3 rounded-3xl border p-6">
          <input
            className="w-full rounded-2xl border px-4 py-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <input
            className="w-full rounded-2xl border px-4 py-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />

          <button className="w-full rounded-2xl bg-black px-4 py-3 text-white hover:opacity-90">
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
