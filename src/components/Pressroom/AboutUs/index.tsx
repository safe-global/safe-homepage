import { PressroomIds } from '@/components/Pressroom/ContentsNavigation'
import { formatValue } from '@/lib/formatValue'
import { Box, Typography } from '@mui/material'

// TODO: Remove the commented code when the Dune query is fixed
// const TOTAL_ASSETS_STORED = 'https://dune.com/queries/2893829/4821383'
const TOTAL_ASSETS_FALLBACK = '$100B+'

const AboutUs = ({ totalAssets }: { totalAssets: number | null }) => {
  const totalAssetsStr = totalAssets ? `~$${formatValue(totalAssets)}` : TOTAL_ASSETS_FALLBACK
  // const totalAssetsLink = (
  //   <a href={TOTAL_ASSETS_STORED} target="_blank" rel="noreferrer">
  //     <b>{totalAssetsStr}</b>
  //   </a>
  // )

  return (
    <Box component="div" mt="140px" id={PressroomIds.ABOUT_US} width={{ xs: '100%', md: 9 / 12 }}>
      <Typography variant="caption">About us</Typography>
      <Typography variant="h2">
        <i>Safe</i> is an onchain asset custody protocol, securing <>{totalAssetsStr}</> in assets today.
      </Typography>
    </Box>
  )
}

export default AboutUs
