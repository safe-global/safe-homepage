import { Button, Container, Grid, IconButton, Typography } from '@mui/material'
import GradientChip from '@/components/Safenet/GradientChip'
import TelegramGradient from '@/public/images/Safenet/telegram-gradient.svg'
import css from './styles.module.css'
import { ALPHA_TELEGRAM_LINK } from '@/config/constants'

const items: Array<{ title: string; features: Array<string> }> = [
  {
    title: 'Alpha',
    features: ['Cross-chain Accounts', 'Execution guarantees', 'Validity proofs'],
  },
  {
    title: 'Beta',
    features: ['Safe Apps Support', 'SAFE Validator network'],
  },
  {
    title: 'Version 1',
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
          Safenet is coming <span className={css.titleGradient}>2025</span>
        </Typography>

        <Typography className={css.text}>Builder mode on.</Typography>
      </div>

      <img src="/images/Safenet/timeline.png" alt="Safenet timeline" width="100%" className={css.timelineImage} />

      <Grid container className={css.gridContainer}>
        {items.map(({ title, features }, index) => (
          <Grid item md={3} className={css.blockItem} key={index}>
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
