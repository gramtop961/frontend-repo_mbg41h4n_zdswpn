export default function Checkout() {
  return (
    <main className="bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900">Checkout</h1>
        <p className="mt-2 text-gray-500">Enter your details to complete your order.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-6">
            <div className="space-y-4">
              <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900/5" placeholder="Full name" />
              <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900/5" placeholder="Email" />
              <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900/5" placeholder="Address" />
              <div className="grid grid-cols-2 gap-3">
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900/5" placeholder="City" />
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900/5" placeholder="Postal code" />
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Order total</p>
              <p className="text-gray-900 font-medium">$0.00</p>
            </div>
            <button className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm tracking-wide hover:bg-black transition-colors">
              Place Order
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
