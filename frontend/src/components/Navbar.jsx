import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../redux/productSlice'

export default function Navbar({ onOpen }) {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleSearch = e => {
    setSearch(e.target.value)
    dispatch(setSearchTerm(e.target.value))
  }

  return (
    <header className="flex flex-wrap justify-between items-center px-6 py-3 bg-white shadow sticky top-0 z-50 gap-3">
      {/* Logo and Nav Links */}
      <div className="flex items-center gap-4">
        <img src="/src/assets/logo.jpg" alt="logo" className="h-10" />
        <nav className="flex gap-4">
          <button
            className="hover:text-blue-600"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </button>
          <button className="hover:text-blue-600" onClick={() => onOpen('about')}>
            About Us
          </button>
          <button className="hover:text-blue-600" onClick={() => onOpen('profile')}>
            Profile
          </button>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1 w-full sm:w-72">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
          className="bg-transparent outline-none flex-1 text-sm"
        />
        <span className="text-gray-500">🔍</span>
      </div>
    </header>
  )
}