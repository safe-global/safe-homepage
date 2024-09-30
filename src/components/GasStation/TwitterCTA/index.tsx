import { Button, Container, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import Slider from '@/components/GasStation/Slider'
import clsx from 'clsx'
import css from './styles.module.css'

const TwitterCTA = ({ title, text, link }: BaseBlock) => (
  <>
    <Container className={`${layoutCss.containerShort} ${css.container}`}>
      <Typography variant="h2" className={css.title}>
        {title}
      </Typography>

      {link && (
        <Button key={link.href} href={link.href} target="_blank" rel="noreferrer" variant="contained" size="large">
          {link.title}
        </Button>
      )}
    </Container>

    <div className={css.sliderWrapper}>
      <div className={css.gradientBase} />

      <Slider text={text} />

      <div className={clsx(css.gradientBase, css.gradientFlipped)} />
    </div>
  </>
)

export default TwitterCTA
