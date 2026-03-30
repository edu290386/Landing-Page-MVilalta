import React from 'react'
import datos from '../data/atlas'

export default function Hero() {
  const { imagen, titulo, subtitulo, boton } = datos.hero

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${imagen})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-titulo">{titulo}</h1>
          <p className="hero-subtitulo">{subtitulo}</p>
        </div>
        <button className="btn-explore">{boton}</button>
      </div>
    </section>
  )
}
