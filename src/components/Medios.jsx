import React from 'react'
import datos from '../data/atlas'

export default function Medios() {
  return (
    <section className="medios" data-navtheme="light">
      <div className="seccion-header">
        <p className="seccion-eyebrow">Apariciones en Medios</p>
        <h2 className="seccion-titulo">Prensa y Medios</h2>
      </div>
      <div className="medios-grid">
        {datos.medios.map((m, i) => (
          <div key={i} className="medio-card">
            <div className="medio-card-inner">

              {/* FRENTE */}
              <div className="medio-frente">
                <div className="medio-linea-top" />
                <span className="medio-nombre">{m.nombre}</span>
                <div className="medio-linea-bottom" />
              </div>

              {/* REVERSO */}
              <div className="medio-reverso">
                <p className="medio-articulo">"{m.articulo}"</p>
                <span className="medio-año">{m.año}</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
