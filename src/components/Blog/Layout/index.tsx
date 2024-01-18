import BannerGradientForm from '@/components/Blog/BannerGradientForm'
import { type ReactNode } from 'react'

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ marginTop: '120px' }}>
      {children}
      <BannerGradientForm title="Want to hear from us more?" />
    </div>
  )
}

export default BlogLayout
