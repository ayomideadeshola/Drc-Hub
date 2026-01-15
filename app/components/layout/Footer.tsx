import { 
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div className="text-xl font-bold">
                <span className="text-white">ELEGANT</span>
                <span className="text-red-600">HOME</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium home furnishings for modern living.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 active:scale-95">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 active:scale-95">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 active:scale-95">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 active:scale-95">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Shop</h3>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Sale', 'Collections'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-red-600 transition-all mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Help</h3>
            <ul className="space-y-3">
              {['Contact', 'Shipping', 'Returns', 'Track Order'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-red-600 transition-all mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Get exclusive offers and updates</p>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-red-600 text-white placeholder-gray-500 transition-colors"
                />
              </div>
              <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition-all duration-300 active:scale-95 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@eleganthome.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2026 ElegantHome. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}