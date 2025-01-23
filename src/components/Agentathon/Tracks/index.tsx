import type { BaseBlock } from '@/components/Home/types'
import React, { useState } from 'react'
import css from './style.module.css'
import { Typography } from '@mui/material'
import { AiAdvancement, DeFAI, PredictionMarket, SmartAccountTooling, Social, Treasury } from './icons'

const tracksData = [
  {
    icon: DeFAI,
  },
  {
    icon: Treasury,
  },
  {
    icon: PredictionMarket,
  },
  {
    icon: AiAdvancement,
  },
  {
    icon: Social,
  },
  {
    icon: SmartAccountTooling,
  },
]

export default function Tracks({ caption, title, items }: BaseBlock) {
  const [selectedTrack, setSelectedTrack] = useState(0)
  const selectedTrackData = items?.[selectedTrack]
  const SelectedTrackIcon = tracksData[selectedTrack].icon

  return (
    <section className={css.sectionContainer}>
      <Typography className={css.caption}>{caption}</Typography>
      <Typography variant="h3" className={css.title}>
        {title}
      </Typography>
      <div className={css.scrollContainer}>
        <div className={css.itemsWrapper}>
          {items?.map((item, index) => {
            const Icon = tracksData[index].icon
            const isSelected = index === selectedTrack

            return (
              <button
                className={css.itemWrapper}
                key={index}
                onClick={() => setSelectedTrack(index)}
                style={{
                  color: isSelected ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-text-primary)',
                  borderColor: isSelected ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-border-light)',
                }}
              >
                {Icon && <Icon />}
                <Typography className={css.itemTitle}>{item.title}</Typography>
              </button>
            )
          })}
        </div>
        <div className={css.gradientOverlay}></div>
        <div className={css.selectedTrackContainer}>
          <Typography variant="h3" className={css.selectedTrackAmount}>
            {selectedTrackData?.caption}
          </Typography>
          <div className={css.selectedTrackContentWrapper}>
            <div className={css.selectedTrackTitle}>
              {SelectedTrackIcon && <SelectedTrackIcon width={32} height={32} />}
              <Typography variant="h4">{selectedTrackData?.title}</Typography>
            </div>
            <Typography className={css.selectedTrackText}>{selectedTrackData?.text}</Typography>
            <Typography className={css.supportedByText}>Supported by</Typography>
            <div className={css.supportedByLogos}>
              {selectedTrackData?.items?.map((item, index) => {
                if (!item?.image?.src) return null
                return <img src={item.image.src} alt={item.image.alt} key={index} className={css.supportedByLogo} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
