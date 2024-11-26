import { Button, Container, Grid, IconButton, Typography } from '@mui/material'
import GradientChip from '@/components/Safenet/GradientChip'
import { ALPHA_TELEGRAM_LINK } from '@/config/constants'
import TelegramGradient from '@/public/images/Safenet/telegram-gradient.svg'
import css from './styles.module.css'

const items: Array<{ title: string; tag: string; features: Array<string> }> = [
  {
    title: 'Alpha',
    tag: 'Q1 2025',
    features: ['Cross-chain Accounts', 'Execution guarantees', 'Validity proofs'],
  },
  {
    title: 'Beta',
    tag: 'Q2 2025',
    features: ['Safe Apps Support', 'SAFE Validator network'],
  },
  {
    title: 'Version 1',
    tag: 'Q3-Q4 2025',
    features: ['Third-party Processors', 'Liquidity Network', 'ERC-7579 Support'],
  },
]

const Roadmap = () => {
  return (
    <Container className={css.container}>
      <div className={css.contentWrapper}>
        <GradientChip caption="Roadmap" />

        <Typography className={css.title}>
          <img src="/images/Safenet/roadmap-hook.png" alt="Addornment" className={css.hook} />
          Safenet
          <br /> is coming <span className={css.titleGradient}>2025</span>
        </Typography>

        <Typography className={css.text}>Builder mode on.</Typography>
      </div>

      <img src="/images/Safenet/timeline.png" alt="Safenet timeline" width="100%" className={css.timelineImage} />

      <Grid container className={css.gridContainer}>
        {items.map(({ title, features }, index) => (
          <Grid item xs={6} md={3} className={css.blockItem} key={index}>
            <div className={`${css.mobileTag} ${css[`mobileTag${index + 1}`]}`}>Q1 2025</div>

            <Typography className={css.blockTitle}>{title}</Typography>

            <div className={css.blockText}>
              {features.map((item) => (
                <Typography key={item}>{item}</Typography>
              ))}
            </div>
          </Grid>
        ))}
      </Grid>

      <div className={css.buttonWrapper}>
        <IconButton href={ALPHA_TELEGRAM_LINK} target="_blank" rel="noreferrer">
          <TelegramGradient />
        </IconButton>

        <Typography>Stay in the loop for all the latest insights!</Typography>

        <Button
          variant="contained"
          size="large"
          href={ALPHA_TELEGRAM_LINK}
          target="_blank"
          rel="noreferrer"
          className={css.gradientButton}
        >
          Join Telegram group
        </Button>
      </div>
    </Container>
  )
}

export default Roadmap
