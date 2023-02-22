import { Button, Chip, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import clsx from 'clsx'

export const BannerCta = ({ title, link, caption }: BaseBlock): ReactElement => {
  return (
    <Container className={clsx(layoutCss.containerShort, css.wrapper)}>
      <div className={css.container}>
        <Container>
          <Chip
            label={
              <Typography variant="caption" color="text.primary">
                {caption}
              </Typography>
            }
            className={css.chip}
            variant="outlined"
          />
          <Typography variant="h2" color="text.primary" mt={3} mb={5}>
            {title}
          </Typography>
          {link && (
            <Button
              target="_top"
              variant="contained"
              size="large"
              rel="noopener noreferrer"
              href={link.href}
              color="secondary"
            >
              {link.title}
            </Button>
          )}
        </Container>
      </div>
    </Container>
  )
}

export default BannerCta
