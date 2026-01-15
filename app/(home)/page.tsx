// app/(home)/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Shield, 
  Truck, 
  RefreshCw, 
  Headphones,
  Star,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Tag
} from 'lucide-react'
import { Button } from '../components/ui/button'
import ProductCard from '../components/product/ProductCard'


// Mock data
const featuredProducts = [
  {
    id: 1,
    name: "Classic Leather Armchair",
    description: "Premium leather armchair with walnut finish",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    category: "Furniture",
    rating: 4.8,
    reviews: 124,
    isNew: true
  },
  {
    id: 2,
    name: "Minimalist Desk Lamp",
    description: "LED desk lamp with adjustable brightness",
    price: 89,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w-800&auto=format&fit=crop",
    category: "Lighting",
    rating: 4.5,
    reviews: 89,
    isSale: true
  },
  {
    id: 3,
    name: "Ceramic Dinner Set",
    description: "16-piece ceramic dinner set, dishwasher safe",
    price: 149,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop",
    category: "Kitchen",
    rating: 4.7,
    reviews: 56
  },
  {
    id: 4,
    name: "Wool Blend Throw Blanket",
    description: "Soft wool blend blanket, all seasons",
    price: 79,
    image: "https://images.unsplash.com/photo-1573284080745-258a95e3b3d6?w=800&auto=format&fit=crop",
    category: "Home",
    rating: 4.9,
    reviews: 203,
    isNew: true
  }
]

const categories = [
  { name: "Furniture", count: 245, image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&auto=format&fit=crop" },
  { name: "Lighting", count: 189, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop" },
  { name: "Kitchen", count: 312, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop" },
  { name: "Decor", count: 156, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop" },
  { name: "Bedding", count: 98, image: "https://images.unsplash.com/photo-1573284080745-258a95e3b3d6?w=600&auto=format&fit=crop" },
  { name: "Outdoor", count: 76, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop" }
]

const features = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Free Shipping",
    description: "On orders over $99"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "2-Year Warranty",
    description: "On all products"
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "30-Day Returns",
    description: "Hassle-free returns"
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Dedicated customer service"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    content: "The quality of furniture is exceptional. My clients are always impressed!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&auto=format&fit=crop&q=60"
  },
  {
    name: "Michael Chen",
    role: "Home Owner",
    content: "Best shopping experience! Fast delivery and premium quality products.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60"
  },
  {
    name: "Emily Rodriguez",
    role: "Architect",
    content: "Perfect blend of modern design and classic elegance. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60"
  }
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const heroSlides = [
    {
      title: "Classic Elegance, Modern Comfort",
      subtitle: "Discover timeless furniture pieces for your home",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&auto=format&fit=crop",
      cta: "Shop Collection",
      color: "from-blue-900/70 to-blue-700/50"
    },
    {
      title: "Summer Sale Up to 50% Off",
      subtitle: "Limited time offer on premium home essentials",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1600&auto=format&fit=crop",
      cta: "View Deals",
      color: "from-purple-900/70 to-purple-700/50"
    },
    {
      title: "New Arrivals",
      subtitle: "Fresh collection for modern living spaces",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&auto=format&fit=crop",
      cta: "Explore Now",
      color: "from-emerald-900/70 to-emerald-700/50"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero Carousel */}
      <section className="relative h-[90vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`} />
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: currentSlide === index ? 1 : 0 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl text-white"
                >
                  <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 opacity-90">
                    {slide.subtitle}
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our curated collections designed for modern living
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {categories.map((category, index) => (
              <CategoryCard key={index} category={category} index={index} />
            ))} */}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold">Featured Products</h2>
              <p className="text-gray-600 mt-2">Curated selection of our best sellers</p>
            </div>
            <Button variant="outline" className="rounded-full px-6">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <Tag className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-5xl font-serif font-bold mb-4">
            End of Season Sale
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Up to 50% off on premium furniture and home decor. Limited time offer!
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold">02</div>
              <div className="text-sm opacity-75">Days</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold">18</div>
              <div className="text-sm opacity-75">Hours</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold">45</div>
              <div className="text-sm opacity-75">Minutes</div>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
          >
            Shop Sale
            <ShoppingBag className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Trusted by thousands of happy customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 text-lg mb-8">
              Subscribe to our newsletter for exclusive offers and design tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="px-8 py-4 rounded-full text-lg">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              By subscribing, you agree to our Privacy Policy
            </p>
          </div>
        </div>
      </section>
    </>
  )
}