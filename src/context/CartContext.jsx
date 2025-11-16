import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('yots_cart')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('yots_cart', JSON.stringify(items))
  }, [items])

  const addItem = (item) => {
    setItems((prev) => {
      const idx = prev.findIndex((it) => it.product_id === item.product_id && it.storage === item.storage && it.color === item.color && it.deliveryDate === item.deliveryDate)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + item.quantity }
        return copy
      }
      return [...prev, item]
    })
  }

  const removeItem = (product_id) => {
    setItems((prev) => prev.filter((it) => it.product_id !== product_id))
  }

  const updateQuantity = (product_id, qty) => {
    setItems((prev) => prev.map((it) => (it.product_id === product_id ? { ...it, quantity: Math.max(1, qty) } : it)))
  }

  const clear = () => setItems([])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0)
    const shipping = items.length > 0 ? 0 : 0
    const total = subtotal + shipping
    return { subtotal, shipping, total }
  }, [items])

  const value = { items, addItem, removeItem, updateQuantity, clear, totals }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
