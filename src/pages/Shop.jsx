import ProductGrid from '../components/ProductGrid'

export default function Shop({ category }) {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900">
            {category === 'new' && 'Shop New iPhone'}
            {category === 'preowned' && 'Premium Pre‑Owned iPhone'}
            {category === 'accessories' && 'Accessories'}
          </h1>
          <p className="mt-2 text-gray-500">Ultra‑clean grid. Large product images. Clear labels.</p>
        </div>
        <ProductGrid category={category} />
      </section>
    </main>
  )
}
