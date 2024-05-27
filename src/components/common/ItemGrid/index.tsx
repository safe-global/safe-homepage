import { Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'
import Link from 'next/link'

const ItemGrid = ({ title, items, icon }: Partial<BaseBlock> & { icon?: React.ReactNode }) => {
  return (
    <div className={css.wrapper}>
      <Grid container mt={{ xs: 5, md: 10 }}>
        {title ? (
          <Typography variant="caption" component="div" mb={3}>
            {title}
          </Typography>
        ) : undefined}

        <Grid container>
          {items
            ? items.map(({ title, text, link }, index) => (
                <Grid key={index} item xs={12} md={12 / items.length} className={css.card}>
                  <div>
                    <div className={css.titleWrapper}>
                      {icon}
                      <Typography variant="h4">{title}</Typography>
                    </div>

                    {text ? (
                      <Typography color="primary.light" component="div" mt={1}>
                        {text}
                      </Typography>
                    ) : undefined}
                  </div>

                  {link && (
                    <Link href={link.href} target="_blank" rel="noreferrer" passHref>
                      <LinkButton>{link.title}</LinkButton>
                    </Link>
                  )}
                </Grid>
              ))
            : null}
        </Grid>
      </Grid>
    </div>
  )
}

export default ItemGrid
