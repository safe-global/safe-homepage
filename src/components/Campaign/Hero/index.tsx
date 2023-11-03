import { Button, Chip, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import css from './styles.module.css'
import type { TypeHeroSkeleton } from '@/contentful/types'
import type { Entry } from 'contentful'
import { isAsset, isEntryTypeButton } from '@/lib/typeGuards'

type HeroEntry = Entry<TypeHeroSkeleton, undefined, string>

const Hero = (props: HeroEntry) => {
  const { caption, title, description, image, button } = props.fields

  return (
    <Container>
      <Grid container justifyContent="space-between">
        <Grid item md={6} gap={24} className={css.textBlock}>
          {caption && (
            <Chip
              label={
                <Typography variant="caption" color="text.primary">
                  {caption}
                </Typography>
              }
              className={css.chip}
              variant="outlined"
            />
          )}
          <Typography variant="h1" mb={4}>
            {title}
          </Typography>
          <Typography variant="h4" mb={5} color="primary.light">
            {description}
          </Typography>
          {isEntryTypeButton(button) ? (
            <Link href={button.fields.btnHref} target="_blank" rel="noreferrer" passHref>
              <Button variant="contained" size="large">
                {button.fields.btnCopy}
              </Button>
            </Link>
          ) : undefined}
        </Grid>

        {isAsset(image) && image.fields.file?.url ? (
          <Grid item md={5}>
            <Image src={image.fields.file.url} alt={`Cover Image for ${title}`} width="400" height="400" />
          </Grid>
        ) : undefined}
      </Grid>
    </Container>
  )
}

export default Hero
