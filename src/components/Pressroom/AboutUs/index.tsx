import { PressroomIds } from '@/components/Pressroom/ContentsNavigation'
import { formatValue } from '@/lib/formatValue'
import { Box, Typography } from '@mui/material'

const TOTAL_ASSETS_STORED = 'https://dune.com/queries/2893829/4821383'
// TODO: Remove this temporary fallback value when the Dune query is fixed
const TOTAL_ASSETS_FALLBACK = '120B'

const AboutUs = ({ totalAssets }: { totalAssets: number }) => {
  const totalAssetsStr = `~$${totalAssets ? formatValue(totalAssets) : TOTAL_ASSETS_FALLBACK}`
  const totalAssetsLink = (
    <a href={TOTAL_ASSETS_STORED} target="_blank" rel="noreferrer">
      <b>{totalAssetsStr}</b>
    </a>
  )

  return (
    <Box mt="140px" id={PressroomIds.ABOUT_US} width={{ xs: '100%', md: 9 / 12 }}>
      <Typography variant="caption">About us</Typography>
      <Typography variant="h2">
        <i>Safe</i> is an onchain asset custody protocol, securing <>{totalAssetsLink}</> in assets today.
      </Typography>
    </Box>
  )
}

export default AboutUs
