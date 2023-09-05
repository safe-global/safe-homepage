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
  Link,
  CircularProgress,
} from '@mui/material'
import clsx from 'clsx'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import type { NextRouter } from 'next/router'
import type { GridProps } from '@mui/material'
import type { Dispatch, ReactElement, SetStateAction } from 'react'

import SearchIcon from '@/public/images/search.svg'
import CrossIcon from '@/public/images/cross.svg'
import CloseIcon from '@/public/images/close.svg'
import FilterIcon from '@/public/images/filter.svg'
import ArrowBackIcon from '@/public/images/arrow-back.svg'
import { useProjectSearch } from './useProjectsSearch'
import { SidebarAccordion } from './SidebarAccordion'
import { ProjectCard } from './ProjectCard'
import {
  getPrimaryProjectCategories,
  getProjectCategories,
  getProjectIntegrations,
  getProjectNetworks,
} from './project-utils'
import type { EcosystemProject, EcosystemProjectWithCategories } from '@/hooks/useEcosystemData'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import { useEcosystemData } from '@/hooks/useEcosystemData'
import { type BaseBlock } from '@/components/Home/types'
import Cards from '@/components/Ecosystem/Cards'

const getUniqueStrings = (entries: string[]) => {
  const uniqueEntries = new Set(entries)
  return Array.from(uniqueEntries).sort()
}

const getProjectsWithCategories = (projects: EcosystemProject[]): EcosystemProjectWithCategories[] => {
  return projects.map((project) => {
    const categories = getProjectCategories(project)
    return { ...project, categories_list: categories }
  })
}

export const _getFilteredProjects = ({
  projects,
  selectedCategories,
  selectedIntegrations,
  selectedNetworks,
}: {
  projects: EcosystemProjectWithCategories[]
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
    const categories = project.categories_list
    const integrations = getProjectIntegrations(project)
    const networks = getProjectNetworks(project)

    return (
      isMatch(categories, selectedCategories) &&
      isMatch(integrations, selectedIntegrations) &&
      isMatch(networks, selectedNetworks)
    )
  })
}

const SpecificCategoryFilter = ({
  category,
  onClick,
}: {
  category: EcosystemProject['primary_category']
  onClick: (category: EcosystemProject['primary_category']) => void
}) => {
  return (
    <button className={css.baseButton} onClick={() => onClick(category)}>
      {category}
    </button>
  )
}

const EMPTY_FILTER: Array<string> = []

const DIVIDER_Y_MARGIN = 9

const GRID_SPACING: GridProps['spacing'] = {
  xs: 2,
  md: '30px',
}

const PAGE_LENGTH = 12

const PAGE_QUERY_PARAM = 'page'

const getPage = (query: NextRouter['query']): number => {
  const page = Array.isArray(query[PAGE_QUERY_PARAM]) ? query[PAGE_QUERY_PARAM][0] : query[PAGE_QUERY_PARAM]

  return Number(page) || 1
}

