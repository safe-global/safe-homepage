import type { BaseBlock } from '@/components/Home/types'
import Slider from '@/components/GasStation/Slider'
import { Button, Container, Typography } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'

const Hero = ({ title, text, link }: BaseBlock) => (
  <Container>
    <div className={css.videoWrapper}>
      <div className={css.gradientBase} />
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
      <div className={clsx(css.gradientBase, css.gradientFlipped)} />
    </div>
  </Container>
)

export default Hero
