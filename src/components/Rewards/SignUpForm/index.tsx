import RichText from '@/components/common/RichText'
import { Button, Container, TextField } from '@mui/material'
import { type BaseBlockEntry } from '@/config/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import { useState } from 'react'

const PUSHWOOSH_ENDPOINT = 'https://api.pushwoosh.com/json/1.3/registerEmail'
const FIELD_NAME = 'email'

const registerEmail = (email: string) => {
  fetch(PUSHWOOSH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      application: process.env.NEXT_PUBLIC_PUSHWOOSH_APPLICATION_CODE,
      tags: {
        marketing: 'true',
      },
    }),
  }).catch((error) => {
    console.error('Error:', error)
  })
}

const SignUpForm = (props: BaseBlockEntry) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { title, text } = props.fields

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.target as HTMLFormElement)
    const email = data.get(FIELD_NAME)

    registerEmail(email as string)
    setIsSubmitted(true)
  }

  return (
    <Container className={layoutCss.containerMedium}>
      <div className={`${layoutCss.centeredContent} ${css.container}`}>
        <RichText {...title} />

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

        {text && (
          <div className={css.secondaryText}>
            <RichText {...text} />
          </div>
        )}
      </div>
    </Container>
  )
}

export default SignUpForm
