import { Button, Container, IconButton, Typography } from '@mui/material'
import XGradient from '@/public/images/Safenet/x-gradient.svg'
import TelegramGradient from '@/public/images/Safenet/telegram-gradient.svg'
import css from './styles.module.css'

const Waitlist = () => (
  <div className={css.anchor}>
    <img src="/images/Safenet/Waitlist/chain.png" alt="Chain" className={css.chainImage} />

    <Container className={css.container}>
      <Typography className={css.title}>
        Be part of <br />
        <span className={css.titleGradient}>
          <img src="/images/Safenet/Waitlist/hook.png" alt="Adornment hook" className={css.hook} />
          Safenet
        </span>
      </Typography>

      <div className={css.buttonWrapper}>
        <IconButton href="https://x.com/safe" target="_blank" rel="noreferrer">
          <XGradient />
        </IconButton>

        <IconButton href="https://dub.sh/safealpha" target="_blank" rel="noreferrer">
          <TelegramGradient />
        </IconButton>

        <Button
          variant="contained"
          size="large"
          href="https://dub.sh/safealpha"
          target="_blank"
          rel="noreferrer"
          className={css.gradientButton}
        >
          Join Telegram group
        </Button>
      </div>
    </Container>
  </div>
)

export default Waitlist
