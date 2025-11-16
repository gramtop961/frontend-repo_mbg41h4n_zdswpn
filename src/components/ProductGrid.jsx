import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductCard({ p }) {
  return (
    <a href={`/product/${p.id}`} className="group block">
      <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-black border border-white/10 shadow-[0_10px_40px_rgba(255,255,255,0.06)] overflow-hidden">
        <div className="aspect-[3/4] bg-black">
          <img src={p.images?.[0]} alt={p.name} className="w-full h-full object-contain grayscale" />
        </div>
        <div className="p-5 space-y-1.5">
          <h3 className="text-white font-medium tracking-tight">{p.name}</h3>
          <p className="text-sm text-white/60">
            {p.storage ? `${p.storage} • ` : ''}{p.color || ''}{p.condition ? ` • ${p.condition}` : ''}
          </p>
          <p className="text-white">${p.price.toFixed(2)}</p>
        </div>
      </motion.div>
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
      <div className="text-center text-white/60 py-16">Loading products…</div>
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
