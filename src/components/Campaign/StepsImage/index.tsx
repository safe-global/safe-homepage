import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import css from './styles.module.css'
import type { Entry } from 'contentful'
import type { TypeStepsImageSkeleton } from '@/contentful/types'
import { isAsset } from '@/lib/typeGuards'

type StepsImageEntry = Entry<TypeStepsImageSkeleton, undefined, string>

const StepsImage = (props: StepsImageEntry) => {
  const { steps, image } = props.fields

  return (
    <Container>
      <Grid container className={css.gridContainer}>
        <div className={css.spot} />
        <Grid item md={1} />
        <Grid item md={5} className={css.stepListBlock}>
          <List component="ol" className={css.listWrapper}>
            {steps.map((item: any, index: number) => (
              <ListItem key={index} className={css.listItem}>
                <div className={css.listItemNumber}>{index + 1}</div>
                <ListItemText primary={<Typography variant="h4">{item}</Typography>} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item md={2} />

        {isAsset(image) && image.fields.file?.url ? (
          <Grid item md={4} className={css.image}>
            <img src={image.fields.file.url} alt={`${image.fields.title}`} />
          </Grid>
        ) : undefined}
      </Grid>
    </Container>
  )
}

export default StepsImage
