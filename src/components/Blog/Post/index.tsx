import Image from 'next/image'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { type Entry } from 'contentful'
import type { TypeAuthorSkeleton, TypePostSkeleton } from '@/contentful/types'
import { formatBlogDate } from '@/components/Blog/utils/formatBlogDate'
import { calculateReadingTime } from '@/components/Blog/utils/calculateReadingTime'
import { isAsset, isEntryTypeAuthor, isEntryTypePost } from '@/lib/typeGuards'
import BlogLayout from '@/components/Blog/Layout'
import ProgressBar from '@/components/Blog/ProgressBar'
import BreadcrumbsNav from '@/components/Blog/BreadcrumbsNav'
import Tags from '@/components/Blog/Tags'
import Authors from '@/components/Blog/Authors'
import RichText from '@/components/common/RichText'
import ContentsTable from '@/components/Blog/ContentsTable'
import Socials from '@/components/Blog/Socials'
import RelatedPosts from '@/components/Blog/RelatedPosts'
import CategoryIcon from '@/public/images/Blog/category-icon.svg'
import { type Document as ContentfulDocument } from '@contentful/rich-text-types'
import css from '../styles.module.css'

export type BlogPostEntry = Entry<TypePostSkeleton, undefined, string>

const BlogPost = ({ blogPost }: { blogPost: BlogPostEntry }) => {
  const { title, excerpt, content, coverImage, authors, tags, category, date, relatedPosts, metaTags } = blogPost.fields

  const authorsList = authors.filter(isEntryTypeAuthor)
  const relatedPostsList = relatedPosts?.filter(isEntryTypePost)

  return (
    <BlogLayout metaTags={metaTags}>
      <ProgressBar />
      <Container className={css.post}>
        <BreadcrumbsNav category={category} title={title} />

        <div className={css.meta}>
          <div className={css.metaStart}>
            <Typography className={css.category}>
              <CategoryIcon />
              {category}
            </Typography>
            <Typography variant="caption">{calculateReadingTime(content)}min</Typography>
          </div>
          <Typography variant="caption">{formatBlogDate(date)}</Typography>
        </div>

        <Typography variant="h1" className={css.title}>
          {title}
        </Typography>

        <Typography variant="h4" className={css.excerpt}>
          {excerpt}
        </Typography>

        <Box mt={{ xs: 2, md: 3 }}>
          <Tags tags={tags} />
        </Box>

        <Authors authors={authorsList} />

        <Divider className={css.divider} />

        <Grid container className={css.content} columnSpacing={3}>
          <Sidebar content={content} title={title} authors={authorsList} />

          <Grid item xs={12} md={8}>
            {isAsset(coverImage) && coverImage.fields.file?.url ? (
              <Image
                src={coverImage.fields.file.url}
                alt={(coverImage.fields.title = '')}
                width={coverImage.fields.file.details.image?.width}
                height={coverImage.fields.file.details.image?.height}
              />
            ) : undefined}

            <Sidebar content={content} title={title} authors={authorsList} showInXs />

            <RichText {...content} />
          </Grid>
        </Grid>

        <RelatedPosts relatedPosts={relatedPostsList} />
      </Container>
    </BlogLayout>
  )
}

export default BlogPost

const Sidebar = ({
  content,
  title,
  authors,
  showInXs,
}: {
  content: ContentfulDocument
  title: string
  authors: Entry<TypeAuthorSkeleton, undefined, string>[]
  showInXs?: boolean
}) => (
  <Grid item xs={12} md={4} className={showInXs ? css.showInXs : css.showInMd}>
    <aside className={css.sidebar}>
      <ContentsTable content={content} />
      <Socials title={title} authors={authors} />
    </aside>
  </Grid>
)
