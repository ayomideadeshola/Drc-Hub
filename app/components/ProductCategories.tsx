"use client"

import { useRef, useEffect, useState } from "react"
import { Smartphone, Headphones, Laptop, TabletSmartphone, Watch, Package } from "lucide-react"

const categories = [
  { id: 1, name: "Smartphones", icon: Smartphone, count: "200+ Products", bgColor: "bg-red-50", iconColor: "text-red-600", hoverColor: "hover:bg-red-100" },
  { id: 2, name: "Audio Devices", icon: Headphones, count: "150+ Products", bgColor: "bg-blue-50", iconColor: "text-blue-600", hoverColor: "hover:bg-blue-100" },
  { id: 3, name: "Laptops & PCs", icon: Laptop, count: "80+ Products", bgColor: "bg-green-50", iconColor: "text-green-600", hoverColor: "hover:bg-green-100" },
  { id: 4, name: "Tablets", icon: TabletSmartphone, count: "60+ Products", bgColor: "bg-purple-50", iconColor: "text-purple-600", hoverColor: "hover:bg-purple-100" },
  { id: 5, name: "Smart Watches", icon: Watch, count: "100+ Products", bgColor: "bg-amber-50", iconColor: "text-amber-600", hoverColor: "hover:bg-amber-100" },
  { id: 6, name: "Accessories", icon: Package, count: "300+ Products", bgColor: "bg-cyan-50", iconColor: "text-cyan-600", hoverColor: "hover:bg-cyan-100" },
]

function CategoryCard({ category, index }) {
  const Icon = category.icon
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
      className={`flex-shrink-0 w-64 ${category.bgColor} ${category.hoverColor} rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 cursor-pointer group`}
      style={{
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`mb-4 p-4 rounded-full ${category.bgColor.replace("50", "100")} transition-all duration-300`}
        style={{
          transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
        }}
      >
        <Icon className={`h-8 w-8 ${category.iconColor}`} />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
      <p className="text-sm text-gray-500">{category.count}</p>

      <div
        className="mt-4 text-red-600 text-sm font-medium transition-opacity duration-300"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        Browse Products →
      </div>
    </a>
  )
}

function MarqueeContent({ categories }) {
  return (
    <>
      {categories.map((category, index) => (
        <CategoryCard key={`${category.id}-${index}`} category={category} index={index} />
      ))}
    </>
  )
}

export default function ProductCategories() {
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  const xPos = useRef(0)
  const [isPaused, setIsPaused] = useState(false)
  
  const speed = 0.5 // pixels per frame (adjust for speed)

  useEffect(() => {
    const animate = () => {
      if (!containerRef.current || isPaused) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      xPos.current -= speed

      // Get the width of one set of categories
      const cardWidth = 264 // 256px width + 24px gap
      const setWidth = cardWidth * categories.length

      // Reset position for infinite loop
      if (Math.abs(xPos.current) >= setWidth) {
        xPos.current = 0
      }

      containerRef.current.style.transform = `translateX(${xPos.current}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused])

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop By <span className="text-red-600">Categories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of premium tech products from top brands worldwide
          </p>
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={containerRef}
            className="flex gap-6 w-max"
            style={{ transition: 'none' }}
          >
            <MarqueeContent categories={categories} />
            <MarqueeContent categories={categories} />
            <MarqueeContent categories={categories} />
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View All Categories
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}