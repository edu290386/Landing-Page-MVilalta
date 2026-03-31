import React from 'react'
import datos from '../data/atlas'

export default function Credenciales() {
  const { eyebrow, titulo, subtitulo, numeros } = datos.credenciales

  return (
    <section className="credenciales" data-navtheme="light">
      <div className="credenciales-texto">
        <p className="credenciales-eyebrow">{eyebrow}</p>
        <p className="credenciales-titulo">
          {titulo.antes}
          <span className="credenciales-cifra">{titulo.cifra}</span>
          {titulo.despues}
        </p>
        <p className="credenciales-subtitulo">{subtitulo}</p>
      </div>
      <div className="credenciales-numeros">
        {numeros.map((item, i) => (
          <div key={i} className="credencial-item">
            <span className="credencial-numero">{item.numero}</span>
            <span className="credencial-etiqueta">{item.etiqueta}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
