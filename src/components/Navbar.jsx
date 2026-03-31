import React, { useState, useEffect, useRef } from 'react'
import { GrSearch } from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaChevronDown } from 'react-icons/fa6'
import Logo from './Logo'
import datos from '../data/atlas'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [visible, setVisible]     = useState(true)
  const [lightBg, setLightBg]     = useState(false)
  const prevScrollY                = useRef(0)

  useEffect(() => {
    const active = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          entry.isIntersecting ? active.add(entry.target) : active.delete(entry.target)
        })
        setLightBg(active.size > 0)
      },
      { rootMargin: '0px 0px -90% 0px', threshold: 0 }
    )
    document.querySelectorAll('[data-navtheme="light"]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      const diff = prevScrollY.current - current
      setScrolled(current > 60)
      if (current < 60) {
        setVisible(true)
      } else if (diff > 5) {
        setVisible(true)
      } else if (diff < -5) {
        setVisible(false)
      }
      prevScrollY.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${lightBg ? ' navbar-light' : (scrolled ? ' navbar-scrolled' : '')}${visible ? '' : ' navbar-hidden'}`}>

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
        <Logo variant={lightBg ? 'claro' : 'oscuro'} size={150} />
      </div>

      <div className="nav-right">
        <span className="nav-link">{datos.navbar.contacto}</span>
        <GrSearch className="nav-icon" />
        <RxHamburgerMenu className="nav-icon nav-icon-lg" />
      </div>

    </nav>
  )
}
