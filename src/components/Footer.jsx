import React from 'react'
import Logo from './Logo'
import datos from '../data/atlas'

export default function Footer() {
  return (
    <footer className="footer">
      <Logo variant="oscuro" size={80} />
      <div className="footer-redes">
        {datos.footer.redes.map(r => (
          <a key={r.nombre} href={r.url} className="footer-link">{r.nombre}</a>
        ))}
      </div>
      <p className="footer-copy">{datos.footer.copyright}</p>
    </footer>
  )
}
