// ─────────────────────────────────────────────────────────────────
//  ARCHIVO CENTRAL DE DATOS — MIGUEL VILLALTA BIENES RAÍCES
//  Edita aquí textos, números e imágenes sin tocar los componentes.
// ─────────────────────────────────────────────────────────────────

const datos = {

  navbar: {
    links: ['Sobre Mí', 'Propiedades', 'Medios'],
    contacto: 'Contacto',
  },

  hero: {
    imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    titulo: 'Lujo en su\nMáxima Expresión',
    subtitulo: 'El Líder en Bienes Raíces de Lujo en el Perú',
    boton: 'Explorar Propiedades',
  },

  credenciales: [
    { numero: '$500M+', etiqueta: 'En Ventas' },
    { numero: '15+',    etiqueta: 'Años de Experiencia' },
    { numero: '200+',   etiqueta: 'Propiedades Cerradas' },
  ],

  propiedades: [
    {
      id: 1,
      direccion: 'Av. El Polo 670, Santiago de Surco',
      precio: '$1,200,000',
      imagen: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&q=80',
      etiqueta: 'Exclusivo',
    },
    {
      id: 2,
      direccion: 'Calle Las Orquídeas 290, San Isidro',
      precio: '$2,800,000',
      imagen: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      etiqueta: 'Nuevo',
    },
    {
      id: 3,
      direccion: 'Malecón Cisneros 1450, Miraflores',
      precio: '$3,500,000',
      imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      etiqueta: 'Vista al Mar',
    },
    {
      id: 4,
      direccion: 'Calle Choquehuanca 1080, San Isidro',
      precio: '$1,850,000',
      imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      etiqueta: 'En Venta',
    },
  ],

  sobre: {
    nombre: 'Miguel Villalta',
    cargo: 'Agente Inmobiliario de Lujo',
    imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80',
    bio: 'Con más de 15 años de experiencia en el mercado inmobiliario de lujo peruano, Miguel Villalta se ha consolidado como el referente indiscutible en transacciones de alto valor. Su profundo conocimiento de los mercados de San Isidro, Miraflores y La Molina, combinado con una red de contactos de primer nivel, garantiza resultados excepcionales para cada cliente.',
    cita: 'Mi compromiso es encontrar no solo una propiedad, sino el hogar perfecto que refleje tu estilo de vida.',
  },

  medios: [
    { nombre: 'El Comercio',  articulo: 'El mercado inmobiliario de lujo crece en Lima',          año: '2024' },
    { nombre: 'Gestión',      articulo: 'Los agentes que mueven el sector premium en el Perú',    año: '2024' },
    { nombre: 'RPP',          articulo: 'Inversión en bienes raíces: oportunidades de alto valor', año: '2023' },
    { nombre: 'América TV',   articulo: 'Lujo y exclusividad en el mercado inmobiliario limeño',  año: '2023' },
    { nombre: 'Canal N',      articulo: 'El auge de las propiedades de lujo en Miraflores',       año: '2023' },
    { nombre: 'La República', articulo: 'Bienes raíces premium: cómo elegir al agente correcto',  año: '2022' },
  ],

  ventas: [
    {
      id: 1,
      direccion: 'Av. Javier Prado Este 4600, La Molina',
      precio: '$4,200,000',
      imagen: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80',
      año: '2024',
    },
    {
      id: 2,
      direccion: 'Calle Tudela y Varela 180, San Isidro',
      precio: '$5,800,000',
      imagen: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      año: '2023',
    },
    {
      id: 3,
      direccion: 'Malecón de la Reserva 610, Miraflores',
      precio: '$6,100,000',
      imagen: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      año: '2023',
    },
  ],

  contacto: {
    imagenFondo: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80',
    titulo: 'Hablemos',
    subtitulo: 'Contáctame para una consulta confidencial sobre tu próxima inversión.',
    campos: {
      nombre:   'Nombre completo',
      telefono: 'Teléfono',
      email:    'Correo electrónico',
      mensaje:  'Mensaje',
      boton:    'Enviar Mensaje',
    },
    info: {
      telefono:  '+51 999 999 999',
      email:     'miguel@miguelvillalta.pe',
      direccion: 'San Isidro, Lima, Perú',
    },
  },

  footer: {
    redes: [
      { nombre: 'Instagram', url: '#' },
      { nombre: 'LinkedIn',  url: '#' },
      { nombre: 'WhatsApp',  url: '#' },
    ],
    copyright: '© 2025 Miguel Villalta. Todos los derechos reservados.',
  },

}

export default datos
