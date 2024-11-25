import RichText from '@/components/common/RichText'
import { Button, Container, TextField } from '@mui/material'
import { type BaseBlockEntry } from '@/config/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import { useState } from 'react'
import { registerEmail } from '@/lib/resgisterEmailPushwoosh'

const FIELD_NAME = 'email'

const SignUpForm = (props: BaseBlockEntry) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { title, text } = props.fields

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.target as HTMLFormElement)
    const email = data.get(FIELD_NAME)

    registerEmail(email as string, process.env.NEXT_PUBLIC_PUSHWOOSH_APPLICATION_CODE as string, { marketing: 'true' })
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
