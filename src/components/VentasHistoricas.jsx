import React from 'react'
import datos from '../data/atlas'

export default function VentasHistoricas() {
  return (
    <section className="ventas" data-navtheme="light">
      <div className="seccion-header">
        <p className="seccion-eyebrow">Historial de Éxitos</p>
        <h2 className="seccion-titulo ventas-titulo">Ventas Representativas</h2>
      </div>
      <div className="ventas-grid">
        {datos.ventas.map(v => (
          <div key={v.id} className="venta-card">
            <div className="venta-img-wrap">
              <img src={v.imagen} alt={v.direccion} className="venta-img" />
              <div className="venta-overlay">
                <p className="venta-precio">{v.precio}</p>
                <p className="venta-direccion">{v.direccion}</p>
                <p className="venta-año">{v.año}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
