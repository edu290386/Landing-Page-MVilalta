import React from 'react'
import datos from '../data/atlas'

export default function Hero() {
  const { imagen, titulo, subtitulo, boton } = datos.hero

  return (
    <section className="hero" style={{ backgroundImage: `url(${imagen})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">{subtitulo}</p>
          <h1 className="hero-titulo">
            {titulo.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
        </div>
        <button className="btn-hero">{boton}</button>
      </div>
    </section>
  )
}
