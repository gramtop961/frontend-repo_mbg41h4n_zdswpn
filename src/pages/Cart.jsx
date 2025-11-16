import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeItem, updateQuantity, totals } = useCart()

  return (
    <main className="bg-black">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Your Bag</h1>
        <p className="mt-2 text-white/60">A minimal, distraction‑free checkout experience.</p>
        <div className="mt-8 rounded-3xl bg-black border border-white/10 shadow-sm p-6">
          {items.length === 0 ? (
            <p className="text-white/60">Your cart is empty. Add a product to get started.</p>
          ) : (
            <div className="space-y-6">
              {items.map((it) => (
                <div key={it.product_id} className="flex items-center gap-4">
                  <img src={it.image} alt={it.name} className="w-20 h-20 object-contain rounded-xl bg-black border border-white/10" />
                  <div className="flex-1">
                    <p className="text-white">{it.name}</p>
                    <p className="text-sm text-white/60">{it.storage} {it.color ? `• ${it.color}` : ''} {it.deliveryDate ? `• ${it.deliveryDate}` : ''}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <button onClick={() => updateQuantity(it.product_id, it.quantity - 1)} className="px-2 py-1 border border-white/20 rounded-lg text-white">-</button>
                      <span className="text-white/80">{it.quantity}</span>
                      <button onClick={() => updateQuantity(it.product_id, it.quantity + 1)} className="px-2 py-1 border border-white/20 rounded-lg text-white">+</button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white">${(it.price * it.quantity).toFixed(2)}</p>
                    <button onClick={() => removeItem(it.product_id)} className="mt-2 text-sm text-white/60 hover:text-white">Remove</button>
                  </div>
                </div>
              ))}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <p className="text-white/80">Subtotal</p>
                <p className="text-white">${totals.subtotal.toFixed(2)}</p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-8 flex gap-3">
          <a href="/" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-2.5 text-sm tracking-wide hover:bg-white hover:text-black transition-colors">Continue Shopping</a>
          <a href="/checkout" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-2.5 text-sm tracking-wide hover:bg-white hover:text-black transition-colors">Checkout</a>
        </div>
      </section>
    </main>
  )
}
