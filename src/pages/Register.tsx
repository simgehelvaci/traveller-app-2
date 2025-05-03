import './Register.css'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Create your account</h2>

        <form className="register-form">
          <div>
            <label className="register-label">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="register-input"
            />
          </div>

          <div>
            <label className="register-label">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="register-input"
            />
          </div>

          <div>
            <label className="register-label">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="register-input"
            />
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <p className="register-footer-text">
          Already have an account?{' '}
          <Link to="/login" className="register-login-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
