import BannerGradientForm from '@/components/Blog/BannerGradientForm'
import { Box } from '@mui/material'
import { type ReactNode } from 'react'

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box mt={{ xs: '24px', md: '100px' }}>
      {children}
      <BannerGradientForm title="Get insider updates" subtitle="Sign up to hear the latest from Safe in your inbox" />
    </Box>
  )
}

export default BlogLayout
