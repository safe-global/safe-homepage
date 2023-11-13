import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import GreenCircleCheckmarkIcon from '@/public/images/checkmark-circle.svg'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import type { Entry } from 'contentful'
import type { TypeTextBlockListSkeleton } from '@/contentful/types'
import RichText from '@/components/Campaign/RichText'
import BackgroundImage from '@/public/images/Campaigns/faq-bg.png'
import Image from 'next/image'

type TextBlockListEntry = Entry<TypeTextBlockListSkeleton, undefined, string>

const TextBlockList = (props: TextBlockListEntry) => {
  const { title, description, listItems, offset } = props.fields

  return (
    <>
      <Image className={css.bg} src={BackgroundImage} alt="blocks background" />
      <Container className={layoutCss.containerMedium}>
        <Grid container className={css.gridContainer} position="relative">
          <div className={css.spot} />
          {/* offset column */}
          <Grid item lg={offset} />
          <Grid item lg={6}>
            <Typography variant="h1" className={css.title}>
              <RichText {...title} />
            </Typography>
            <Typography mb={5} color="primary.light" width={{ sm: '100%', lg: '66.7%' }}>
              {description}
            </Typography>
          </Grid>
          <Grid item lg={6 - offset}>
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
    </>
  )
}

export default TextBlockList
