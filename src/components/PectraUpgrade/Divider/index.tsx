import { Container, Grid } from '@mui/material'
import css from './styles.module.css'
import clsx from 'clsx'

const Divider = () => (
  <Container className={clsx(css.containerTiny, css.container)}>
    <Grid className={clsx(css.gridItem, css['grey'])}></Grid>
  </Container>
)

export default Divider
