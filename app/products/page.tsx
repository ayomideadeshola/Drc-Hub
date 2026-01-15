'use client'

import {
  Filter,
  Grid,
  List,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  X,
  ChevronDown,
  Check
} from 'lucide-react'
import { useEffect, useRef, useState } from "react"
import { mockProducts } from '../lib/data'

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white rounded-md overflow-hidden hover:shadow-md transition-all duration-300 group">
      <div className="relative h-56 bg-gray-50 overflow-hidden">
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
            New
          </span>
        )}
        {product.isSale && product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
            -{product.discount}%
          </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-2 rounded-full ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-700'} shadow-md hover:scale-110 transition-all`}
          >
            <Heart className="h-4 w-4" fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button className="p-2 rounded-full bg-white text-gray-700 shadow-md hover:scale-110 hover:bg-gray-100 transition-all">
            <Eye className="h-4 w-4" />
          </button>
        </div>

        <div className="w-full h-full flex items-center justify-center p-4">
          {!imageError ? (
            <img
              src={product.images?.[0] || '/placeholder.jpg'}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
              No Image
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.category}
        </p>

        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[40px] group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews || 0})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-red-600">
              ₦{product.price?.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-gray-400 line-through">
                ₦{product.originalPrice?.toLocaleString()}
              </div>
            )}
          </div>
          <button
            className="bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

function ProductListCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-64 relative h-48 md:h-auto bg-gray-50">
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              New
            </span>
          )}
          {product.isSale && product.discount && (
            <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
              -{product.discount}%
            </span>
          )}
          <div className="w-full h-full flex items-center justify-center p-6">
            {!imageError ? (
              <img
                src={product.images?.[0] || '/placeholder.jpg'}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                No Image
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                {product.category}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {product.description}
              </p>
            </div>

            <div className="text-right ml-4">
              <div className="text-2xl font-bold text-red-600 mb-1">
                ₦{product.price?.toLocaleString()}
              </div>
              {product.originalPrice && (
                <div className="text-sm text-gray-400 line-through">
                  ₦{product.originalPrice?.toLocaleString()}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-2 rounded-lg ${isWishlisted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'} hover:scale-105 transition-all`}
            >
              <Heart className="h-5 w-5" fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>
            <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
              <Eye className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const categories = ['All', 'smartphones', 'cases', 'screen-protectors', 'chargers', 'power-banks', 'audio', 'watches', 'holders', 'memory', 'accessories']

  const priceRanges = [
    { label: 'Under ₦5,000', min: 0, max: 5000 },
    { label: '₦5,000 - ₦20,000', min: 5000, max: 20000 },
    { label: '₦20,000 - ₦50,000', min: 20000, max: 50000 },
    { label: 'Over ₦50,000', min: 50000, max: 999999 }
  ]

  const options = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "newest", label: "Newest" },
  ]

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const selected = options.find(o => o.value === sortBy)

  let filteredProducts = mockProducts.filter(product => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) return false
    if (priceRange) {
      const range = priceRanges.find(r => r.label === priceRange)
      if (range && (product.price < range.min || product.price > range.max)) return false
    }
    return true
  })

  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price
      case 'price-high': return b.price - a.price
      case 'rating': return b.rating - a.rating
      case 'newest': return b.isNew ? 1 : -1
      default: return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Collection</h1>
          <p className="text-lg md:text-xl opacity-90">
            Discover premium mobile accessories for every need
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-sm text-gray-700">Categories</h4>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === category ? 'bg-red-50 text-red-600 font-medium' : 'hover:bg-gray-50'}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-sm text-gray-700">Price Range</h4>
                <div className="space-y-1">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${priceRange === range.label ? 'bg-red-50 text-red-600 font-medium' : 'hover:bg-gray-50'}`}
                      onClick={() => setPriceRange(priceRange === range.label ? '' : range.label)}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setPriceRange('')
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm"
                  >
                    <Filter className="h-4 w-4" />
                    Filters
                  </button>
                  <span className="text-sm text-gray-600 font-medium">{filteredProducts.length} products</span>
                  <div className="flex border p-[2px] border-gray-200 rounded-lg">
                    <button
                      className={`p-2 cursor-pointer rounded-md ${viewMode === 'grid' ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-50'} transition-colors`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      className={`p-2 cursor-pointer rounded-md ${viewMode === 'list' ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-50'} transition-colors`}
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort:</span>

                  <div ref={ref} className="relative w-56">
                    <button
                      onClick={() => setOpen(!open)}
                      className="w-full cursor-pointer flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:border-red-400 hover:bg-white transition focus:ring-2 focus:ring-red-500"
                    >
                      {selected?.label}
                      <ChevronDown
                        className={`h-4 w-4 text-red-500 transition ${open ? "rotate-180" : ""}`}
                      />
                    </button>

                    {open && (
                      <div className="absolute z-50 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                        {options.map(option => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value)
                              setOpen(false)
                            }}
                            className={`w-full cursor-pointer flex items-center justify-between px-4 py-3 text-sm text-left hover:bg-red-50 transition
                              ${sortBy === option.value ? "bg-red-50 text-red-600 font-medium" : "text-gray-700"}
                            `}
                          >
                            {option.label}
                            {sortBy === option.value && <Check className="h-4 w-4" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {showFilters && (
                <div className="lg:hidden mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold">Filters</h4>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium mb-2">Category</h5>
                      <select
                        className="w-full border rounded-lg px-3 py-2 text-sm"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium mb-2">Price Range</h5>
                      <select
                        className="w-full border rounded-lg px-3 py-2 text-sm"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                      >
                        <option value="">All Prices</option>
                        {priceRanges.map(range => (
                          <option key={range.label} value={range.label}>{range.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-6'
            }>
              {filteredProducts.map((product) => (
                viewMode === 'grid' ? (
                  <ProductCard key={product.id} product={product} />
                ) : (
                  <ProductListCard key={product.id} product={product} />
                )
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products found matching your filters</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setPriceRange('')
                  }}
                  className="mt-4 text-red-600 hover:text-red-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}