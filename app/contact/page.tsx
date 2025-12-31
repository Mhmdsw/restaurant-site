export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">Contact</h1>
      <p className="mt-2 text-gray-600">We’d love to hear from you.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border p-6">
          <h2 className="text-lg font-bold">Restaurant Info</h2>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p><span className="font-semibold text-gray-900">Phone:</span> +961 XX XXX XXX</p>
            <p><span className="font-semibold text-gray-900">Address:</span> Beirut, Lebanon</p>
            <p><span className="font-semibold text-gray-900">Hours:</span> 12:00 PM – 12:00 AM</p>
          </div>

          <a
            className="mt-5 inline-block w-full rounded-2xl bg-black px-4 py-3 text-center text-white hover:opacity-90"
            href="https://wa.me/96100000000"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </div>

        <div className="rounded-3xl border p-6">
          <h2 className="text-lg font-bold">Send a Message</h2>
          <form className="mt-4 space-y-3">
            <input className="w-full rounded-2xl border px-4 py-3" placeholder="Your name" />
            <input className="w-full rounded-2xl border px-4 py-3" placeholder="Phone" />
            <textarea className="w-full rounded-2xl border px-4 py-3" placeholder="Message" rows={4} />
            <button
              type="button"
              className="w-full rounded-2xl bg-black px-4 py-3 text-white hover:opacity-90"
            >
              Send (demo)
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
