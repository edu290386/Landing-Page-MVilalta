import React, { useState, useEffect, useRef } from 'react'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import datos from '../data/atlas'

const GAP      = 16
const DURATION = 3500 // ms entre slides automáticos

const calcStep = () => (window.innerWidth - GAP * 2) / 3 + GAP

export default function VentasHistoricas() {
  const ventas = datos.ventas
  const total  = ventas.length
  const slides = [...ventas, ...ventas, ...ventas]
  const n      = slides.length

  // Inicialización lazy → step correcto desde el primer render
  const [step,     setStep]     = useState(calcStep)
  const [idx,      setIdx]      = useState(total)
  const [animated, setAnimated] = useState(true)

  const cardW = step - GAP

  // Redimensión
  useEffect(() => {
    const onResize = () => setStep(calcStep())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Auto-play
  const timerRef = useRef(null)
  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setAnimated(true)
      setIdx(i => i + 1)
    }, DURATION)
  }
  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  // Snap al llegar a extremos
  useEffect(() => {
    if (idx >= total * 2) {
      const t = setTimeout(() => { setAnimated(false); setIdx(idx - total) }, 520)
      return () => clearTimeout(t)
    }
    if (idx < total) {
      const t = setTimeout(() => { setAnimated(false); setIdx(idx + total) }, 520)
      return () => clearTimeout(t)
    }
  }, [idx])

  // Re-habilitar animación después del snap
  useEffect(() => {
    if (!animated) {
      const raf = requestAnimationFrame(() => setAnimated(true))
      return () => cancelAnimationFrame(raf)
    }
  }, [animated])

  const goNext = () => { setAnimated(true); setIdx(i => i + 1); startTimer() }
  const goPrev = () => { setAnimated(true); setIdx(i => i - 1); startTimer() }

  return (
    <section className="ventas">

      <div className="propiedades-header">
        <p className="propiedades-eyebrow">Ventas Realizadas con Éxito</p>
        <h2 className="propiedades-titulo">Operaciones Destacadas</h2>
      </div>

      <div className="ventas-carrusel">

        <button className="ventas-arrow ventas-arrow-prev" onClick={goPrev}>
          <HiOutlineArrowNarrowLeft />
        </button>
        <button className="ventas-arrow ventas-arrow-next" onClick={goNext}>
          <HiOutlineArrowNarrowRight />
        </button>

        <div
          className="ventas-track"
          style={{
            transform:  `translateX(${-idx * step}px)`,
            transition: animated ? 'transform 0.5s ease' : 'none',
          }}
        >
          {slides.map((v, i) => (
            <div
              key={i}
              className="ventas-slide propiedad-slide"
              style={{ width: cardW, backgroundImage: `url(${v.imagen})` }}
            >
              <div className="propiedad-overlay" />
              <div className="propiedad-bottom">
                <div className="propiedad-detalle">
                  <p className="propiedad-distrito">{v.distrito}</p>
                  <p className="propiedad-direccion">{v.direccion}</p>
                  <p className="propiedad-precio">{v.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="propiedades-footer">
        <button className="btn-ver-propiedades">Ver todas las ventas</button>
      </div>

    </section>
  )
}
