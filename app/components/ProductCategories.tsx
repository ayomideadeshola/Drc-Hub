"use client"

import { useRef } from "react"
import { Smartphone, Headphones, Laptop, TabletSmartphone, Speaker, Cpu } from "lucide-react"
import { motion, useAnimationFrame } from "framer-motion"

const categories = [
  { id: 1, name: "Smartphones", icon: Smartphone, count: "200+ Products", bgColor: "bg-red-50", iconColor: "text-red-600", hoverColor: "hover:bg-red-100" },
  { id: 2, name: "Audio Devices", icon: Headphones, count: "150+ Products", bgColor: "bg-blue-50", iconColor: "text-blue-600", hoverColor: "hover:bg-blue-100" },
  { id: 3, name: "Laptops & PCs", icon: Laptop, count: "80+ Products", bgColor: "bg-green-50", iconColor: "text-green-600", hoverColor: "hover:bg-green-100" },
  { id: 4, name: "Tablets", icon: TabletSmartphone, count: "60+ Products", bgColor: "bg-purple-50", iconColor: "text-purple-600", hoverColor: "hover:bg-purple-100" },
  { id: 5, name: "Smart Watches", icon: Speaker, count: "100+ Products", bgColor: "bg-amber-50", iconColor: "text-amber-600", hoverColor: "hover:bg-amber-100" },
  { id: 6, name: "Accessories", icon: Cpu, count: "300+ Products", bgColor: "bg-cyan-50", iconColor: "text-cyan-600", hoverColor: "hover:bg-cyan-100" },
]

function MarqueeContent({ categories }) {
  return (
    <>
      {categories.map((category, index) => {
        const Icon = category.icon
        return (
          <motion.a
            key={`${category.id}-${index}`}
            href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
            className={`flex-shrink-0 w-64 ${category.bgColor} ${category.hoverColor} rounded-2xl p-6 flex flex-col items-center text-center transition-all cursor-pointer group`}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className={`mb-4 p-4 rounded-full ${category.bgColor.replace("50", "100")}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Icon className={`h-8 w-8 ${category.iconColor}`} />
            </motion.div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.count}</p>

            <motion.div
              className="mt-4 text-red-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition"
            >
              Browse Products →
            </motion.div>
          </motion.a>
        )
      })}
    </>
  )
}

export default function ProductCategories() {
  const containerRef = useRef(null)
  const x = useRef(0)
  const speed = 30 // pixels per second

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return

    const move = (delta / 1000) * speed
    x.current -= move

    const width = containerRef.current.scrollWidth / 3

    if (x.current <= -width) {
      x.current += width
    }

    containerRef.current.style.transform = `translateX(${x.current}px)`
  })

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop By <span className="text-red-600">Categories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of premium tech products from top brands worldwide
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-6 w-max will-change-transform"
          >
            <MarqueeContent categories={categories} />
            <MarqueeContent categories={categories} />
            <MarqueeContent categories={categories} />
          </div>
        </div>

        <motion.div className="text-center mt-12">
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Categories
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
