import { type BaseBlock } from '@/components/Home/types'
import { Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const SafeAtScale = ({ caption, title }: BaseBlock) => {
  return (
    <div className={css.gradient}>
      <div className={css.bg}>
        <Container className={`${layoutCss.containerMedium} ${layoutCss.centeredContent}`}>
          <Typography variant="caption" className={css.caption}>
            {caption}
          </Typography>
          <Typography variant="h2" className={css.title}>
            {title}
          </Typography>
        </Container>
      </div>
    </div>
  )
}

export default SafeAtScale
