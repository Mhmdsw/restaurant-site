"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      // ✅ Demo login for now (until we connect DB)
      if (!email.includes("@")) throw new Error("Enter a valid email");
      if (password.length < 4) throw new Error("Password is too short");

      // go to dashboard
      router.push("/admin/dashboard");
    } catch (ex: any) {
      setErr(ex?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#07080B] text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-2 md:items-center">
        {/* Left side */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            🔒 Secure Admin Area
          </div>

          <h1 className="text-4xl font-extrabold leading-tight">
            Admin Login
            <span className="block text-white/60">Manage menu & orders.</span>
          </h1>

          <p className="text-white/60">
            This is the control panel for your restaurant. In the next step we’ll connect a real
            database login.
          </p>

          <div className="flex gap-3">
            <Link
              href="/"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              Back to website
            </Link>
            <Link
              href="/menu"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              View menu
            </Link>
          </div>
        </div>

        {/* Right side: login card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="rounded-2xl border border-white/10 bg-[#0B0D12] p-6">
            <div className="text-sm font-semibold text-white/70">Sign in</div>

            <form onSubmit={onSubmit} className="mt-4 space-y-3">
              <input
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {err && (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {err}
                </div>
              )}

              <button
                disabled={loading}
                className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90 disabled:opacity-60 transition"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <p className="pt-2 text-xs text-white/40">
                Demo mode الآن. Database login رح نعمله بالخطوة الجاية.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
