import { Avatar, AvatarGroup, Typography } from '@mui/material'
import css from '../styles.module.css'
import type { Entry } from 'contentful'
import type { TypeAuthorSkeleton } from '@/contentful/types'
import { isAsset } from '@/lib/typeGuards'

const Authors = ({ authors }: { authors: Entry<TypeAuthorSkeleton, undefined, string>[] }) => {
  return (
    <div className={css.authors}>
      <AvatarGroup className={css.avatarGroup} max={3}>
        {authors.map((author) => {
          const { name, picture } = author.fields

          return isAsset(picture) && picture.fields.file?.url ? (
            <Avatar key={name} src={picture.fields.file.url} alt={picture.fields.title} />
          ) : undefined
        })}
      </AvatarGroup>

      <span className={css.authorNames}>
        {authors.map((author, index) => {
          const { name } = author.fields

          return (
            <Typography key={name} variant="caption" color="text.primary">
              {`${index !== 0 ? ' &' : ''} ${name}`}
            </Typography>
          )
        })}
      </span>
    </div>
  )
}

export default Authors
