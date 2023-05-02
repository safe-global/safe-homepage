import type { ReactElement } from 'react'
import {
  Container,
  Avatar,
  Divider,
  Grid,
  Typography,
  IconButton,
  SvgIcon,
  Chip,
  TextField,
  InputAdornment,
} from '@mui/material'
import TwitterIcon from '@/public/images/twitter-icon.svg'
import GithubIcon from '@/public/images/github-icon.svg'
import SearchIcon from '@/public/images/search.svg'

import EcosystemDB from '@/content/ecosystem-data.json'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import clsx from 'clsx'

type EcosystemProject = {
  project: string
  project_scope: string
  primary_category: string
  secondary_categories: string
  logo: string
  value_prop: string
  project_website: string
  github_dev_docs: string
  team_contact: string
  twitter: string
  primary_integration: string
  packages: string
  modules_guards: string
  safe_apps_smart: string
  networks: string
  interface_can_you_create_a_safe: string
  interface_can_you_import_an_existing_safe: string
}

const Card = ({ ...item }: EcosystemProject) => {
  const categories = item.primary_category
    .split(',')
    .concat(item.secondary_categories.split(','))
    .filter((element) => element)

  return (
    <Grid item xs={12} md={4}>
      <div className={css.card}>
        <Avatar sx={{ width: 48, height: 48, mb: 2 }}>&nbsp;</Avatar>
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
              <SvgIcon component={TwitterIcon} fontSize="inherit" color="inherit" inheritViewBox />
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
        <Typography fontWeight="500" mb={0.5}>
          {item.project}
        </Typography>
        <Typography variant="body2" color="primary.light">
          {item.value_prop}
        </Typography>
        <div className={css.categories}>
          {categories &&
            categories.map((category) => {
              return <Chip className={css.categoryChip} label={category} />
            })}
        </div>
      </div>
    </Grid>
  )
}

export const Projects = ({ title, buttons, caption }: BaseBlock): ReactElement => {
  const projects = EcosystemDB as EcosystemProject[]

  return (
    <Container className={clsx(layoutCss.containerMedium, css.wrapper)}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <TextField
            className={css.searchField}
            variant="outlined"
            placeholder="Search by name or category"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          <Typography mt={2}>
            <Typography component="span" color="primary.light">
              Example:
            </Typography>{' '}
            DeFi, DAO Tooling, Payments, NFT, Infrastructure
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 9 }} />
      <Grid container>
        <Grid item xs={12} md={3}>
          Sidebar
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing="30px">
            {projects &&
              projects.map((ecosystemProject) => {
                return <Card key={ecosystemProject.project} {...ecosystemProject} />
              })}
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ mt: '100px', mb: '100px' }} />
    </Container>
  )
}

export default Projects
