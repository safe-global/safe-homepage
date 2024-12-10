import { Container, IconButton, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import XGradient from '@/public/images/Safenet/x-gradient.svg'
import TelegramGradient from '@/public/images/Safenet/telegram-gradient.svg'
import { SAFENET_TELEGRAM_LINK, SAFENET_WAITING_LIST_LINK, TWITTER_LINK } from '@/config/constants'
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
        <IconButton href={TWITTER_LINK} target="_blank" rel="noreferrer">
          <XGradient />
        </IconButton>

        <IconButton href={SAFENET_TELEGRAM_LINK} target="_blank" rel="noreferrer">
          <TelegramGradient />
        </IconButton>

        <a href={SAFENET_WAITING_LIST_LINK} target="_blank" rel="noreferrer">
          <LinkButton>Join Waitlist</LinkButton>
        </a>
      </div>
    </Container>
  </div>
)

export default Waitlist
