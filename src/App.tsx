import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Discover from './pages/Discover'
import Feed from './pages/Feed'
import Friends from './pages/Friends'
import Register from './pages/Register'
import LayoutPlan from './pages/LayoutPlan'

function App() {
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
