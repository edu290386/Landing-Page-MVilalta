import React from 'react'
import Logo from './Logo'
import datos from '../data/atlas'

export default function Footer() {
  const { redes, copyright } = datos.footer

  return (
    <footer className="footer">
      <div className="footer-top">
        <Logo variant="oscuro" size={100} />
        <nav className="footer-nav">
          {datos.navbar.links.map(link => (
            <span key={link.texto} className="footer-nav-link">{link.texto}</span>
          ))}
          <span className="footer-nav-link">{datos.navbar.contacto}</span>
        </nav>
        <div className="footer-redes">
          {redes.map(r => (
            <a key={r.nombre} href={r.url} className="footer-red">{r.nombre}</a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">{copyright}</p>
      </div>
    </footer>
  )
}
