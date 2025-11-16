import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductCard({ p }) {
  return (
    <a href={`/product/${p.id}`} className="group block">
      <div className="rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        <div className="aspect-[3/4] bg-gray-50">
          <img src={p.images?.[0]} alt={p.name} className="w-full h-full object-contain" />
        </div>
        <div className="p-5 space-y-1.5">
          <h3 className="text-gray-900 font-medium tracking-tight">{p.name}</h3>
          <p className="text-sm text-gray-500">
            {p.storage ? `${p.storage} • ` : ''}{p.color || ''}{p.condition ? ` • ${p.condition}` : ''}
          </p>
          <p className="text-gray-900">${'{'}p.price.toFixed(2){'}'}</p>
        </div>
      </div>
    </a>
  )
}

export default function ProductGrid({ category }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const url = category ? `${baseUrl}/api/products?category=${category}` : `${baseUrl}/api/products`
      const res = await fetch(url)
      const data = await res.json()
      setItems(data)
      setLoading(false)
    }
    load()
  }, [category])

  if (loading) {
    return (
      <div className="text-center text-gray-500 py-16">Loading products…</div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  )
}
