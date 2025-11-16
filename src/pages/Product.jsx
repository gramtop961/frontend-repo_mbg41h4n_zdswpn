import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [deliveryDate, setDeliveryDate] = useState('')
  const { addItem } = useCart()

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${baseUrl}/api/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    load()
  }, [id])

  if (!product) return <div className="text-center text-white/60 py-16">Loading…</div>

  const addToCart = () => {
    addItem({
      product_id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images?.[0],
      storage: product.storage,
      color: product.color,
      deliveryDate,
    })
    alert('Added to cart')
  }

  return (
    <main className="bg-black">
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-black border border-white/10 p-6">
            <img src={product.images?.[0]} alt={product.name} className="w-full h-auto object-contain grayscale" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">{product.name}</h1>
            <p className="mt-2 text-white/60">{product.storage ? `${product.storage} • ` : ''}{product.color || ''}</p>
            {product.condition && (
              <p className="mt-2 text-sm text-white/60">Condition: {product.condition}{product.grade ? ` (Grade ${product.grade})` : ''}</p>
            )}
            <p className="mt-6 text-2xl text-white">${product.price.toFixed(2)}</p>

            <div className="mt-6">
              <label className="block text-sm text-white/80 mb-2">Select delivery date</label>
              <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} className="bg-black text-white border border-white/20 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={addToCart} className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition-colors">
                Add to Cart
              </button>
              <a href="/cart" className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition-colors">
                Go to Cart
              </a>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium tracking-tight text-white">Compare</h3>
              <p className="mt-2 text-white/60">Compare storage, color, and condition against other models to choose what fits best.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
