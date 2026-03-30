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
            </div>
            <div className="propiedad-info">
              <p className="propiedad-direccion">{p.direccion}</p>
              <p className="propiedad-precio">{p.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
