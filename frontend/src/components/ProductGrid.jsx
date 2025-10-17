import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const { filtered, status, error } = useSelector(s => s.products)

  if (status === 'loading')
    return <div className="text-center py-10">Loading...</div>
  if (status === 'failed')
    return <div className="text-center text-red-600">{error}</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filtered.length ? (
        filtered.map(p => <ProductCard key={p._id || p.id} product={p} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products found.
        </p>
      )}
    </div>
  )
}