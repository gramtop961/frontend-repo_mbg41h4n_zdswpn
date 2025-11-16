export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900">
              iPhone, elevated.
            </h1>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Discover the latest iPhones and premium certified pre‑owned models. Ultra‑clean design. Premium quality. Only at YOTS TECH‑SHOP.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/shop/new" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm tracking-wide hover:bg-black transition-colors">
                Shop New
              </a>
              <a href="/shop/preowned" className="inline-flex items-center rounded-full border border-gray-300 text-gray-900 px-5 py-2.5 text-sm tracking-wide hover:bg-gray-50 transition-colors">
                Shop Pre‑Owned
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-gray-100 to-white shadow-sm overflow-hidden">
              <img
                alt="iPhone hero"
                className="w-full h-full object-contain"
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=960&hei=960&fmt=jpeg&qlt=90&.v=1692893201418"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
