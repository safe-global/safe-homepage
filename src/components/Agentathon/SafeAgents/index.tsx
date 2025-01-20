import React from 'react'
import type { BaseBlock } from '@/components/Home/types'
import css from './style.module.css'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'

export default function SafeAgents({ image, buttons }: BaseBlock) {
  return (
    <section className={css.sectionContainer}>
      <div className={css.videoWrapper}>
        <video autoPlay muted playsInline loop className={css.video}>
          <source src="/videos/Agentathon/agents.mp4" type="video/mp4" />
        </video>
        {image && <img src={image.src} alt={image.alt} className={css.image} />}
      </div>
      <img src="/images/Agentathon/build-safe-agents.png" alt="Build Safe Agents" className={css.buildSafeAgents} />
      <ButtonsWrapper buttons={buttons} />
    </section>
  )
}
