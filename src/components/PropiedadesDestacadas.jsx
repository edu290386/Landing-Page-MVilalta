import React from 'react'
import datos from '../data/atlas'

export default function PropiedadesDestacadas() {
  return (
    <section className="propiedades">
      <div className="seccion-header">
        <p className="seccion-eyebrow">Portafolio Exclusivo</p>
        <h2 className="seccion-titulo">Propiedades Destacadas</h2>
      </div>
      <div className="propiedades-grid">
        {datos.propiedades.map(p => (
          <div key={p.id} className="propiedad-card">
            <div className="propiedad-img-wrap">
              <img src={p.imagen} alt={p.direccion} className="propiedad-img" />
              {p.etiqueta && (
                <span className="propiedad-etiqueta">{p.etiqueta}</span>
              )}
              <div className="propiedad-hover-overlay">
                <p className="propiedad-hover-precio">{p.precio}</p>
                <p className="propiedad-hover-direccion">{p.direccion}</p>
                <span className="propiedad-hover-cta">Ver propiedad →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
