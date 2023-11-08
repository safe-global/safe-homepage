import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import GreenCircleCheckmarkIcon from '@/public/images/checkmark-circle.svg'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import type { Entry } from 'contentful'
import type { TypeTextBlockListCenteredSkeleton } from '@/contentful/types'
import RichText from '@/components/Campaign/RichText'

type TextBlockListCenteredEntry = Entry<TypeTextBlockListCenteredSkeleton, undefined, string>

const TextBlockListCentered = (props: TextBlockListCenteredEntry) => {
  const { title, description, listItems } = props.fields

  return (
    <Container className={layoutCss.containerMedium}>
      <Grid container position="relative">
        <div className={css.spot} />
        {/* offset column */}
        <Grid item lg={1} />
        <Grid item lg={6}>
          <Typography variant="h1" className={css.title}>
            <RichText {...title} />
          </Typography>
          <Typography mb={5} color="primary.light" width={{ sm: '100%', lg: '66.7%' }}>
            {description}
          </Typography>
        </Grid>
        <Grid item lg={5}>
          <List>
            {listItems.map((item: any, index: number) => (
              <ListItem key={index}>
                <ListItemIcon className={css.listItemIcon}>
                  <SvgIcon component={GreenCircleCheckmarkIcon} fontSize="inherit" color="inherit" inheritViewBox />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="h4">{item}</Typography>} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TextBlockListCentered
