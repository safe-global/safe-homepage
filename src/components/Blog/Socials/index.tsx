import XIcon from '@/public/images/x-icon.svg'
import LinkedInIcon from '@/public/images/linkedin-icon.svg'
import { type Entry } from 'contentful'
import { type TypeAuthorSkeleton } from '@/contentful/types'
import { IconButton, SvgIcon } from '@mui/material'
import css from '../styles.module.css'
import { useEffect, useState } from 'react'

const Socials = ({ title, authors }: { title: string; authors: Entry<TypeAuthorSkeleton, undefined, string>[] }) => {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    // Check if running in the browser environment
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])

  const sharingText = `${title} by @${authors
    .map((author) => author.fields.name)
    .join(', @')
    .toString()}`

  const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    sharingText,
  )}`
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`

  return (
    <div className={css.socials}>
      {/* X */}
      <IconButton aria-label="Share on X" href={xUrl} target="_blank" rel="noreferrer" size="small">
        <SvgIcon component={XIcon} fontSize="inherit" color="inherit" inheritViewBox />
      </IconButton>

      {/* LinkedIn */}
      <IconButton aria-label="Share on Linkedin" href={linkedInUrl} target="_blank" rel="noreferrer" size="small">
        <SvgIcon component={LinkedInIcon} fontSize="inherit" color="inherit" inheritViewBox />
      </IconButton>
    </div>
  )
}

export default Socials
