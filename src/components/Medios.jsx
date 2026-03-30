import React from 'react'
import datos from '../data/atlas'

export default function Medios() {
  return (
    <section className="medios">
      <p className="seccion-eyebrow" style={{ textAlign: 'center' }}>
        Apariciones en Medios
      </p>
      <div className="medios-logos">
        {datos.medios.map((m, i) => (
          <div key={i} className="medio-logo">
            <span className="medio-nombre">{m.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
