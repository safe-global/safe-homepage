import { Container, Grid } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import clsx from 'clsx'

const Divider = ({ container = "containerTiny", colour = "grey" }: Partial<BaseBlock>) => (
    <Container className={clsx(layoutCss[container], css.container)}>
        <Grid className={clsx(css.gridItem, css[colour])} >
        </Grid>
    </Container>
    
)

export default Divider