import { Button, Container, TextField } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import { useState } from 'react'
import { PUSHWOOSH_ENDPOINT } from '@/config/constants'
import CenteredTextBlock from '@/components/common/CenteredTextBlock'
import Link from 'next/link'

const FIELD_NAME = 'email'

const registerEmail = (email: string) => {
  fetch(PUSHWOOSH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      application: process.env.NEXT_PUBLIC_PUSHWOOSH_WALLET_APPLICATION_CODE,
    }),
  }).catch((error) => {
    console.error('Error:', error)
  })
}

const SignUpForm = (props: BaseBlock) => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.target as HTMLFormElement)
    const email = data.get(FIELD_NAME)

    registerEmail(email as string)
    setIsSubmitted(true)
  }

  return (
    <Container className={`${layoutCss.containerMedium} ${css.container}`}>
      <CenteredTextBlock {...props} />

      <div className={layoutCss.centeredContent}>
        <form onSubmit={handleSubmit} className={css.form}>
          <TextField
            id="outlined-basic"
            label="Email:"
            variant="outlined"
            type="email"
            name="email"
            className={css.textField}
          />
          <Button type="submit" variant="contained" size="large" disabled={isSubmitted}>
            {isSubmitted ? 'Submitted!' : 'Sign Up'}
          </Button>
        </form>

        <div className={css.secondaryText}>
          By signing up to the newsletter, I confirm that I read and agree to the{' '}
          <Link href="https://safe.global/privacy" target="_blank" rel="noreferrer">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </Container>
  )
}

export default SignUpForm
