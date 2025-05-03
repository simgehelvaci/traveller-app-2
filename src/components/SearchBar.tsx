import React, { useState, useEffect, useCallback } from 'react'
import { Search, Mic } from 'lucide-react'

const sampleData = [
  { id: 1, title: 'Hilton Hotel Istanbul', url: 'https://hilton.com', category: 'Hotels' },
  { id: 2, title: 'Turkish Airlines', url: 'https://turkishairlines.com', category: 'Flights' },
  { id: 3, title: 'Nusr-Et Steakhouse', url: 'https://nusret.com', category: 'Restaurants' },
  { id: 4, title: 'Cappadocia Tour', url: 'https://travel.com/cappadocia', category: 'Things to Do' },
  { id: 5, title: 'Airbnb Bodrum', url: 'https://airbnb.com', category: 'Vacation Rentals' },
]

const categories = ['Search All', 'Hotels', 'Flights', 'Restaurants', 'Things to Do', 'Vacation Rentals']

const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [activeCategory, setActiveCategory] = useState('Search All')

  const handleSearch = useCallback(
    debounce((term) => {
      if (term.trim() === '') {
        setSearchResults([])
      } else {
        const results = sampleData.filter(
          (item) =>
            item.title.toLowerCase().includes(term.toLowerCase()) &&
            (activeCategory === 'Search All' || item.category === activeCategory)
        )
        setSearchResults(results)
      }
    }, 300),
    [activeCategory]
  )

  useEffect(() => {
    handleSearch(searchTerm)
  }, [searchTerm, handleSearch])

  return (
    <div className="flex min-h-screen flex-col items-center bg-white pt-20 relative px-4">
      <div className="mb-4 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm rounded-full border ${
              activeCategory === cat
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-2xl">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Google or type a URL"
            className="w-full rounded-full border border-gray-300 bg-white px-5 py-4 pr-20 text-lg shadow-sm transition-shadow duration-200 hover:shadow-md focus:outline-none"
          />
          <div className="absolute right-0 top-0 mr-4 mt-4 flex items-center gap-2">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600"
              onClick={() => alert('Voice search is not implemented.')}
            >
              <Mic size={20} />
            </button>
            <button type="submit" className="text-blue-500 hover:text-blue-600">
              <Search size={20} />
            </button>
          </div>
        </div>

        {searchResults.length > 0 && (
          <ul className="absolute z-10 mt-2 w-full rounded-lg border bg-white shadow-lg">
            {searchResults.map((result) => (
              <li key={result.id}>
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-100"
                >
                  {result.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  )
}
