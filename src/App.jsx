import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import TradeIn from './pages/TradeIn'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/new" element={<Shop category="new" />} />
        <Route path="/shop/preowned" element={<Shop category="preowned" />} />
        <Route path="/shop/accessories" element={<Shop category="accessories" />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/trade-in" element={<TradeIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
