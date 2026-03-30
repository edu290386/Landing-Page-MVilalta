import React from 'react'

// variant: 'oscuro' → MV blanco/crema sobre fondo oscuro
//          'claro'  → MV negro sobre fondo claro
export default function Logo({ variant = 'oscuro', size = 80 }) {
  const mvColor   = variant === 'oscuro' ? '#f9f8f5' : '#141414'
  const textColor = variant === 'oscuro' ? '#beaf87' : '#141414'
  const goldColor = '#beaf87'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <line x1="60" y1="65" x2="180" y2="65" stroke={goldColor} strokeWidth="0.5" />
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
        fontSize="8"
        letterSpacing="3.5"
        fill={textColor}
      >BIENES RAÍCES</text>
    </svg>
  )
}
