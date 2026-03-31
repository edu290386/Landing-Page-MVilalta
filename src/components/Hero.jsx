import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import datos from '../data/atlas'

export default function Hero() {
  const { imagen, titulo, subtitulo, boton } = datos.hero

  return (
    <div className="hero-marco">
      <section className="hero" style={{ backgroundImage: `url(${imagen})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-titulo">{titulo}</h1>
            <p className="hero-eyebrow">{subtitulo}</p>
          </div>
          <button className="btn-hero">
          {boton} <HiOutlineArrowNarrowRight className="btn-hero-arrow" size={"16px"}/>
        </button>
        </div>
      </section>
    </div>
  )
}
