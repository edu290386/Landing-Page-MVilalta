import React from 'react'

// variant: 'oscuro' → MV blanco/crema sobre fondo oscuro
//          'claro'  → MV blanco sobre fondo gris (navbar-light)
export default function Logo({ variant = 'oscuro', size = 80 }) {
  const mvColor   = '#f9f8f5'
  const textColor = variant === 'oscuro' ? '#beaf87' : '#ffffff'
  const goldColor = variant === 'oscuro' ? '#beaf87' : '#332b14'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 95 240 122"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <text
        x="120" y="138"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="58"
        letterSpacing="-1"
        fill={mvColor}
      >MV</text>
      <line x1="60" y1="175" x2="180" y2="175" stroke={goldColor} strokeWidth="0.5" />
      <text
        x="120" y="196"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="15"
        letterSpacing="3.5"
        fill={textColor}
      >BIENES RAÍCES</text>
    </svg>
  )
}
