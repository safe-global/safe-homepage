import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import { Container, Typography, Grid } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'

type TextBlockNarrowProps = BaseBlock & { id?: string };

const TextBlockNarrow = ({ title, text, id, theme = 'default' }: TextBlockNarrowProps) => {
    return (
        <Container className={clsx(css[theme], layoutCss.containerTinier, css.backgroundContainer)} id={id}>
            <Grid className={css.background}>
            </Grid>
            <Grid className={css.block}>
                <Typography variant="h3">{title}</Typography>
                {text}
            </Grid>
        </Container>
    )
}

export default TextBlockNarrow