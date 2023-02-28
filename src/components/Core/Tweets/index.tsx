import type { BaseBlock } from '@/components/Home/types'
import { Container, Link, Typography } from '@mui/material'
import HeaderParticles from '@/public/images/header_particles.svg'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'

const Tweets = ({ caption, title, items }: BaseBlock) => (
  <>
    <Container className={layoutCss.container}>
      <Typography variant="caption" textAlign="center" component="div" mt="100px" mb={3}>
        {caption}
      </Typography>
      <Typography variant="h2" textAlign="center" maxWidth="670px" marginX="auto" mb="100px">
        {title}
      </Typography>
    </Container>

    <div className={css.gradient}>
      <HeaderParticles className={css.bg} />
      <div className={css.tweetsGrid}>
        {items?.map(({ image, link }, index) => (
          <Link key={index} href={link?.href || '#'} target="_blank" rel="noopener">
            <img src={image?.src || ''} alt={image?.alt || ''} />
          </Link>
        ))}
      </div>
    </div>
  </>
)

export default Tweets
