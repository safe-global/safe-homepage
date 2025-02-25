import { Chip, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

type BannerDarkGradientImage = BaseBlock & { id?: string };


export const BannerDarkGradientImage = ({ title, buttons, caption, text, image, id, container = "containerMedium" }: BannerDarkGradientImage) => {
    return (
        <Container className={layoutCss[container]} id={id}>
            <div className={css.container}>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Chip
                            label={<Typography variant="caption">{caption}</Typography>}
                            className={css.chip}
                            variant="outlined"
                        />
                        <Typography color="white" variant="h2" mt={2} mb={3}>
                            {title}
                        </Typography>
                        {text}
                        <ButtonsWrapper buttons={buttons} />
                    </Grid>
                    {image ? <img src={image.src} alt={image.alt} className={css.image} /> : null}
                </Grid>
            </div>
        </Container>
    )
}

export default BannerDarkGradientImage