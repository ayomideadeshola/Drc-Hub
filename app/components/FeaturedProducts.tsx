"use client"
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
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
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button 
            className="p-2 rounded-full bg-white text-gray-700 shadow-md hover:scale-110 hover:bg-gray-100 transition-all"
            aria-label="Quick view"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Product Image */}
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

      {/* Product Details */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[40px] group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
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

        {/* Price & Add to Cart */}
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
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Main Featured Products Component
export default function FeaturedProducts() {
  const featuredProducts = mockProducts.slice(0, 8)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Featured <span className="text-red-600">Products</span>
            </h2>
            <p className="text-gray-600">Top picks from our premium collection</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link 
              href="/products"
              className="px-6 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-50 transition-colors duration-300"
            >
              View All
            </Link>
            <Link 
              href="/products"
              className="px-6 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group"
          >
            View All Products ({mockProducts.length})
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}