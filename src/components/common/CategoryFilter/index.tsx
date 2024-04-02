import { ButtonBase, Grid, IconButton, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import CloseIcon from '@/public/images/close.svg'
import css from './styles.module.css'

const CategoryFilter = ({ categories, isColumn = false }: { categories: string[]; isColumn?: boolean }) => {
  const router = useRouter()
  const selectedCategory = router.query.category

  const toggleCategory = (category: string) => {
    const queryParams = { ...router.query }

    if (queryParams.category === category) {
      delete queryParams.category
    } else {
      queryParams.category = category
    }

    router.push(
      {
        query: queryParams,
      },
      undefined,
      { shallow: true },
    )
  }

  return (
    <Grid container className={css.filterWrapper}>
      {categories.map((category) => {
        const isSelected = category === selectedCategory
        const handleClick = () => toggleCategory(category)

        return (
          <Grid item key={category} className={css.filterCard} xs={12} md={isColumn ? 12 : 'auto'}>
            <ButtonBase className={clsx(css.filterButton, { [css.selected]: isSelected })} onClick={handleClick}>
              <Typography>
                {category}
                {isSelected && (
                  <IconButton className={css.closeFilter} onClick={handleClick}>
                    <CloseIcon />
                  </IconButton>
                )}
              </Typography>
            </ButtonBase>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CategoryFilter
