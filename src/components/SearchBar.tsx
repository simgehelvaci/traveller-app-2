import React, { useState, useEffect, useCallback } from 'react'
import { Search, Mic } from 'lucide-react'
import './SearchBar.css'

// 🔧 Dummy arama verisi
const sampleData = [
  { id: 1, title: 'Hilton Hotel Istanbul', url: 'https://hilton.com', category: 'Hotels' },
  { id: 2, title: 'Turkish Airlines', url: 'https://turkishairlines.com', category: 'Flights' },
  { id: 3, title: 'Nusr-Et Steakhouse', url: 'https://nusret.com', category: 'Restaurants' },
  { id: 4, title: 'Cappadocia Tour', url: 'https://travel.com/cappadocia', category: 'Things to Do' },
  { id: 5, title: 'Airbnb Bodrum', url: 'https://airbnb.com', category: 'Vacation Rentals' },
]

const categories = ['Search All', 'Hotels', 'Flights', 'Restaurants', 'Things to Do', 'Vacation Rentals']

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

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
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [activeCategory, setActiveCategory] = useState('Search All')

  const handleSearch = useCallback(
    debounce((term: string) => {
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

  useEffect(() => {
    async function fetchImages() {
      const withImages = await Promise.all(
        searchResults.map(async (item) => {
          const img = await fetchUnsplashImage(item.title)
          return { ...item, image: img ?? 'https://via.placeholder.com/400x200?text=No+Image' }
        })
      )
      setSearchResults(withImages)
    }

    if (searchResults.length > 0 && !searchResults[0].image) {
      fetchImages()
    }
  }, [searchResults])

  return (
    <div className="search-wrapper">
      <h1 className="search-title">
        <span style={{ color: '#91c788' }}>Discover </span>
        <span style={{ color: '#1f2937' }}>your next adventure with </span>
        <span style={{ color: '#e1096799' }}>traveller.</span>
      </h1>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`category-button ${activeCategory === cat ? 'active' : 'inactive'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          placeholder="Search for places, flights, hotels..."
        />
        <div className="search-actions">
          <button type="button" onClick={() => alert('Voice search not implemented')}>
            <Mic size={20} />
          </button>
          <button type="submit">
            <Search size={20} />
          </button>
        </div>
      </form>

      {searchResults.length > 0 && (
        <div className="result-grid">
          {searchResults.map((result) => (
            <div key={result.id} className="result-card">
              <img src={result.image} alt={result.title} className="result-image" />
              <div className="result-info">
                <h3 className="result-title">{result.title}</h3>
                <p className="result-url">{result.url}</p>
                <span className="result-category">{result.category}</span>
                <a href={result.url} target="_blank" rel="noopener noreferrer" className="result-link">
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
