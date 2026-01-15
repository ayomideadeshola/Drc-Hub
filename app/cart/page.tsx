// app/cart/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag,
  ArrowRight,
  Tag,
  Shield,
  Truck
} from 'lucide-react'
import { Button } from '../components/ui/button'

const cartItems = [
  {
    id: 1,
    name: "Classic Leather Armchair",
    price: 1299,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w-400&auto=format&fit=crop",
    color: "Brown",
    delivery: "Free Shipping"
  },
  {
    id: 2,
    name: "Minimalist Desk Lamp",
    price: 89,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&auto=format&fit=crop",
    color: "Black",
    delivery: "Free Shipping"
  },
  {
    id: 3,
    name: "Ceramic Dinner Set",
    price: 149,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop",
    color: "White",
    delivery: "Free Shipping"
  }
]

export default function CartPage() {
  const [items, setItems] = useState(cartItems)
  const [coupon, setCoupon] = useState('')

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 99 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{items.length} items in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {items.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Your cart is empty</h3>
                <p className="text-gray-600 mb-8">Add some items to get started!</p>
                <Button size="lg">Continue Shopping</Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/4 p-6">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <div className="flex items-center space-x-4 text-gray-600 mb-4">
                              <span>Color: {item.color}</span>
                              <span>•</span>
                              <span className="flex items-center">
                                <Truck className="h-4 w-4 mr-1" />
                                {item.delivery}
                              </span>
                            </div>
                            <div className="text-2xl font-bold">${item.price}</div>
                          </div>
                          
                          <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <div className="flex items-center border rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-2 hover:bg-gray-100"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-4 py-2">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-2 hover:bg-gray-100"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-2xl font-bold mb-2">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-600 flex items-center"
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Continue Shopping */}
            <div className="mt-8 flex justify-between items-center">
              <Button variant="outline" className="rounded-full">
                ← Continue Shopping
              </Button>
              <Button 
                variant="ghost" 
                className="text-red-500 hover:text-red-600"
                onClick={() => setItems([])}
              >
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
              
              {/* Coupon */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Tag className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">Have a coupon?</span>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 border rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <Button className="rounded-l-none">Apply</Button>
                </div>
              </div>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600' : ''}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {subtotal < 99 && (
                  <div className="text-sm text-gray-500">
                    Add ${(99 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="border-t pt-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <div className="text-right">
                    <div className="text-3xl font-bold">${total.toFixed(2)}</div>
                    <div className="text-sm text-gray-500">or 4 interest-free payments of ${(total / 4).toFixed(2)}</div>
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className="flex items-center text-sm text-gray-600 mb-6">
                <Shield className="h-4 w-4 mr-2" />
                <span>Secure checkout • 30-day returns</span>
              </div>

              {/* Checkout Button */}
              <Button 
                size="lg" 
                className="w-full rounded-full py-6 text-lg"
                disabled={items.length === 0}
              >
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-4">We accept:</p>
                <div className="flex space-x-4">
                  {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((method) => (
                    <div 
                      key={method}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}