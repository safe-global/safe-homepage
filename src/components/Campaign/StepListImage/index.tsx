import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import Image from 'next/image'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import type { Entry } from 'contentful'
import type { TypeStepListImageSkeleton } from '@/contentful/types'
import { isAsset } from '@/lib/typeGuards'

type StepListImageEntry = Entry<TypeStepListImageSkeleton, undefined, string>

const StepListImage = (props: StepListImageEntry) => {
  const { steps, image } = props.fields

  return (
    <Container className={layoutCss.containerMedium}>
      <Grid container justifyContent="space-between">
        <Grid item md={6} className={css.stepListBlock}>
          <List component="ol" className={css.listWrapper}>
            {steps.map((item: any, index: number) => (
              <ListItem key={index} className={css.listItem}>
                <div className={css.listItemNumber}>{index}</div>
                <ListItemText primary={<Typography variant="h4">{item}</Typography>} />
              </ListItem>
            ))}
          </List>
        </Grid>
        {isAsset(image) && image.fields.file?.url ? (
          <Grid item md={4}>
            <Image src={image.fields.file.url} alt={`${image.fields.title}`} width="380" height="644" />
          </Grid>
        ) : undefined}
      </Grid>
    </Container>
  )
}

export default StepListImage
