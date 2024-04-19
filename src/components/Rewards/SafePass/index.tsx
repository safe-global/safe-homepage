import React from 'react'
import Card from '@/components/Rewards/Card'
import PulsingCircles from '@/components/Rewards/PulsingCircles'
import OrbitLines from '@/components/Rewards/OrbitLines'
import css from './styles.module.css'

export default function SafePass() {
  return (
    <div className={css.container}>
      <Card />
      <OrbitLines />
      <PulsingCircles />
    </div>
  )
}
