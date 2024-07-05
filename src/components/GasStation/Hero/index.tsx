import type { BaseBlock } from '@/components/Home/types'
import Slider from '@/components/GasStation/Slider'
import css from './styles.module.css'
import { Button, Typography } from '@mui/material'

const Hero = ({ title, text, link }: BaseBlock) => {
  return (
    <div className={css.videoWrapper}>
      <video autoPlay muted playsInline loop poster="/images/GasStation/gas-station.png" className={css.video}>
        <source src="/videos/GasStation/gas-station.webm" type="video/webm" />
        <source src="/videos/GasStation/gas-station.mp4" type="video/mp4" />
        <img src="/images/GasStation/gas-station.png" alt="Safe Gas Station" />
      </video>

      <div className={css.sliderWrapper}>
        <Slider text={text} />
      </div>

      <div className={css.textContainer}>
        <Typography variant="h2" mb={4}>
          {title}
        </Typography>

        {link && (
          <Button key={link.href} href={link.href} target="_blank" rel="noreferrer" variant="contained" size="large">
            {link.title}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Hero
