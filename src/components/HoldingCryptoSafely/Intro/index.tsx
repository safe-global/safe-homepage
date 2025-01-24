import {Button, Container, Grid, Typography} from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import { scrollToElement } from '@/lib/scrollSmooth'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import Link from "next/link";
import LinkButton from "@/components/common/LinkButton";

const HoldingCryptoSafelyIntro = ({ text, title, link, scroll }: BaseBlock & { scroll?: { title: string; target: string } }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()

    // TODO: move offset to CSS
    scrollToElement(target, 200)
  }

  return (
    <Container>
      <Grid
        container
        className={css.container}
        rowSpacing={{ xs: 6 }}
        columnSpacing={{ md: '30px', xl: '50px' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={6} display="flex" justifyContent="center">
            <img src="/images/HoldingCryptoSafely/hero.png" alt="Padlock illustration" />
        </Grid>

        <Grid item md={6}>

          <Typography variant="h3" component="div" mb={2}>
            {text}
          </Typography>

          <Typography variant="h1" mb={4}>
            {title}
          </Typography>

            {link && (
                <Link href={link.href}>
                    <Button variant="contained" size="large" color='primary'>
                        {link.title}
                    </Button>
                </Link>
            )}
        </Grid>

        {scroll && (
          <a onClick={(e) => handleClick(e, scroll.target)} className={css.scroll}>
            <Typography variant="caption">{scroll.title}</Typography>
          </a>
        )}
      </Grid>
    </Container>
  )
}

export default HoldingCryptoSafelyIntro
