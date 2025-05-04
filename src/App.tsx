import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Discover from './pages/Discover'
import Feed from './pages/Feed'
import Friends from './pages/Friends'
import Register from './pages/Register'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000) // splash ekranı 3 saniye göster
    return () => clearTimeout(timeout)
  }, [])

  if (loading) {
    return <SplashScreen />
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
