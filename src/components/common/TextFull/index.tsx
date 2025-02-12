import type { BaseBlock } from '@/components/Home/types'
import {Container, Typography} from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import clsx from 'clsx'
import css from './styles.module.css'


export const TextFull = ({ title, text }: BaseBlock) => {

  return (
      <Container className={clsx(layoutCss.containerTiny, css.block)}>
          <div>
          <Typography variant="h3" mb={4}>{title}</Typography>
          <p>{text}</p>
          </div>
      </Container>

  )
}

export default TextFull
