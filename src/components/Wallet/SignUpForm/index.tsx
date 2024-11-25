import { Button, Container, TextField } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import { useState } from 'react'
import CenteredTextBlock from '@/components/common/CenteredTextBlock'
import Link from 'next/link'
import { AppRoutes } from '@/config/routes'
import { registerEmail } from '@/lib/resgisterEmailPushwoosh'

const FIELD_NAME = 'email'

const SignUpForm = (props: BaseBlock) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const data = new FormData(e.target as HTMLFormElement)
    const email = data.get(FIELD_NAME)

    try {
      await registerEmail(email as string, process.env.NEXT_PUBLIC_PUSHWOOSH_WALLET_APPLICATION_CODE as string)
      setIsSubmitted(true)
    } catch (error) {
      setError('Failed to register email.')
    }
  }

  return (
    <Container className={`${layoutCss.containerMedium} ${css.container}`}>
      <CenteredTextBlock {...props} />

      <div className={layoutCss.centeredContent}>
        <form onSubmit={handleSubmit} className={css.form}>
          <TextField
            label="Email:"
            variant="outlined"
            type="email"
            name={FIELD_NAME}
            error={!!error}
            helperText={error}
            onChange={() => setError('')}
            className={css.textField}
          />

          <Button type="submit" variant="contained" size="large" disabled={isSubmitted}>
            {isSubmitted ? 'Submitted!' : 'Sign Up'}
          </Button>
        </form>

        <div className={css.secondaryText}>
          By signing up to the newsletter, I confirm that I read and agree to the{' '}
          <Link href={AppRoutes.privacy} target="_blank" rel="noreferrer">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </Container>
  )
}

export default SignUpForm
