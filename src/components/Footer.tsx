import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">traveller.</h3>
          <p className="footer-text">
            Discover, save, and share your travel adventures with a global community.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <a href="#">About   </a>
           <a href="#">Blog   </a>
            <a href="#">Contact   </a>
            <a href="#">Support  </a>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} traveller. All rights reserved.
      </div>
    </footer>
  )
}
