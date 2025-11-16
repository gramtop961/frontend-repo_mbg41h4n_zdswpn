export default function Cart() {
  return (
    <main className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900">Your Bag</h1>
        <p className="mt-2 text-gray-500">A minimal, distraction‑free checkout experience.</p>
        <div className="mt-8 rounded-3xl bg-white border border-gray-100 shadow-sm p-6">
          <p className="text-gray-500">Your cart is empty. Add a product to get started.</p>
        </div>
        <div className="mt-8 flex gap-3">
          <a href="/" className="inline-flex items-center rounded-full border border-gray-300 text-gray-900 px-5 py-2.5 text-sm tracking-wide hover:bg-gray-50 transition-colors">Continue Shopping</a>
          <a href="/checkout" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm tracking-wide hover:bg-black transition-colors">Checkout</a>
        </div>
      </section>
    </main>
  )
}
