import { useParams } from 'react-router-dom'
import './Contact.css'

function Contact() {
  const { title } = useParams()

  return (
    <section className="route-page contact-page">
      <p className="eyebrow">Ruta con parámetro</p>
      <h1>{title}</h1>
      <p className="page-description">He recibido el parámetro desde la URL y lo estoy pintando en este h1.</p>
    </section>
  )
}

export default Contact
