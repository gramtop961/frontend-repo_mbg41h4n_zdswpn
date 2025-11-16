import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${baseUrl}/api/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    load()
  }, [id])

  if (!product) return <div className="text-center text-gray-500 py-16">Loading…</div>

  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-gray-50 border border-gray-100 p-6">
            <img src={product.images?.[0]} alt={product.name} className="w-full h-auto object-contain" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">{product.name}</h1>
            <p className="mt-2 text-gray-500">{product.storage ? `${product.storage} • ` : ''}{product.color || ''}</p>
            {product.condition && (
              <p className="mt-2 text-sm text-gray-500">Condition: {product.condition}{product.grade ? ` (Grade ${product.grade})` : ''}</p>
            )}
            <p className="mt-6 text-2xl text-gray-900">${'{'}product.price.toFixed(2){'}'}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm tracking-wide hover:bg-black transition-colors">
                Add to Cart
              </button>
              <a href="/cart" className="inline-flex items-center rounded-full border border-gray-300 text-gray-900 px-6 py-3 text-sm tracking-wide hover:bg-gray-50 transition-colors">
                Go to Cart
              </a>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium tracking-tight text-gray-900">Compare</h3>
              <p className="mt-2 text-gray-500">Compare storage, color, and condition against other models to choose what fits best.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
