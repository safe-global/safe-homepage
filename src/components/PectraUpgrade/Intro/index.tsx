import { Button, Container, Grid, Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import { scrollToElement } from '@/lib/scrollSmooth'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import Link from "next/link";
import LinkButton from "@/components/common/LinkButton";

const PectraUpdateIntro = ({ text, title, link, scroll }: BaseBlock & { scroll?: { title: string; target: string } }) => {
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
                <Grid item md={6} display="flex" justifyContent="center" className={css.hero}>
                    <Grid className={css.greenRadial}></Grid>
                    <img src="/images/PectraUpgrade/hero.png" alt="Green Gem" />
                    <svg width="614" height="513" viewBox="0 0 614 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.20367 168.631V168.332L1.18637 168.315C1.34717 137.817 26.186 113.155 56.8206 113.155H244.682C276.212 113.155 301.761 87.6896 301.761 56.2573C301.761 25.6226 326.66 0.800003 357.396 0.800003H557.003C587.739 0.800003 612.638 25.6226 612.638 56.2573V255.229C612.638 285.864 587.739 310.687 557.003 310.687H458.384C426.853 310.687 401.305 336.152 401.305 367.584V456.543C401.305 487.177 376.406 512 345.67 512H56.8394C26.1038 512 1.20367 487.177 1.20367 456.543V168.631Z" stroke="#303033" />
                    </svg>
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

export default PectraUpdateIntro