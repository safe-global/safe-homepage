import React from 'react'
import Card from '@/components/Rewards/Card'
import PulsingCircles from '@/components/Rewards/PulsingCircles'
import OrbitLines from '@/components/Rewards/OrbitLines'
import { type BaseBlockEntry } from '@/config/types'
import css from './styles.module.css'

const SafePass = (props: BaseBlockEntry) => {
  return (
    <div className={css.container}>
      <Card {...props} />
      <OrbitLines />
      <PulsingCircles />
    </div>
  )
}

export default SafePass
