import { PressroomAnchors } from '@/components/Pressroom/ContentsNavigation'
import { formatValue } from '@/lib/formatValue'
import { Box, Typography } from '@mui/material'

const TOTAL_ASSETS_STORED = 'https://dune.com/queries/2893829/4821383'

const AboutUs = ({ totalAssets }: { totalAssets: number }) => {
  const totalAssetsStr = `~$${totalAssets ? formatValue(totalAssets) : '1B'}`
  const totalAssetsLink = (
    <a href={TOTAL_ASSETS_STORED} target="_blank" rel="noreferrer">
      <b>{totalAssetsStr}</b>
    </a>
  )

  return (
    <Box mt="140px" id={PressroomAnchors.ABOUT_US} width={{ xs: '100%', md: 9 / 12 }}>
      <Typography variant="caption">About us</Typography>
      <Typography variant="h2">
        <i>Safe</i> is an onchain asset custody protocol, securing <>{totalAssetsLink}</> in assets today.
      </Typography>
    </Box>
  )
}

export default AboutUs
