import { useState } from 'react'
import { useCart } from '../context/CartContext'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Checkout() {
  const { items, totals, clear } = useCart()
  const [loading, setLoading] = useState(false)
  const [placed, setPlaced] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address_line1: '', address_line2: '', city: '', state: '', postal_code: '', country: ''
  })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const placeOrder = async () => {
    if (items.length === 0) return
    setLoading(true)
    try {
      const payload = {
        items: items.map((it) => ({
          product_id: it.product_id,
          name: it.name,
          price: it.price,
          quantity: it.quantity,
          image: it.image,
          storage: it.storage,
          color: it.color,
        })),
        subtotal: totals.subtotal,
        shipping: totals.shipping,
        total: totals.total,
        customer: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          address_line1: form.address_line1,
          address_line2: form.address_line2 || null,
          city: form.city,
          state: form.state,
          postal_code: form.postal_code,
          country: form.country,
        }
      }
      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) {
        setPlaced(true)
        clear()
      } else {
        alert(data.detail || 'Error placing order')
      }
    } catch (e) {
      alert('Failed to place order')
    } finally {
      setLoading(false)
    }
  }

  if (placed) {
    return (
      <main className="bg-black">
        <section className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Thank you for your purchase</h1>
          <p className="mt-3 text-white/60">Your order has been received. You will receive an email confirmation shortly.</p>
          <a href="/" className="mt-8 inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition-colors">Back to Home</a>
        </section>
      </main>
    )
  }

  return (
    <main className="bg-black">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Checkout</h1>
        <p className="mt-2 text-white/60">Enter your details to complete your order.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-black border border-white/10 p-6">
            <div className="space-y-4">
              <input name="name" value={form.name} onChange={onChange} className="w-full rounded-xl bg-black text-white border border-white/20 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="Full name" />
              <input name="email" value={form.email} onChange={onChange} className="w-full rounded-xl bg-black text-white border border-white/20 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" />
              <input name="phone" value={form.phone} onChange={onChange} className="w-full rounded-xl bg-black text-white border border-white/20 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="Phone" />
              <input name="address_line1" value={form.address_line1} onChange={onChange} className="w-full rounded-xl bg-black text-white border border-white/20 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="Address line 1" />
              <input name="address_line2" value={form.address_line2} onChange={onChange} className="w-full rounded-xl bg-black text-white border border-white/20 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="Address line 2 (optional)" />
              <div className="grid grid-cols-2 gap-3">
                <input name="city" value={form.city} onChange={onChange} className="w-full rounded-xl bg-black text-white border border-white/20 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="City" />
                <input name="state" value={form.state} onChange={onChange} className="w-full rounded-xl bg-black text-white border border-white/20 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="State" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input name="postal_code" value={form.postal_code} onChange={onChange} className="w-full rounded-xl bg-black text-white border border-white/20 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="Postal code" />
                <input name="country" value={form.country} onChange={onChange} className="w-full rounded-xl bg-black text-white border border-white/20 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" placeholder="Country" />
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-black border border-white/10 p-6">
            <div className="space-y-3">
              {items.map((it) => (
                <div key={it.product_id} className="flex items-center justify-between text-white/80">
                  <span>{it.name} × {it.quantity}</span>
                  <span>${(it.price * it.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <p className="text-white/80">Subtotal</p>
                <p className="text-white">${totals.subtotal.toFixed(2)}</p>
              </div>
            </div>
            <button disabled={loading} onClick={placeOrder} className="mt-6 w-full inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition-colors disabled:opacity-50">
              {loading ? 'Placing Order…' : 'Place Order'}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
