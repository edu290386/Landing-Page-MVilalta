import React from 'react'
import datos from '../data/atlas'

export default function Contacto() {
  const { titulo, subtitulo, campos, info } = datos.contacto

  return (
    <section className="contacto" id="contacto">
      <div className="contacto-left">
        <p className="seccion-eyebrow">Contacto</p>
        <h2 className="seccion-titulo">{titulo}</h2>
        <p className="contacto-subtitulo">{subtitulo}</p>
        <div className="contacto-info">
          <p>{info.telefono}</p>
          <p>{info.email}</p>
          <p>{info.direccion}</p>
        </div>
      </div>

      <form className="contacto-form" onSubmit={e => e.preventDefault()}>
        <input  className="form-input" placeholder={campos.nombre}   type="text" />
        <input  className="form-input" placeholder={campos.telefono}  type="tel" />
        <input  className="form-input" placeholder={campos.email}     type="email" />
        <textarea className="form-input form-textarea" placeholder={campos.mensaje} rows={4} />
        <button type="submit" className="btn-submit">{campos.boton}</button>
      </form>
    </section>
  )
}
