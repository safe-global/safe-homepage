import RichText from '@/components/common/RichText'
import { Button, Container, TextField } from '@mui/material'
import { type BaseBlockEntry } from '@/config/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const PUSHWOOSH_ENDPOINT = 'https://api.pushwoosh.com/json/1.3/registerEmail'

const SignUpForm = (props: BaseBlockEntry) => {
  const { title, text } = props.fields

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      email: { value: string }
    }

    fetch(PUSHWOOSH_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: target.email.value, application: process.env.PUSHWOOSH_APPLICATION_CODE }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Email registered successfully.')
        } else {
          console.error('Failed to register email.')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
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
          <Button type="submit" variant="contained" size="large">
            Sign Up
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
