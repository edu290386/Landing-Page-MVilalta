import React from 'react'
import datos from '../data/atlas'

export default function Credenciales() {
  return (
    <section className="credenciales">
      {datos.credenciales.map((item, i) => (
        <div key={i} className="credencial-item">
          <span className="credencial-numero">{item.numero}</span>
          <span className="credencial-etiqueta">{item.etiqueta}</span>
        </div>
      ))}
    </section>
  )
}
