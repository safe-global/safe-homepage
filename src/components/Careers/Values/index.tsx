import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { ReactElement } from 'react'

import ArrowIcon from '@/public/images/arrow-out-icon.svg'

import css from './styles.module.css'

export const Values = ({
  title,
  items,
}: {
  title: string
  items: { title: string; text: string; items: string[] }[]
}): ReactElement => {
  return (
    <Container>
      <Grid container className={css.container}>
        <Typography variant="h2" className={css.title}>
          {title}
        </Typography>
        <div className={css.tree}>
          <hr className={css.rule} />
        </div>
        <Grid container item xs={12} gap={{ xs: '48px', md: 0 }}>
          {items.map(({ title, text, items }, _, arr) => (
            <Grid item xs={12} md={Math.floor(12 / arr.length)} className={css.card} key={title}>
              <Typography className={css.value}>{title}</Typography>
              <Typography variant="caption" className={css.desc}>
                {text}
              </Typography>
              <List className={css.list}>
                {items.map((text) => (
                  <ListItem key={text}>
                    <ListItemIcon>
                      <ArrowIcon className={css.icon} />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}
