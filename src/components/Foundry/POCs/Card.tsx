import { Typography } from '@mui/material'
import RichText from '@/components/common/RichText'
import ButtonsWrapper from '@/components/Token/ButtonsWrapper'
import { isAsset, isEntryTypeButton } from '@/lib/typeGuards'
import { type BaseBlockEntry } from '@/config/types'
import GithubIcon from '@/public/images/github-icon.svg'
import css from './styles.module.css'

const Card = (props: BaseBlockEntry) => {
  const { caption, title, text, link, image, buttons } = props.fields

  const buttonsList = buttons?.filter(isEntryTypeButton) || []

  return (
    <div className={css.card}>
      <div className={css.cardHeader}>
        <Typography variant="h4">
          <RichText {...title} />
        </Typography>

        <GithubIcon />
      </div>

      <div className={css.cardBody}>
        {text ? <RichText {...text} /> : null}

        <div className={css.extraText}>
          <Typography color="primary.light">{caption}</Typography>

          {isAsset(image) && image.fields.file?.url ? (
            <div className={css.partner}>
              <img src={image.fields.file.url} alt={image.fields.title ?? ''} />
              <span>{image.fields.description}</span>
            </div>
          ) : null}
        </div>

        <div className={css.buttons}>
          <ButtonsWrapper buttons={buttonsList} />
        </div>
      </div>
    </div>
  )
}

export default Card
