import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="route-page not-found-page">
      <p className="eyebrow">Error 404</p>
      <h1>Página no encontrada</h1>
      <p className="page-description">La ruta que has escrito no existe.</p>
      <Link className="route-link" to="/">Volver al inicio</Link>
    </section>
  )
}

export default NotFound
