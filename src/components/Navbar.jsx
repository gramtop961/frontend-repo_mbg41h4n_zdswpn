import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm tracking-wide transition-colors ${
      isActive ? 'text-white' : 'text-white/60 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
              <Menu className="w-5 h-5 text-white" />
            </button>
            <Link to="/" className="font-semibold tracking-tight text-white text-lg">
              YOTS TECH-SHOP
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/shop/new" className={linkClass}>Shop New</NavLink>
            <NavLink to="/shop/preowned" className={linkClass}>Pre‑Owned</NavLink>
            <NavLink to="/shop/accessories" className={linkClass}>Accessories</NavLink>
            <NavLink to="/trade-in" className={linkClass}>Trade‑In</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative group">
              <ShoppingBag className="w-5 h-5 text-white" />
              <span className="sr-only">Cart</span>
            </Link>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <nav className="max-w-6xl mx-auto px-4 py-2 flex flex-col">
            <NavLink to="/shop/new" className={linkClass} onClick={() => setOpen(false)}>Shop New</NavLink>
            <NavLink to="/shop/preowned" className={linkClass} onClick={() => setOpen(false)}>Pre‑Owned</NavLink>
            <NavLink to="/shop/accessories" className={linkClass} onClick={() => setOpen(false)}>Accessories</NavLink>
            <NavLink to="/trade-in" className={linkClass} onClick={() => setOpen(false)}>Trade‑In</NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
