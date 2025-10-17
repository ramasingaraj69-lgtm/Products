import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { addToWishlist } from '../redux/wishlistSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <div className="border rounded-xl p-3 flex flex-col gap-2 bg-white hover:shadow-md transition">
      <img
        src={product.imageUrl || '/assets/placeholder.jpg'}
        alt={product.name}
        className="rounded-md h-60 w-full object-cover"
      />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">
        {product.description}
      </p>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-blue-700">₹{product.price}</span>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 border rounded hover:bg-gray-100"
            onClick={() => dispatch(addToWishlist(product))}
          >
            ♡
          </button>
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => dispatch(addToCart(product))}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}