import React from 'react'

export default function Footer({ onOpen }) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 bg-white p-3 rounded-2xl shadow-lg z-50">
      <button
        className="px-4 py-2 border rounded-lg hover:bg-gray-100"
        onClick={() => onOpen('wishlist')}
      >
        Wishlist
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={() => onOpen('cart')}
      >
        My Cart
      </button>
    </div>
  )
}