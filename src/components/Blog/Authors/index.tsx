import { Avatar, AvatarGroup } from '@mui/material'
import type { Entry } from 'contentful'
import type { TypeAuthorSkeleton } from '@/contentful/types'
import { isAsset } from '@/lib/typeGuards'

export type AuthorsProps = Entry<TypeAuthorSkeleton, undefined, string>[]

const Authors = ({ authors }: { authors: AuthorsProps }) => (
  <AvatarGroup max={3}>
    {authors.map((author) => {
      const { name, picture } = author.fields

      return isAsset(picture) && picture.fields.file?.url ? (
        <Avatar key={name} src={picture.fields.file.url} alt={picture.fields.title} />
      ) : undefined
    })}
  </AvatarGroup>
)

export default Authors
