import { useEffect, useRef, type ReactElement } from 'react'
import { Grid, Typography, Container, Box } from '@mui/material'

import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'

const Ecosystem = ({ title, text }: BaseBlock): ReactElement => {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bgRef.current) return

    const parallax = () => {
      let _h = window.innerHeight / 2
      let _scrollPos = window.scrollY
      let _depth1 = `center ${50 - (_scrollPos * 0.1 - _h) * 0.1}%`
      let _depth2 = `center ${50 - (_scrollPos * 0.1 - _h) * 0.15}%`
      let _depth3 = `center ${50 - (_scrollPos * 0.1 - _h) * 0.2}%`
      let x = `${_depth3}, ${_depth2}, ${_depth1}`

      if (bgRef.current) {
        bgRef.current.style.backgroundPosition = x
      }
    }

    document.addEventListener('scroll', parallax)

    return () => {
      document.removeEventListener('scroll', parallax)
    }
  }, [])

  return (
    <div className={css.bg} ref={bgRef}>
      <Container sx={{ textAlign: 'center' }}>
        <Box height={{ xs: '700px', md: '1090px' }} display="flex" alignItems="center">
          <Grid container justifyContent="center">
            <Grid item md={8}>
              <Typography variant="h2" mb={4} textAlign="center">
                {title}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography>{text}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Ecosystem
