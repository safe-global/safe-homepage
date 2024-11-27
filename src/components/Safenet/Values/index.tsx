import { Container, Grid, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

type BlockProps = {
  title: string
  features: Array<string>
}

const items: Array<BlockProps> = [
  {
    title: 'Neutral',
    features: ['Network agnostic', 'Protocol agnostic', 'Account agnostic'],
  },
  {
    title: 'Non-custodial',
    features: ['User in control', 'Validity proof settlement', 'Censorship-resistance'],
  },
  {
    title: 'Open',
    features: ['Open-source', 'Co-processor ecosystem', 'Self-hosting'],
  },
]

const BlockItem = ({ title, features }: BlockProps) => (
  <div className={css.blockItem}>
    <Typography className={css.blockTitle}>{title}</Typography>

    <div className={css.blockText}>
      {features.map((item) => (
        <Typography textAlign="start" key={item}>
          {item}
        </Typography>
      ))}
    </div>
  </div>
)

const Values = () => (
  <div className={css.anchor}>
    <div className={css.upperArc} />

    <Container className={css.container}>
      <Typography className={css.title}>
        <span className={css.titleGradient}>Safenet</span> is value-aligned <br />
        with <span style={{ color: '#12ff80' }}>Safe</span>
      </Typography>

      <div className={css.blocksStack}>
        <div className={css.stack} />

        {items.map((item, index) => (
          <BlockItem {...item} key={index} />
        ))}
      </div>

      <div className={css.blocksWrapper}>
        <div className={css.blocks} />

        <Grid container className={css.blocksContainer}>
          {items.map((item, index) => (
            <Grid item>
              <BlockItem {...item} key={index} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className={css.buttonWrapper}>
        <LinkButton>Safenet Vision</LinkButton>
      </div>
    </Container>
  </div>
)

export default Values
