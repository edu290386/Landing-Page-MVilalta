import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Credenciales from './components/Credenciales'
import PropiedadesDestacadas from './components/PropiedadesDestacadas'
import SobreMiguel from './components/SobreMiguel'
import VentasHistoricas from './components/VentasHistoricas'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Credenciales />
      <PropiedadesDestacadas />
      <SobreMiguel />
      <VentasHistoricas />
      <Contacto />
      <Footer />
    </>
  )
}
