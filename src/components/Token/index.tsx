import React from 'react'
import Hero from '@/components/Token/Hero'

export default function Token() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Hero />
    </div>
  )
}
