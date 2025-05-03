import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome back</h2>

        <form className="login-form">
          <div>
            <label className="login-label">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="login-input"
            />
          </div>

          <div>
            <label className="login-label">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="login-input"
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <p className="login-footer-text">
          Don’t have an account?{' '}
          <Link to="/register" className="login-register-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