export const Projects = ({ items }: BaseBlock): ReactElement => {
  const [query, setQuery] = useState('')
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

  const [selectedCategories, setSelectedCategories] = useState(EMPTY_FILTER)
  const [selectedIntegrations, setSelectedIntegrations] = useState(EMPTY_FILTER)
  const [selectedNetworks, setSelectedNetworks] = useState(EMPTY_FILTER)

  const router = useRouter()
  const page = getPage(router.query)

  const { data: rawProjects = [], isLoading } = useEcosystemData()

  const projects = useMemo(() => getProjectsWithCategories(rawProjects), [rawProjects])

  // Categories
  const allCategories = useMemo(() => projects.flatMap((project) => project.categories_list), [projects])
  const uniqueCategories = useMemo(() => getUniqueStrings(allCategories), [allCategories])

  const allPrimaryCategories = useMemo(() => projects.flatMap(getPrimaryProjectCategories), [projects])
  const uniquePrimaryCategories = useMemo(() => getUniqueStrings(allPrimaryCategories), [allPrimaryCategories])

  // Integrations
  const allIntegrations = useMemo(() => projects.flatMap(getProjectIntegrations), [projects])
  const uniqueIntegrations = useMemo(() => getUniqueStrings(allIntegrations), [allIntegrations])

  // Networks
  const allNetworks = useMemo(() => projects.flatMap(getProjectNetworks), [projects])
  const uniqueNetworks = useMemo(() => getUniqueStrings(allNetworks), [allNetworks])

  const onResetSearch = () => {
    setQuery('')
  }

  const onResetFilters = () => {
    setSelectedCategories(EMPTY_FILTER)
    setSelectedIntegrations(EMPTY_FILTER)
    setSelectedNetworks(EMPTY_FILTER)
  }

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

  const toggleSpecificCategory = (category: EcosystemProject['primary_category']) => {
    return onSelectCategory(category, !selectedCategories.includes(category))
  }

  const noFilters = useMemo(() => {
    return selectedCategories.length === 0 && selectedIntegrations.length === 0 && selectedNetworks.length === 0
  }, [selectedCategories, selectedIntegrations, selectedNetworks])

  // Category filtered results
  const filteredProjects = useMemo(() => {
    if (noFilters) {
      return projects
    }

    return _getFilteredProjects({ projects, selectedCategories, selectedIntegrations, selectedNetworks })
  }, [noFilters, projects, selectedCategories, selectedIntegrations, selectedNetworks])

  // Search results
  const searchResults = useProjectSearch(filteredProjects, query)

  // Paginated filtered/search-based results
  const visibleResults = searchResults.slice(0, PAGE_LENGTH * page)

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
        <Cards items={items} />

        <Divider sx={{ my: 5 }} />

        <Grid container mb={8}>
          <Grid item xs={12} md={8}>
            <TextField
              className={css.searchField}
              variant="outlined"
              placeholder="Search by name, description or category"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: query ? (
                  <InputAdornment position="end">
                    <IconButton onClick={onResetSearch}>
                      <CloseIcon />
                    </IconButton>
                  </InputAdornment>
                ) : undefined,
              }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              fullWidth
            />

            <Typography mt={2}>
              <Typography component="span" color="primary.light">
                Example:
              </Typography>{' '}
              {uniquePrimaryCategories.map((primaryCategory, idx, { length }) => {
                return (
                  <>
                    <SpecificCategoryFilter
                      key={primaryCategory + idx}
                      category={primaryCategory}
                      onClick={toggleSpecificCategory}
                    />
                    {idx !== length - 1 && <>, </>}
                  </>
                )
              })}
            </Typography>
          </Grid>
        </Grid>

        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={GRID_SPACING}>
            <Grid item xs={12} md={3} display="flex" alignItems="center" justifyContent="space-between">
              <Typography>
                {searchResults.length}{' '}
                <Typography color="primary.light" component="span">
                  result{searchResults.length === 1 ? '' : 's'}
                </Typography>
              </Typography>
              {!noFilters && (
                <Link onClick={onResetFilters} className={css.reset} variant="caption">
                  Reset all
                </Link>
              )}
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
                    <Grid item xs={12} md={6} lg={4} key={project.project + idx}>
                      <ProjectCard {...project} />
                    </Grid>
                  ))}
                  {shouldShowMoreButton && (
                    <Grid item xs={12} mt={{ xs: 2, md: 0 }} display="flex" justifyContent="center">
                      <NextLink
                        href={{ query: { [PAGE_QUERY_PARAM]: page + 1 } }}
                        shallow
                        // Pagination marker for search engines
                        rel="next"
                      >
                        <Button variant="contained" size="large">
                          Show more
                        </Button>
                      </NextLink>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Typography variant="body2" maxWidth={470} mb={{ md: 8 }} mx="auto" textAlign="center">
                      Listings are not endorsements and are only for informational purposes. Users should do their own
                      research before interacting with them.
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <SearchIcon />
                  <Typography variant="h4" my={2}>
                    No results found for {query || 'selected filters'}
                  </Typography>
                  <Typography color="primary.light">Try searching something else</Typography>
                </div>
              )}
            </Grid>
          </Grid>
        )}

        <Divider sx={{ my: DIVIDER_Y_MARGIN }} />
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
