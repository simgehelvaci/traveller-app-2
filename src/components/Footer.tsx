import './Footer.css'

// Footer.tsx
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-500">traveller.</h3>
          <p className="text-sm">
            Discover, save, and share your travel adventures with a global community.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-md font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-md font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaFacebook className="hover:text-blue-600" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-500" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-400">
        &copy; {new Date().getFullYear()} traveller. All rights reserved.
      </div>
    </footer>
  )
}

