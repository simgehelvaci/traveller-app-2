import './MidBar.css'
import { FaMapMarkedAlt, FaUsers, FaHeart, FaStar } from 'react-icons/fa'

const features = [
  {
    icon: <FaMapMarkedAlt className="midbar-icon text-blue-500" />,
    title: 'Explore Places',
    description: 'Discover hidden gems and local favorites.',
  },
  {
    icon: <FaUsers className="midbar-icon text-green-500" />,
    title: 'Meet Travellers',
    description: 'Connect with other people who love to roam.',
  },
  {
    icon: <FaHeart className="midbar-icon text-pink-500" />,
    title: 'Save Favorites',
    description: 'Keep your favorite destinations in one place.',
  },
  {
    icon: <FaStar className="midbar-icon text-yellow-400" />,
    title: 'Top Rated',
    description: 'Check out what’s trending among fellow travellers.',
  },
]

export default function MidBar() {
  return (
    <div className="midbar-wrapper">
      <div className="midbar-container">
        <h2 className="midbar-title">Why Use Traveller?</h2>
        <div className="midbar-grid">
          {features.map((f) => (
            <div key={f.title} className="midbar-card">
              {f.icon}
              <h3 className="midbar-title-text">{f.title}</h3>
              <p className="midbar-desc">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
