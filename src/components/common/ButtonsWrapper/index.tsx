import type { Button as ButtonType } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'
import { Button } from '@mui/material'
import Link from 'next/link'
import css from './styles.module.css'

const ButtonsWrapper = ({ buttons, btnColor }: { buttons?: ButtonType[]; btnColor: 'primary' | 'secondary' }) => {
  if (!buttons || buttons.length === 0) return null

  return (
    <div className={css.wrapper}>
      {buttons.map((button, index) => {
        const { text, variant, href } = button
        const isButton = variant === 'button'

        return (
          <Link key={index} href={href} target="_blank" rel="noreferrer" passHref>
            {isButton ? (
              <Button variant="contained" size="large" color={btnColor}>
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
