import { Box, Button, Chip, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import clsx from 'clsx'
import LinkButton from '@/components/common/LinkButton'
import Link from 'next/link'

export const BannerCta = ({ title, buttons, caption }: BaseBlock): ReactElement => {
  return (
    <Container className={clsx(layoutCss.containerMedium, css.wrapper)}>
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
          {buttons ? (
            <Box display="flex" gap={3} color="white" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center">
              {buttons.map((button, index) => {
                const { text, variant, href } = button
                const isButton = variant === 'button'

                return (
                  <Link key={index} href={href} target="_blank" rel="noreferrer" passHref>
                    {isButton ? (
                      <Button variant="contained" size="large" color="secondary">
                        {text}
                      </Button>
                    ) : (
                      <LinkButton color="secondary" sx={{ width: 'fit-content' }}>
                        {text}
                      </LinkButton>
                    )}
                  </Link>
                )
              })}
            </Box>
          ) : null}
        </Container>
      </div>
    </Container>
  )
}

export default BannerCta
