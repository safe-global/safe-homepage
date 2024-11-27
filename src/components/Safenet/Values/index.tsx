import { Container, Grid, Typography } from '@mui/material'
import NextLink from 'next/link'
import LinkButton from '@/components/common/LinkButton'
import { AppRoutes } from '@/config/routes'
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
    title: '27M+',
    text: 'Accounts',
  },
  {
    title: '$159B+',
    text: 'Transfer Volume / Year',
  },
  {
    title: '200+',
    text: 'Ecossytem Builders',
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

      <div className={css.statsContainer}>
        {stats?.map((item, index) => (
          <div className={css.statsItem} key={index}>
            <p className={css.value}>{item.title}</p>

            <Typography variant="caption">{item.text}</Typography>
          </div>
        ))}
      </div>

      <div className={css.buttonWrapper}>
        <NextLink href={AppRoutes.dataroom} target="_blank">
          <LinkButton>Data Room</LinkButton>
        </NextLink>

        <NextLink href={AppRoutes.ecosystem} target="_blank">
          <LinkButton>Ecosystem page</LinkButton>
        </NextLink>
      </div>
    </Container>
  </div>
)

export default Values
