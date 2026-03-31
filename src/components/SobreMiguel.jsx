import React from 'react'
import datos from '../data/atlas'

export default function SobreMiguel() {
  const { nombre, cargo, imagen, bio } = datos.sobre

  return (
    <section className="sobre">
      <div className="sobre-img-wrap">
        <img src={imagen} alt={nombre} className="sobre-img" />
        <div className="sobre-img-gradiente" />
      </div>
      <div className="sobre-texto">
        <p className="seccion-eyebrow">Sobre mí</p>
        <h2 className="seccion-titulo sobre-nombre">
          <span>{nombre.split(' ')[0]}</span>
          {' '}
          <span className="sobre-nombre-apellido">{nombre.split(' ')[1]}</span>
        </h2>
        <p className="sobre-cargo">{cargo}</p>
        <p className="sobre-bio">{bio}</p>
        <button className="btn-leer-mas">Leer más <span className="btn-arrow">→</span></button>
      </div>
    </section>
  )
}
