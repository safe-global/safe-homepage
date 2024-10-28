import { ALPHA_TELEGRAM_LINK } from '@/config/constants'
import css from './styles.module.css'

const HeaderLetter = () => (
  <div className={css.header}>
    <div className={css.telegramWrapper}>
      <a href={ALPHA_TELEGRAM_LINK} target="_blank" rel="noreferrer" className={css.telegramLink}>
        Join
        <img src="/images/telegram-logo.svg" alt="Telegram logo" />
      </a>

      <div>{`to get Safe{Alpha}`}</div>
    </div>
  </div>
)

export default HeaderLetter
