import React, { useState } from 'react'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import datos from '../data/atlas'

export default function VentasHistoricas() {
  const [current, setCurrent] = useState(0)
  const ventas = datos.ventas
  const total  = ventas.length

  const prev = () => setCurrent(i => (i - 1 + total) % total)
  const next = () => setCurrent(i => (i + 1) % total)

  const v = ventas[current]

  return (
    <section className="ventas">

      <div className="propiedades-header">
        <p className="propiedades-eyebrow">Ventas Realizadas con Éxito</p>
        <h2 className="propiedades-titulo">Operaciones Destacadas</h2>
      </div>

      <div
        className="propiedad-slide"
        style={{ backgroundImage: `url(${v.imagen})` }}
      >
        <div className="propiedad-overlay" />

        <div className="propiedad-bottom">
          <div className="propiedad-detalle">
            <p className="propiedad-distrito">{v.distrito}</p>
            <p className="propiedad-direccion">{v.direccion}</p>
            <p className="propiedad-precio">{v.precio}</p>
          </div>

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

      <div className="propiedades-footer">
        <button className="btn-ver-propiedades">Ver todas las ventas</button>
      </div>

    </section>
  )
}
