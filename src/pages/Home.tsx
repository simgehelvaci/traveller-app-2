import SearchBar from '../components/SearchBar'
import MidBar from '../components/MidBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="pt-32">
      <SearchBar />
      <MidBar />
      <Footer />
    </div>
  )
}
