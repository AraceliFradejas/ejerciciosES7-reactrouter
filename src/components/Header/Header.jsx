import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const navigate = useNavigate()

  return (
    <header className="site-header">
      <button className="back-button" type="button" onClick={() => navigate(-1)} aria-label="Volver atrás">
        <span aria-hidden="true">←</span>
      </button>
      <Link className="brand" to="/" aria-label="Ir al inicio">
        <span className="brand-mark" aria-hidden="true">◒</span>
        <span>thePower</span>
      </Link>
      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
