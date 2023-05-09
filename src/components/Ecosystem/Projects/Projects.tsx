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
import type { GridProps } from '@mui/material'
import type { Dispatch, ReactElement, SetStateAction } from 'react'

import SearchIcon from '@/public/images/search.svg'
import CrossIcon from '@/public/images/cross.svg'
import FilterIcon from '@/public/images/filter.svg'
import ArrowBackIcon from '@/public/images/arrow-back.svg'
import { useProjectSearch } from './useProjectsSearch'
import { SidebarAccordion } from './SidebarAccordion'
import { ProjectCard } from './ProjectCard'
import { getProjectCategories, getProjectIntegrations, getProjectNetworks } from './project-utils'
import { type EcosystemProject } from '@/hooks/useEcosystemData'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import { useEcosystemData } from '@/hooks/useEcosystemData'
import { type BaseBlock } from '@/components/Home/types'
import Cards from '@/components/Ecosystem/Cards'

const getUniqueStrings = (entries: string[]) => {
  const uniqueEntries = new Set(entries)
  return Array.from(uniqueEntries).sort()
}

export const _getFilteredProjects = ({
  projects,
  selectedCategories,
  selectedIntegrations,
  selectedNetworks,
}: {
  projects: EcosystemProject[]
  selectedCategories: string[]
  selectedIntegrations: string[]
  selectedNetworks: string[]
}) => {
  const isMatch = (all: string[], selected: string[]) => {
    // No selection means no filter applied
    if (selected.length === 0) {
      return true
    }

    return selected.every((item) => {
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

const GRID_SPACING: GridProps['spacing'] = {
  xs: 2,
  md: '30px',
}

const PAGE_LENGTH = 12

export const Projects = ({ items }: BaseBlock): ReactElement => {
  const [query, setQuery] = useState('')
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([])
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>([])

  const [pageLength, setPageLength] = useState(PAGE_LENGTH)

  const { data: projects = [] } = useEcosystemData()

  // Categories
  const allCategories = useMemo(() => projects.flatMap(getProjectCategories), [projects])
  const uniqueCategories = useMemo(() => getUniqueStrings(allCategories), [allCategories])

  // Integrations
  const allIntegrations = useMemo(() => projects.flatMap(getProjectIntegrations), [projects])
  const uniqueIntegrations = useMemo(() => getUniqueStrings(allIntegrations), [allIntegrations])

  // Networks
  const allNetworks = useMemo(() => projects.flatMap(getProjectNetworks), [projects])
  const uniqueNetworks = useMemo(() => getUniqueStrings(allNetworks), [allNetworks])

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

  const onShowMore = () => {
    setPageLength((val) => {
      return val + PAGE_LENGTH
    })
  }

  // Category filtered results
  const filteredProjects = useMemo(() => {
    const noFilters =
      selectedCategories.length === 0 && selectedIntegrations.length === 0 && selectedNetworks.length === 0

    if (noFilters) {
      return projects
    }

    return _getFilteredProjects({ projects, selectedCategories, selectedIntegrations, selectedNetworks })
  }, [projects, selectedCategories, selectedIntegrations, selectedNetworks])

  // Search results
  const searchResults = useProjectSearch(filteredProjects, query)

  // Paginated filtered/search-based results
  const visibleResults = searchResults.slice(0, pageLength)

  const shouldShowMoreButton = visibleResults.length < searchResults.length

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
        <Grid container mb={7}>
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

        <Cards items={items} />

        <Divider sx={{ my: 9 }} />

        <Grid container spacing={GRID_SPACING}>
          <Grid item xs={12} md={3} display="flex" alignItems="center" justifyContent="space-between">
            <Typography>
              {searchResults.length}{' '}
              <Typography color="primary.light" component="span">
                result{searchResults.length === 1 ? '' : 's'}
              </Typography>
            </Typography>
            <Button variant="outlined" className={css.filterButton} onClick={() => setIsFilterDrawerOpen(true)}>
              <FilterIcon />
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

          <Grid item xs={12} md={9}>
            {visibleResults.length > 0 ? (
              <Grid container spacing={GRID_SPACING} display="flex" alignContent="flex-start">
                {visibleResults.map((project, idx) => (
                  <Grid item xs={12} md={4} key={project.project + idx}>
                    <ProjectCard {...project} />
                  </Grid>
                ))}
                {shouldShowMoreButton && (
                  <Grid item xs={12} display="flex" justifyContent="center">
                    <Button variant="contained" size="large" onClick={onShowMore}>
                      Show more
                    </Button>
                  </Grid>
                )}
              </Grid>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <SearchIcon />
                <Typography variant="h4" my={2}>
                  No results found for
                  <br />
                  {query}
                </Typography>
                <Typography color="primary.light">Try searching something else</Typography>
              </div>
            )}
          </Grid>
        </Grid>

        <Divider sx={{ my: '100px' }} />
      </Container>

      <Dialog fullScreen open={isFilterDrawerOpen}>
        <AppBar className={css.appBar}>
          <Toolbar disableGutters>
            <IconButton onClick={() => setIsFilterDrawerOpen(false)} className={css.backButton} disableRipple>
              <ArrowBackIcon />
            </IconButton>
            <Divider orientation="vertical" />
            <Box p={2}>Filter</Box>
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
