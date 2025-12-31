import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">Contact</h1>
          <Link href="/" className="text-sm underline">
            Back
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border p-6">
            <h2 className="text-lg font-bold">Restaurant Info</h2>
            <p className="mt-2 text-sm text-gray-600">Phone: +961 XX XXX XXX</p>
            <p className="mt-1 text-sm text-gray-600">Address: Beirut, Lebanon</p>

            <a
              className="mt-4 inline-block rounded-2xl bg-black px-5 py-3 text-white hover:opacity-90"
              href="https://wa.me/96100000000"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="rounded-3xl border p-6">
            <h2 className="text-lg font-bold">Send a message</h2>
            <form className="mt-4 space-y-3">
              <input
                className="w-full rounded-2xl border px-4 py-3"
                placeholder="Your name"
              />
              <input
                className="w-full rounded-2xl border px-4 py-3"
                placeholder="Phone"
              />
              <textarea
                className="w-full rounded-2xl border px-4 py-3"
                placeholder="Message"
                rows={4}
              />
              <button
                type="button"
                className="w-full rounded-2xl bg-black px-4 py-3 text-white hover:opacity-90"
              >
                Send (demo)
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
