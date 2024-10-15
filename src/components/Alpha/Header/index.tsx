import css from './styles.module.css'

const HeaderLetter = () => (
  <div className={css.header}>
    <div className={css.telegramWrapper}>
      <a href="https://t.me/safechat" target="_blank" rel="noreferrer" className={css.telegramLink}>
        Join
        <img src="/images/telegram-logo.svg" alt="Telegram logo" />
      </a>

      <p>{`to get Safe{Alpha}`}</p>
    </div>
  </div>
)

export default HeaderLetter
