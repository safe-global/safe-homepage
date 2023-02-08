import { ButtonBase, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'

import PinIcon from '@/public/images/pin.svg'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import LinkButton from '@/components/common/LinkButton'
import type { Position } from '@/hooks/useOpenPositions'

import css from './styles.module.css'

export const Positions = ({ positions, title }: { positions: Position[]; title: string }) => {
  return (
    <Container className={css.container}>
      <Grid container spacing="30px">
        <Grid item xs={12}>
          <Typography variant="h1" className={css.title}>
            {title}
          </Typography>
        </Grid>
        {positions.map((position) => (
          <Grid key={position.id} item xs={12} md={4}>
            <ButtonBase
              href={position.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${position.name} listing`}
              className={css.card}
            >
              <Typography variant="caption" className={css.location}>
                <PinIcon className={css.icon} />
                {position.location.name}
              </Typography>
              <Typography variant="h3" className={css.position}>
                {position.name}
              </Typography>
              <LinkButton underline={false} className={css.link}>
                See position
              </LinkButton>
              <ArrowIcon className={css.arrow} />
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
