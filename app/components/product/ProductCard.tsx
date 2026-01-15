"use client"
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react'
import { useState } from 'react'

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white rounded-md overflow-hidden hover:shadow-md transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative h-56 bg-gray-50 overflow-hidden">
        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
            New
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
            -{product.discount}%
          </span>
        )}

        {/* Action Buttons */}
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
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
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