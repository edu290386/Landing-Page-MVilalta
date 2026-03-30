import React from 'react'
import datos from '../data/atlas'

export default function SobreMiguel() {
  const { nombre, cargo, imagen, bio, cita } = datos.sobre

  return (
    <section className="sobre">
      <div className="sobre-img-wrap">
        <img src={imagen} alt={nombre} className="sobre-img" />
        <div className="sobre-img-gradiente" />
      </div>
      <div className="sobre-texto">
        <p className="seccion-eyebrow">Sobre Miguel</p>
        <h2 className="seccion-titulo">{nombre}</h2>
        <p className="sobre-cargo">{cargo}</p>
        <p className="sobre-bio">{bio}</p>
        <blockquote className="sobre-cita">"{cita}"</blockquote>
      </div>
    </section>
  )
}
