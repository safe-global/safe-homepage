import Image from 'next/image'
import { Container, Divider, Grid, Typography } from '@mui/material'
import { type Entry } from 'contentful'
import { type TypePostSkeleton } from '@/contentful/types'
import { formatBlogDate } from '@/components/Blog/utils/formatBlogDate'
import { calculateReadingTime } from '@/components/Blog/utils/calculateReadingTime'
import { isAsset, isEntryTypeAuthor, isEntryTypePost, isEntryTypeTag } from '@/lib/typeGuards'
import BlogLayout from '@/components/Blog/Layout'
import ProgressBar from '@/components/Blog/ProgressBar'
import BreadcrumbsNav from '@/components/Blog/BreadcrumbsNav'
import Tags from '@/components/Blog/Tags'
import Authors from '@/components/Blog/Authors'
import RichText from '@/components/Campaign/RichText'
import ContentTable from '@/components/Blog/ContentTable'
import RelatedPosts from '@/components/Blog/RelatedPosts'
import css from '../styles.module.css'

export type BlogPostEntry = Entry<TypePostSkeleton, undefined, string>

const BlogPost = (props: { blogPost: BlogPostEntry }) => {
  const { title, excerpt, content, coverImage, authors, tags, category, date, relatedPosts } = props.blogPost.fields

  return (
    <BlogLayout>
      <ProgressBar />
      <Container className={css.post}>
        <BreadcrumbsNav category={category} title={title} />

        {isAsset(coverImage) && coverImage.fields.file?.url ? (
          <Image
            src={coverImage.fields.file.url}
            alt={(coverImage.fields.title = '')}
            width={coverImage.fields.file.details.image?.width}
            height={coverImage.fields.file.details.image?.height}
          />
        ) : undefined}

        <div className={css.meta}>
          <div className={css.metaStart}>
            <Typography>#{category}</Typography>
            <Typography variant="caption">{calculateReadingTime(content)}min</Typography>
          </div>
          <Typography variant="caption">{formatBlogDate(date)}</Typography>
        </div>

        <Typography variant="h2" className={css.title}>
          {title}
        </Typography>

        <Typography variant="h4" className={css.excerpt}>
          {excerpt}
        </Typography>

        <Tags tags={tags.filter(isEntryTypeTag)} />

        <Authors authors={authors.filter(isEntryTypeAuthor)} />

        <Divider className={css.divider} />

        <Grid container className={css.content} columnSpacing={3}>
          <Grid item xs={12} md={4}>
            <ContentTable content={content} />
          </Grid>

          <Grid item xs={12} md={8}>
            <RichText {...content} />
          </Grid>
        </Grid>

        <RelatedPosts relatedPosts={relatedPosts?.filter(isEntryTypePost)} />
      </Container>
    </BlogLayout>
  )
}

export default BlogPost
