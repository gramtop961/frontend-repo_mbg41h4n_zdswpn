import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Tile = ({ title, href, image }) => (
  <Link to={href} className="group block">
    <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-black border border-white/10 shadow-[0_10px_40px_rgba(255,255,255,0.06)] overflow-hidden">
      <div className="aspect-[3/2] bg-black">
        <img src={image} alt={title} className="w-full h-full object-contain grayscale" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium tracking-tight text-white group-hover:opacity-80">
          {title}
        </h3>
      </div>
    </motion.div>
  </Link>
)

export default function CategoryTiles() {
  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Tile
            title="Shop New iPhone"
            href="/shop/new"
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=600&hei=600&fmt=jpeg&qlt=90&.v=1693087732363"
          />
          <Tile
            title="Premium Pre‑Owned"
            href="/shop/preowned"
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=600&hei=600&fmt=jpeg&qlt=90&.v=1660795086812"
          />
          <Tile
            title="Accessories"
            href="/shop/accessories"
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHXH3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1694014870996"
          />
        </div>
      </div>
    </section>
  )
}
