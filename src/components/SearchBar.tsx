import React, { useState, useEffect, useCallback } from 'react'
import { Search, Mic } from 'lucide-react'

// 🔧 Dummy arama verisi
const sampleData = [
  { id: 1, title: 'Hilton Hotel Istanbul', url: 'https://hilton.com', category: 'Hotels' },
  { id: 2, title: 'Turkish Airlines', url: 'https://turkishairlines.com', category: 'Flights' },
  { id: 3, title: 'Nusr-Et Steakhouse', url: 'https://nusret.com', category: 'Restaurants' },
  { id: 4, title: 'Cappadocia Tour', url: 'https://travel.com/cappadocia', category: 'Things to Do' },
  { id: 5, title: 'Airbnb Bodrum', url: 'https://airbnb.com', category: 'Vacation Rentals' },
]

const categories = ['Search All', 'Hotels', 'Flights', 'Restaurants', 'Things to Do', 'Vacation Rentals']

// 🔁 debounce fonksiyonu
const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// 🔍 Unsplash görsel çekme fonksiyonu
async function fetchUnsplashImage(query: string): Promise<string | null> {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        },
      }
    )
    const data = await response.json()
    return data.results?.[0]?.urls?.regular || null
  } catch (error) {
    console.error('Unsplash error:', error)
    return null
  }
}

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [activeCategory, setActiveCategory] = useState('Search All')

  // 🔎 Arama işlemi (debounced)
  const handleSearch = useCallback(
    debounce((term) => {
      if (term.trim() === '') {
        setSearchResults([])
      } else {
        const filtered = sampleData.filter(
          (item) =>
            item.title.toLowerCase().includes(term.toLowerCase()) &&
            (activeCategory === 'Search All' || item.category === activeCategory)
        )
        setSearchResults(filtered)
      }
    }, 300),
    [activeCategory]
  )

  useEffect(() => {
    handleSearch(searchTerm)
  }, [searchTerm, handleSearch])

  // 📸 Görselleri çek
  useEffect(() => {
    async function fetchImages() {
      const withImages = await Promise.all(
        searchResults.map(async (item) => {
          const img = await fetchUnsplashImage(item.title)
          return { ...item, image: img }
        })
      )
      setSearchResults(withImages)
    }

    if (searchResults.length > 0 && !searchResults[0].image) {
      fetchImages()
    }
  }, [searchResults])

  return (
    <div className="flex min-h-screen flex-col items-center bg-white pt-20 px-4">
      {/* Kategori butonları */}
      <div className="mb-6 flex flex-wrap justify-center gap-4">
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

      {/* Arama barı */}
      <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-2xl">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for places, flights, hotels..."
            className="w-full rounded-full border border-gray-300 bg-white px-5 py-4 pr-20 text-lg shadow-sm transition-shadow duration-200 hover:shadow-md focus:outline-none"
          />
          <div className="absolute right-0 top-0 mr-4 mt-4 flex items-center gap-2">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600"
              onClick={() => alert('Voice search not implemented')}
            >
              <Mic size={20} />
            </button>
            <button type="submit" className="text-blue-500 hover:text-blue-600">
              <Search size={20} />
            </button>
          </div>
        </div>
      </form>

      {/* Sonuçlar - kartlar */}
      {searchResults.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-4xl">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="rounded-xl border border-gray-200 shadow hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={result.image || 'https://via.placeholder.com/400x200?text=No+Image'}
                alt={result.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{result.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{result.url}</p>
                <span className="inline-block text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  {result.category}
                </span>
                <div className="mt-3">
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm font-medium hover:underline"
                  >
                    View →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
