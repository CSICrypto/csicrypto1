export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          CSI Crypto 🔍
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Cut through the noise. We filter out meme coins and hype, so you only see real projects worth your attention.
        </p>
        <a
          href="#signup"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
        >
          Join the Waitlist
        </a>
      </section>

      {/* Features / About */}
      <section className="mt-16 text-center max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Why CSI Crypto?</h2>
        <p className="text-gray-600">
          Our smart filters automatically exclude meme coins and exchange hype. You get unbiased insights into categories like
          <span className="font-semibold"> AI, GameFi, and RWA </span>—the sectors shaping the future of Web3.
        </p>
      </section>

      {/* Signup Section */}
      <section id="signup" className="mt-16 text-center max-w-md w-full">
        <h3 className="text-xl font-bold mb-2">Be the first to know</h3>
        <p className="text-gray-600 mb-4">
          Get daily insights straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-gray-500 text-sm">
        © {new Date().getFullYear()} CSI Crypto. All rights reserved.
      </footer>
    </main>
  );
}
