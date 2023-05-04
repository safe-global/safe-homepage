import {
  Container,
  Divider,
  Grid,
  Typography,
  Chip,
  TextField,
  InputAdornment,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from '@mui/material'
import clsx from 'clsx'
import { useMemo, useState } from 'react'
import type { Dispatch, ReactElement, SetStateAction } from 'react'

import SearchIcon from '@/public/images/search.svg'
import CrossIcon from '@/public/images/cross.svg'
import FilterIcon from '@/public/images/filter.svg'
import ArrowBackIcon from '@/public/images/arrow-back.svg'
import { useProjectSearch } from './useProjectsSearch'
import { SidebarAccordion } from './SidebarAccordion'
import { ProjectCard } from './ProjectCard'
import { getProjectCategories, getProjectIntegrations, getProjectNetworks } from './project-utils'

import EcosystemDB from '@/content/ecosystem-data.json'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export type EcosystemProject = {
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

const projects = EcosystemDB as EcosystemProject[]

const getUniqueStrings = (entries: string[]) => {
  const uniqueEntries = new Set(entries)
  return Array.from(uniqueEntries).sort()
}

// Categories
const allCategories = projects.flatMap(getProjectCategories)
const uniqueCategories = getUniqueStrings(allCategories)

// Integrations
const allIntegrations = projects.flatMap(getProjectIntegrations)
const uniqueIntegrations = getUniqueStrings(allIntegrations)

// Networks
const allNetworks = projects.flatMap(getProjectNetworks)
const uniqueNetworks = getUniqueStrings(allNetworks)

const getFilteredProjects = ({
  selectedCategories,
  selectedIntegrations,
  selectedNetworks,
}: {
  selectedCategories: string[]
  selectedIntegrations: string[]
  selectedNetworks: string[]
}) => {
  const isMatch = (all: string[], selected: string[]) => {
    // No selection means no filter applied
    if (selected.length === 0) {
      return true
    }

    return selected.some((item) => {
      return all.includes(item)
    })
  }

  return projects.filter((project) => {
    const categories = getProjectCategories(project)
    const integrations = getProjectIntegrations(project)
    const networks = getProjectNetworks(project)

    return (
      isMatch(categories, selectedCategories) &&
      isMatch(integrations, selectedIntegrations) &&
      isMatch(networks, selectedNetworks)
    )
  })
}

const SPACING_XS = 2
const SPACING_MD = '30px'

export const Projects = (): ReactElement => {
  const [query, setQuery] = useState<string>('')
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([])
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>([])

  const onSelect = (setState: Dispatch<SetStateAction<string[]>>) => (property: string, checked: boolean) => {
    setState((prev) => {
      if (checked) {
        return prev.concat(property)
      } else {
        return prev.filter((item) => item !== property)
      }
    })
  }

  const onSelectCategory = onSelect(setSelectedCategories)
  const onSelectIntegration = onSelect(setSelectedIntegrations)
  const onSelectNetwork = onSelect(setSelectedNetworks)

  const filteredProjects = useMemo(() => {
    return getFilteredProjects({ selectedCategories, selectedIntegrations, selectedNetworks })
  }, [selectedCategories, selectedIntegrations, selectedNetworks])

  const searchResult = useProjectSearch(filteredProjects, query)

  const sidebar = (
    <>
      <SidebarAccordion
        title="Category"
        items={uniqueCategories}
        selectedItems={selectedCategories}
        onChange={onSelectCategory}
      />

      <SidebarAccordion
        title="Integration type"
        items={uniqueIntegrations}
        selectedItems={selectedIntegrations}
        onChange={onSelectIntegration}
      />

      <SidebarAccordion
        title="Network type"
        items={uniqueNetworks}
        selectedItems={selectedNetworks}
        onChange={onSelectNetwork}
      />
    </>
  )

  return (
    <>
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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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

        <Grid container spacing={{ xs: SPACING_XS, md: SPACING_MD }}>
          <Grid item xs={12} md={3} display="flex" alignItems="center" justifyContent="space-between">
            <Typography>
              {searchResult.length}{' '}
              <Typography color="primary.light" component="span">
                results
              </Typography>
            </Typography>
            <Button
              variant="outlined"
              className={css.filterButton}
              startIcon={<FilterIcon />}
              onClick={() => setIsFilterDrawerOpen(true)}
            >
              Filter
            </Button>
          </Grid>

          <Grid item xs={12} md={9} className={css.chipContainer}>
            {selectedCategories.map((category) => (
              <Chip
                key={category}
                className={css.chip}
                label={category}
                onDelete={() => onSelectCategory(category, false)}
                deleteIcon={<CrossIcon />}
              />
            ))}

            {selectedIntegrations.map((integration) => (
              <Chip
                key={integration}
                className={css.chip}
                label={integration}
                onDelete={() => onSelectIntegration(integration, false)}
                deleteIcon={<CrossIcon />}
              />
            ))}

            {selectedNetworks.map((network) => (
              <Chip
                key={network}
                className={css.chip}
                label={network}
                onDelete={() => onSelectNetwork(network, false)}
                deleteIcon={<CrossIcon />}
              />
            ))}
          </Grid>

          <Grid item xs={12} md={3} className={css.sidebar}>
            {sidebar}
          </Grid>

          <Grid
            item
            container
            xs={12}
            md={9}
            spacing={{ xs: SPACING_XS, md: SPACING_MD }}
            display="flex"
            alignContent="flex-start"
          >
            {searchResult.map((ecosystemProject, idx) => {
              return (
                <Grid item xs={12} md={4} key={ecosystemProject.project + idx}>
                  <ProjectCard {...ecosystemProject} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>

        <Divider sx={{ my: '100px' }} />
      </Container>

      <Dialog fullScreen open={isFilterDrawerOpen}>
        <AppBar className={css.appBar}>
          <Toolbar disableGutters>
            <IconButton onClick={() => setIsFilterDrawerOpen(false)} sx={{ padding: 2 }}>
              <ArrowBackIcon />
            </IconButton>
            <Divider orientation="vertical" />
            <Box p={2} color="white">
              Filter
            </Box>
          </Toolbar>
        </AppBar>
        <div className={css.filterWrapper}>
          {sidebar}
          <span style={{ flex: 1 }} />
          <Button variant="contained" size="large" fullWidth onClick={() => setIsFilterDrawerOpen(false)}>
            Show results
          </Button>
        </div>
      </Dialog>
    </>
  )
}

export default Projects
