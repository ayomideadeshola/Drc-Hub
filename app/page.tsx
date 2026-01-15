"use client"
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import H1 from '../public/asset/hero1.jpg'
import H2 from '../public/asset/hero2.jpg'
import H3 from '../public/asset/hero3.jpg'
import H4 from '../public/asset/hero4.jpg'
import H5 from '../public/asset/hero5.jpg'
import H6 from '../public/asset/hero6.jpg'
import Image from "next/image"
import ProductCategories from './components/ProductCategories'
import FeaturedProducts from './components/FeaturedProducts'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "PREMIUM TECH",
      subtitle: "UNBEATABLE DEALS",
      tagline: "Original Products with Exclusive Discounts - Limited Time Only",
      bgColor: "from-red-900 to-red-800",
      image: H1,
      badge: "Flash Sale"
    },
    {
      title: "SAMSUNG GALAXY",
      subtitle: "Z FOLD 7 ULTRA",
      tagline: "Experience the Future with Free TRA Service & Warranty Extension",
      bgColor: "from-red-900 to-red-800",
      image: H2,
      badge: "Flagship Launch"
    },
    {
      title: "NEW YEAR",
      subtitle: "SUPER SAVINGS",
      tagline: "Up to 40% Off on Top Brands - Welcome 2028 in Style",
      bgColor: "from-red-900 to-red-800",
      image: H3,
      badge: "Season Special"
    },
    {
      title: "NEW YEAR",
      subtitle: "SUPER SAVINGS",
      tagline: "Up to 40% Off on Top Brands - Welcome 2028 in Style",
      bgColor: "from-red-900 to-red-800",
      image: H4,
      badge: "Season Special"
    },
    {
      title: "NEW YEAR",
      subtitle: "SUPER SAVINGS",
      tagline: "Up to 40% Off on Top Brands - Welcome 2028 in Style",
      bgColor: "from-red-900 to-red-800",
      image: H5,
      badge: "Season Special"
    },
    {
      title: "NEW YEAR",
      subtitle: "SUPER SAVINGS",
      tagline: "Up to 40% Off on Top Brands - Welcome 2028 in Style",
      bgColor: "from-red-900 to-red-800",
      image: H6,
      badge: "Season Special"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <>
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor}`}>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url(${slide.image.src})` }}
            />
          </div>

          <div className="relative h-full flex items-center justify-center px-6">
            <div className="max-w-4xl w-full mx-auto text-center">
              <div
                className={`transition-all duration-700 delay-300 ${currentSlide === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }`}
              >


                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4">
                  <span className="text-white drop-shadow-lg">{slide.title}</span>
                  <br />
                  <span className="text-red-200 drop-shadow-lg">{slide.subtitle}</span>
                </h1>

                <p className="text-white/90 text-lg md:text-2xl font-light max-w-2xl mx-auto mb-8 leading-relaxed">
                  {slide.tagline}
                </p>

                <button className="mt-4 flex items-center justify-center gap-2 mx-auto cursor-pointer bg-white hover:bg-red-50 text-red-700 hover:text-red-800 px-10 py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  Explore Collection
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-10 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-10 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 rounded-full ${currentSlide === index
                ? 'bg-white w-10 h-2'
                : 'bg-white/50 w-2 h-2 hover:bg-white/80'
              }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
    <ProductCategories />
    <FeaturedProducts />  
    </>
  )
}