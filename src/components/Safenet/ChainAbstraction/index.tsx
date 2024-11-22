import { Container, Grid, Typography } from '@mui/material'
import GradientChip from '@/components/Safenet/GradientChip'
import LinkButton from '@/components/common/LinkButton'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const text =
  'Cross-chain interactions are simplified. Say goodbye to gas free hassles and enjoy a seamless, stress-free experience.'

const items: BaseBlock['items'] = [
  {
    image: {
      src: '/images/Safenet/ChainAbstraction/arrows.png',
      alt: 'Forward arrows',
    },
    title: 'Instant Transaction',
    text: 'Get your transactions executed within 500ms, without cross-chain latency',
  },
  {
    image: {
      src: '/images/Safenet/ChainAbstraction/padlock.png',
      alt: 'Verifiyed padlock',
    },
    title: 'Execution guarantees',
    text: 'Set custom policies and security checks ',
  },
  {
    image: {
      src: '/images/Safenet/ChainAbstraction/blobs.png',
      alt: 'Unified blobs',
    },
    title: (
      <>
        Unified
        <br />
        Balance
      </>
    ),
    text: 'Spend from a single balance across all chains and offchain',
  },
]

const ChainAbstraction = () => (
  <div className={css.anchor}>
    <div className={css.upperArc} />

    <Container className={css.container}>
      <div className={css.contentWrapper}>
        <GradientChip caption="Chain Abstraction" />

        <Typography className={css.title}>
          <>
            Use your assets <br />
            <span className={css.titleGradient}>on any network</span>!
          </>
        </Typography>

        <Typography className={css.text}>{text}</Typography>
      </div>

      <div className={css.blocksStack}>
        {items.map((item, index) => (
          <div className={`${css[`block${index + 1}`]} ${css.blockItem}`} key={index}>
            {item.image ? <img src={item.image.src} alt={item.image.alt} className={css.blockImage} /> : null}
            <Typography className={css.blockTitle}>{item.title}</Typography>
            <Typography className={css.blockText}>{item.text}</Typography>
          </div>
        ))}
      </div>

      <div className={css.blocksWrapper}>
        <Grid container justifyContent="space-between">
          {items.map((item, index) => (
            <Grid item md={4} className={css.blockItem} key={index}>
              {item.image ? <img src={item.image.src} alt={item.image.alt} className={css.blockImage} /> : null}
              <Typography className={css.blockTitle}>{item.title}</Typography>
              <Typography className={css.blockText}>{item.text}</Typography>
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

export default ChainAbstraction
