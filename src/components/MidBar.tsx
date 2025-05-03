import './MidBar.css'


// MidBar.tsx
import { FaMapMarkedAlt, FaUsers, FaHeart, FaStar } from 'react-icons/fa'

const features = [
  {
    icon: <FaMapMarkedAlt className="text-blue-500 text-3xl mb-4" />,
    title: 'Explore Places',
    description: 'Discover hidden gems and local favorites.',
  },
  {
    icon: <FaUsers className="text-green-500 text-3xl mb-4" />,
    title: 'Meet Travellers',
    description: 'Connect with other people who love to roam.',
  },
  {
    icon: <FaHeart className="text-pink-500 text-3xl mb-4" />,
    title: 'Save Favorites',
    description: 'Keep your favorite destinations in one place.',
  },
  {
    icon: <FaStar className="text-yellow-400 text-3xl mb-4" />,
    title: 'Top Rated',
    description: 'Check out what’s trending among fellow travellers.',
  },
]

export default function MidBar() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-60xl mx-auto px-40">
        <h2 className="text-3xl font-bold text-center mb-12">Why Use Traveller?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow text-center"
            >
              {f.icon}
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  )
}

  