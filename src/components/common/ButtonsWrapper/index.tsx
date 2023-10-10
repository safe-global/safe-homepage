import type { Button as ButtonType } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'
import { Button } from '@mui/material'
import Link from 'next/link'
import css from './styles.module.css'

const ButtonsWrapper = ({ buttons }: { buttons?: ButtonType[] }) => {
  if (!buttons || buttons.length === 0) return null

  return (
    <div className={css.wrapper}>
      {buttons.map((button, index) => {
        const { text, variant, href, color = 'primary' } = button
        const isButton = variant === 'button'

        return (
          <Link key={index} href={href} target="_blank" rel="noreferrer" passHref>
            {isButton ? (
              <Button variant="contained" size="large" color={color}>
                {text}
              </Button>
            ) : (
              <LinkButton>{text}</LinkButton>
            )}
          </Link>
        )
      })}
    </div>
  )
}

export default ButtonsWrapper
