import { ImageResponse } from 'next/og'

export const alt = 'Grecia Mejía Weddings'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f6f1e8',
          color: '#3a3a2c',
          fontSize: 84,
          fontFamily: 'serif',
          letterSpacing: '-0.02em',
        }}
      >
        Grecia Mejía Weddings
      </div>
    ),
    size,
  )
}
