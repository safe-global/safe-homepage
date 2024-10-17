import css from './styles.module.css'

const HeaderLetter = () => (
  <div className={css.header}>
    <div className={css.telegramWrapper}>
      <a href="" target="_blank" rel="noreferrer" className={css.telegramLink}>
        Join
        <img src="/images/telegram-logo.svg" alt="Telegram logo" />
      </a>

      <div>{`to get Safe{Alpha}`}</div>
    </div>
  </div>
)

export default HeaderLetter
