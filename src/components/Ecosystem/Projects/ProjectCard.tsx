import { Avatar, Typography, IconButton, SvgIcon, Chip } from '@mui/material'

import XIcon from '@/public/images/x-icon.svg'
import GithubIcon from '@/public/images/github-icon.svg'

import css from './styles.module.css'
import { ECOSYSTEM_DATA_URL } from '@/config/constants'
import { type EcosystemProjectWithCategories } from '@/hooks/useEcosystemData'
import clsx from 'clsx'

export const ProjectCard = (item: EcosystemProjectWithCategories) => {
  const categories = item.categories_list

  const CardContent = (
    <div className={clsx(css.card, { [css.outline]: item.project_website })}>
      <Avatar className={css.image} src={ECOSYSTEM_DATA_URL + item.logo}>
        &nbsp;
      </Avatar>

      <Typography fontWeight="500" mb={0.5}>
        {item.project}
      </Typography>

      <Typography variant="body2" className={css.description}>
        {item.description}
      </Typography>

      <div className={css.categories}>
        {categories.map((category, idx) => {
          return <Chip key={category + idx} className={css.chip} label={category} />
        })}
      </div>
    </div>
  )

  return (
    <div className={css.cardWrapper}>
      <div className={css.socials}>
        {item.twitter && (
          <IconButton
            aria-label="Twitter link"
            href={item.twitter}
            target="_blank"
            rel="noreferrer"
            size="small"
            sx={{ color: 'primary.light' }}
          >
            <SvgIcon component={XIcon} fontSize="inherit" color="inherit" inheritViewBox />
          </IconButton>
        )}

        {item.github_dev_docs && (
          <IconButton
            aria-label="Github link"
            href={item.github_dev_docs}
            target="_blank"
            rel="noreferrer"
            size="small"
            sx={{ color: 'primary.light' }}
          >
            <SvgIcon component={GithubIcon} fontSize="inherit" color="inherit" inheritViewBox />
          </IconButton>
        )}
      </div>
      {item.project_website ? (
        <a href={item.project_website} target="_blank" rel="noreferrer">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </div>
  )
}
