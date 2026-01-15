"use client"
import { useState } from 'react'
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Heart,
  Phone,
  ChevronDown
} from 'lucide-react'
import Image from 'next/image'

const brands = ['Samsung', 'iPhone', 'Xiaomi', 'Tecno', 'Infinix', 'Oppo', 'Vivo', 'Huawei']

const navItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'Products', 
    href: '/products',
    hasDropdown: true,
    submenu: [
      { label: 'All Products', href: '/products' },
      { label: 'Phone Cases', href: '/products/cases' },
      { label: 'Screen Protectors', href: '/products/screen-protectors' },
      { label: 'Chargers & Cables', href: '/products/chargers' },
      { label: 'Power Banks', href: '/products/power-banks' },
      { label: 'Headphones & Earbuds', href: '/products/audio' },
      { label: 'Phone Holders', href: '/products/holders' },
      { label: 'Memory Cards', href: '/products/memory' },
      { label: 'Smart Watches', href: '/products/watches' },
      { label: 'Accessories', href: '/products/accessories' }
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Find Store', href: '/stores' },
  { label: 'Blog', href: '/blog' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartCount] = useState(3)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>

      {/* Top Bar */}
      <div className="bg-black text-white py-2.5">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-3.5 w-3.5 text-red-500" />
              <span className="hidden sm:inline leading-[120%] tracking-[1%]">Free Shipping Available & 24 Hours Fast Delivery</span>
              <span className="sm:hidden leading-[120%] tracking-[1%]">Free Shipping & Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-red-500 font-semibold leading-[120%] tracking-[1%]">Call: 08163359235</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Bar */}
      <div className="bg-white py-3 border-b border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/10 to-transparent animate-[shimmer_3s_infinite]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center space-x-8 overflow-x-auto scrollbar-hide py-1">
            {brands.map((brand, index) => (
              <a
                key={brand}
                href={`/brands/${brand.toLowerCase()}`}
                className="text-sm font-medium text-gray-800 hover:text-red-600 whitespace-nowrap transition-all duration-300 hover:scale-105 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {brand}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center">
              <button
                className="lg:hidden mr-4 p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute h-0.5 w-6 bg-black rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                  <span className={`absolute h-0.5 w-6 bg-black rounded-full top-3 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute h-0.5 w-6 bg-black rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                </div>
              </button>

              <a href="/" className="flex items-center space-x-2 group">
                <Image
                  src="/asset/logo-removebg.png"
                  alt="DrCHub Logo"
                  width={160}
                  height={60}
                  priority
                />
              </a>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products"
                  className="w-full pl-4 pr-12 py-3 border-1 border-gray-200 rounded-lg focus:outline-none focus:border-red-600 transition-all duration-300"
                />
                <button className="absolute right-0 top-0 cursor-pointer h-full px-6 bg-red-600 text-white rounded-r-lg hover:bg-red-700 flex items-center gap-2 transition-colors duration-300">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2.5 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                <Search className="h-5 w-5" />
              </button>

              <button className="hidden cursor-pointer sm:flex items-center space-x-2 p-2.5 hover:bg-gray-100 rounded-lg transition-all duration-300 group">
                <User className="h-5 w-5 text-black group-hover:text-red-600 transition-colors duration-300" />
              </button>

              <button className="hidden cursor-pointer sm:block p-2.5 hover:bg-gray-100 rounded-lg transition-all duration-300 relative group">
                <Heart className="h-5 w-5 text-black group-hover:text-red-600 transition-colors duration-300" />
              </button>

              <button className="relative cursor-pointer p-2.5 hover:bg-gray-100 rounded-lg transition-all duration-300 group">
                <ShoppingCart className="h-5 w-5 text-black group-hover:text-red-600 transition-colors duration-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className={`md:hidden overflow-hidden transition-all duration-500 ${isSearchOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pb-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-red-600"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-red-600 text-white rounded-r-lg">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="border-t py-4">
              <div className="space-y-1">
                {navItems.map((item, idx) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      className="block py-3 px-4 text-black hover:bg-gray-50 hover:text-red-600 rounded-lg font-medium transition-all duration-300 animate-slideIn"
                      onClick={(e) => {
                        if (item.hasDropdown) {
                          e.preventDefault()
                          setActiveDropdown(activeDropdown === item.label ? null : item.label)
                        } else {
                          setIsMenuOpen(false)
                        }
                      }}
                      style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'backwards' }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        {item.hasDropdown && (
                          <ChevronDown className={`h-4 w-4  transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        )}
                      </div>
                    </a>
                    
                    {/* Mobile Submenu */}
                    {item.hasDropdown && item.submenu && (
                      <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                          {item.submenu.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="block py-2 px-4 text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Navigation with Dropdown */}
      <div className="hidden lg:block bg-gray-100 mb-2 shadow-md border-b border-gray-200">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-start space-x-8 h-12">
            {navItems.map((item, index) => (
              <div key={item.label} className="relative group h-full flex items-center">
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-300 relative flex items-center space-x-1 h-full"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>

                {item.hasDropdown && item.submenu && (
                  <div
                    className={`absolute top-full left-0 z-50 mt-1 bg-white rounded-lg shadow-2xl border border-gray-200 min-w-64 transition-all duration-300 ${
                      activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-2 grid grid-cols-2 gap-1 p-2">
                      {item.submenu.map((sub, subIndex) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-300"
                          style={{ animationDelay: `${subIndex * 30}ms` }}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {index < navItems.length - 1 && (
                  <div className="h-[18px] bg-gray-200 w-[2px] ml-8"></div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}