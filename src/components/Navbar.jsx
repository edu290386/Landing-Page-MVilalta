import React, { useState, useEffect } from 'react'
import { GrSearch } from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'
import Logo from './Logo'
import datos from '../data/atlas'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="nav-links">
        {datos.navbar.links.map(link => (
          <span key={link} className="nav-link">{link}</span>
        ))}
      </div>

      <div className="nav-logo">
        <Logo variant="oscuro" size={90} />
      </div>

      <div className="nav-right">
        <span className="nav-link">{datos.navbar.contacto}</span>
        <GrSearch className="nav-icon" />
        <RxHamburgerMenu className="nav-icon nav-icon-lg" />
      </div>
    </nav>
  )
}
