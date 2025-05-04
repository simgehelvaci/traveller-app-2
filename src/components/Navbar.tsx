import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="nav-left">
      <Link to="/" className="logo flex items-center gap-2 text-lg font-bold text-[var(--watermelon-red)]">
  <img src="/favicon2.png" alt="logo" className="w-6 h-6" />
  <span className="hidden sm:inline">traveller.</span>
</Link>

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
