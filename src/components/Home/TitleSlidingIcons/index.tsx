import { type BaseBlock } from '@/components/Home/types'
import { Box, Typography } from '@mui/material'
import IconCarouselElement from './IconCarouselElement'

const TitleSlidingIcons = ({ title, text, icons, reverse = false }: BaseBlock & Carousel) => {
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography variant="h3">{title}</Typography>
        {text && (
          <Typography color="primary.light" marginTop={4}>
            {text}
          </Typography>
        )}
      </Box>
      <IconCarouselElement icons={icons} reverse={reverse} />
    </>
  )
}

export default TitleSlidingIcons
