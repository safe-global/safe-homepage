import { useEffect, useRef, type ReactElement } from 'react'
import { Grid, Typography, Container, Box, Button } from '@mui/material'

import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import { ECOSYSTEM_LINK } from '@/config/constants'

const BannerTextCard = ({ title, text }: BaseBlock): ReactElement => {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bgRef.current) return

    const parallax = (e: MouseEvent) => {
      let _w = window.innerWidth / 2
      let _h = window.innerHeight / 2
      let _mouseX = e.clientX
      let _mouseY = e.clientY
      let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.005}%`
      let _depth2 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.005}%`
      let _depth3 = `${50 - (_mouseX - _w) * 0.009}% ${50 - (_mouseY - _h) * 0.009}%`
      let x = `${_depth3}, ${_depth2}, ${_depth1}`

      if (bgRef.current) {
        bgRef.current.style.backgroundPosition = x
      }
    }

    document.addEventListener('mousemove', parallax)

    return () => {
      document.removeEventListener('mousemove', parallax)
    }
  }, [])

  return (
    <div className={css.gradient} ref={bgRef}>
      <Container sx={{ textAlign: 'center' }}>
        <Box height={{ xs: '700px', md: '1090px' }} display="flex" alignItems="center">
          <Grid container justifyContent="center" flexDirection="column" alignItems="center" gap={4}>
            <Grid item md={8} xl={6}>
              <Typography variant="h2">{title}</Typography>
            </Grid>
            <Grid item md={6}>
              <Typography>{text}</Typography>
            </Grid>
            <Grid item md={6}>
              <Button href={ECOSYSTEM_LINK} target="_blank" rel="noreferrer" variant="contained" size="large">
                Explore ecosystem
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default BannerTextCard
