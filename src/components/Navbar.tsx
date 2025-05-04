import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="nav-left">
      <Link to="/" className="logo">
  <img src="/favicon2.png" alt="Traveller Logo" className="h-8 w-8 inline-block mr-2" />traveller.</Link>
      </div>   
      <div className="nav-center">
        <Link to="/discover" className="nav-link">Discover</Link>
        <Link to="/feed" className="nav-link">Feed</Link>
        <Link to="/friends" className="nav-link">Friends</Link>
    
      </div>
    
      <div className="nav-right">
        
        <Link to="/login" className="btn btn-blue">Sign In</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
      
    </nav>
  )
}

export default Navbar
