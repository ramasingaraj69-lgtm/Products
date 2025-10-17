import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Posters from './components/Posters'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/productSlice'
import "./index.css";
import "./App.css";
export default function App() {
  const [modalContent, setModalContent] = useState(null)
  const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist.items)
  const cart = useSelector(state => state.cart.items)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const renderModal = () => {
    switch (modalContent) {
      case 'profile':
        return (
          <div className="bg-blue-700 text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Profile</h3>
            <p>Profile info will appear here.</p>
          </div>
        )
      case 'about':
        return (
          <div className="bg-blue-700 text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p>TwoKJeans — built with ❤ and React.</p>
          </div>
        )
      case 'wishlist':
        return (
          <div className="bg-blue-700 text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Wishlist ({wishlist.length})
            </h3>
            {wishlist.length ? (
              wishlist.map(item => (
                <div
                  key={item._id || item.id}
                  className="flex justify-between border-b border-blue-400 py-2"
                >
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))
            ) : (
              <p>No items in wishlist.</p>
            )}
          </div>
        )
      case 'cart':
        return (
          <div className="bg-blue-700 text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              My Cart ({cart.length})
            </h3>
            {cart.length ? (
              cart.map(item => (
                <div
                  key={item._id || item.id}
                  className="flex justify-between border-b border-blue-400 py-2"
                >
                  <span>{item.name}</span>
                  <span>
                    ₹{item.price} × {item.qty}
                  </span>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar onOpen={name => setModalContent(name)} />
      <main className="flex-1 container mx-auto p-4">
        <Posters />
        <h2 className="text-2xl font-semibold mt-6 mb-4">Product Catalog</h2>
        <ProductGrid />
      </main>
      <Footer onOpen={name => setModalContent(name)} />
      <Modal open={!!modalContent} onClose={() => setModalContent(null)}>
        {renderModal()}
      </Modal>
    </div>
  )
}
