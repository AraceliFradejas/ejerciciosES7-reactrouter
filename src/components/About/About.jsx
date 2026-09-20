import { Link, useParams } from 'react-router-dom'
import './About.css'

function About() {
  const { name } = useParams()

  return (
    <section className="route-page about-page">
      <p className="eyebrow">Navegación con parámetros</p>
      <h1>{name ? `Hola, ${name}` : 'About'}</h1>
      <p className="page-description">
        {name ? `He recibido el parámetro ${name} desde la URL y lo estoy pintando en este h1.` : 'Desde aquí puedo probar una ruta con un parámetro dinámico.'}
      </p>
      {!name && <Link className="route-link" to="/about/Araceli">Abrir ruta con parámetro</Link>}
      {name && <Link className="route-link" to="/about">Volver a About</Link>}
    </section>
  )
}

export default About
