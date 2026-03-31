import React, { useState } from 'react'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import datos from '../data/atlas'

export default function PropiedadesDestacadas() {
  const [current, setCurrent] = useState(0)
  const props = datos.propiedades
  const total  = props.length

  const prev = () => setCurrent(i => (i - 1 + total) % total)
  const next = () => setCurrent(i => (i + 1) % total)

  const p = props[current]

  return (
    <section className="propiedades">

      <div className="propiedades-header">
        <p className="propiedades-eyebrow">{datos.propiedades_titulo.eyebrow}</p>
        <h2 className="propiedades-titulo">{datos.propiedades_titulo.titulo}</h2>
      </div>

      {/* Imagen de fondo con transición */}
      <div
        className="propiedad-slide"
        style={{ backgroundImage: `url(${p.imagen})` }}
      >
        <div className="propiedad-overlay" />

        {/* Info + navegación en la parte inferior */}
        <div className="propiedad-bottom">

          {/* Info izquierda */}
          <div className="propiedad-detalle">
            <p className="propiedad-distrito">{p.distrito}</p>
            <p className="propiedad-direccion">{p.direccion}</p>
            <p className="propiedad-precio">{p.precio}</p>
          </div>

          {/* Navegación derecha */}
          <div className="propiedad-nav">
            <button className="propiedad-nav-btn" onClick={prev}>
              <HiOutlineArrowNarrowLeft />
            </button>
            <span className="propiedad-counter">
              {String(current + 1).padStart(2, '0')}
              <span className="propiedad-counter-sep"> | </span>
              {String(total).padStart(2, '0')}
            </span>
            <button className="propiedad-nav-btn" onClick={next}>
              <HiOutlineArrowNarrowRight />
            </button>
          </div>

        </div>
      </div>

    </section>
  )
}
