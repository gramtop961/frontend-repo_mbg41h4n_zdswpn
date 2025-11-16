import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  useEffect(() => {
    const img = document.getElementById('iphone-tilt')
    const onMove = (e) => {
      const rect = img.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      img.style.transform = `rotateY(${px * 10}deg) rotateX(${py * -10}deg) translateZ(0)`
    }
    img?.addEventListener('mousemove', onMove)
    return () => img?.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section ref={ref} className="bg-black">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1 style={{ opacity }} className="text-4xl md:text-6xl font-medium tracking-tight text-white">
              iPhone, elevated.
            </motion.h1>
            <motion.p style={{ opacity }} className="mt-4 text-white/60 text-lg leading-relaxed">
              Discover the latest iPhones and premium certified pre‑owned models. Ultra‑clean design. Premium quality. Only at YOTS TECH‑SHOP.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/shop/new" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-2.5 text-sm tracking-wide hover:bg-white hover:text-black transition-colors">
                Shop New
              </a>
              <a href="/shop/preowned" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-2.5 text-sm tracking-wide hover:bg-white hover:text-black transition-colors">
                Shop Pre‑Owned
              </a>
            </div>
          </div>
          <div className="relative">
            <motion.div style={{ y }} className="aspect-[4/3] w-full rounded-3xl bg-black border border-white/10 shadow-[0_20px_80px_rgba(255,255,255,0.06)] overflow-hidden perspective-1000">
              <img
                id="iphone-tilt"
                alt="iPhone hero"
                className="w-full h-full object-contain will-change-transform transition-transform duration-200 ease-out"
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=960&hei=960&fmt=jpeg&qlt=90&.v=1692893201418"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
