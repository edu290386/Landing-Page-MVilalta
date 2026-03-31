import React, { useState, useEffect, useRef } from 'react'
import { GrSearch } from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaChevronDown } from 'react-icons/fa6'
import Logo from './Logo'
import datos from '../data/atlas'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [visible, setVisible]     = useState(true)
  const prevScrollY                = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      setScrolled(current > 60)
      setVisible(current < prevScrollY.current || current < 60)
      prevScrollY.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}${visible ? '' : ' navbar-hidden'}`}>

      <div className="nav-links">
        {datos.navbar.links.map(link => (
          <div key={link.texto} className="nav-item">
            <span className="nav-link">
              {link.texto}
              <FaChevronDown className="nav-chevron" />
            </span>
            <div className="nav-submenu">
              {link.submenu.map(item => (
                <span key={item} className="nav-submenu-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="nav-logo">
        <Logo variant="oscuro" size={150} />
      </div>

      <div className="nav-right">
        <span className="nav-link">{datos.navbar.contacto}</span>
        <GrSearch className="nav-icon" />
        <RxHamburgerMenu className="nav-icon nav-icon-lg" />
      </div>

    </nav>
  )
}
