import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import { Container, Typography, Grid } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'

type TextBlockNarrowProps = BaseBlock & { id?: string };

const TextBlockNarrow = ({ title, text, id, container = "containerTiny" }: TextBlockNarrowProps) => {
    return (
        <Container className={clsx(layoutCss[container], css.block)} id={id}>
            <Grid className={css.outer}>
                <Typography variant="h3">{title}</Typography>
                {text}
            </Grid>
        </Container>
    )
}

export default TextBlockNarrow