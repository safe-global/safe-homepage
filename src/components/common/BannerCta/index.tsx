import { Chip, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { ReactElement } from 'react'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'

export const BannerCta = ({
  title,
  buttons,
  caption,
  backgroundImage,
}: BaseBlock & { backgroundImage: string }): ReactElement => {
  return (
    <Container className={layoutCss.containerMedium}>
      <div className={css.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Chip
          label={
            <Typography variant="caption" color="text.primary">
              {caption}
            </Typography>
          }
          className={css.chip}
          variant="outlined"
        />
        <Typography variant="h2" mt={3} mb={5}>
          {title}
        </Typography>
        <ButtonsWrapper buttons={buttons} />
      </div>
    </Container>
  )
}

export default BannerCta
