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

const stats = [
  {
    title: '$100B+',
    text: 'Total Value Locked (TVL)',
    link: {
      href: 'https://dune.com/safe/all',
    },
  },
  {
    title: '6.4M',
    text: 'Monthly Active Users (MAU)',
    link: {
      href: 'https://dune.com/queries/3670603',
    },
  },
  {
    title: '$150B+',
    text: 'Total Volume Processed (TVP)',
    link: {
      href: 'https://dune.com/safe/all',
    },
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
        <img src="/images/Safenet/Values/processor.png" alt="Processor image" className={css.processor} />

        {items.map((item, index) => (
          <BlockItem {...item} key={index} />
        ))}
      </div>

      <div className={css.blocksWrapper}>
        <div className={css.blocks} />
        <img src="/images/Safenet/Values/processor.png" alt="Processor image" className={css.processor} />
        <img src="/images/Safenet/Values/cross.png" alt="Cross image" className={css.cross} />

        <Grid container className={css.blocksContainer}>
          {items.map((item, index) => (
            <Grid item key={index}>
              <BlockItem {...item} />
            </Grid>
          ))}
        </Grid>
      </div>

      <Grid container spacing={{ xs: '30px', xl: '50px' }} justifyContent="space-between">
        {stats?.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <a href="" target="_blank" rel="noreferrer" className={css.metric}>
              {/* TODO: Fetch these values from a Dune query */}
              <p className={css.value}>{item.title}</p>

              <Typography variant="caption">{item.text}</Typography>
            </a>
          </Grid>
        ))}
      </Grid>

      <div className={css.buttonWrapper}>
        <LinkButton>Safenet Vision</LinkButton>
      </div>
    </Container>
  </div>
)

export default Values
