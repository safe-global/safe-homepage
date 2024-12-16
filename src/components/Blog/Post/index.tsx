import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import { type Entry } from 'contentful'
import type { TypeAuthorSkeleton } from '@/contentful/types'
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
import { type Document as ContentfulDocument } from '@contentful/rich-text-types'
import css from '../styles.module.css'
import { PRESS_RELEASE_TAG, containsTag } from '@/lib/containsTag'
import { COMMS_EMAIL } from '@/config/constants'
import { useBlogPost } from '@/hooks/useBlogPost'
import type { BlogPostEntry } from '@/config/types'
import Meta from '@/components/Blog/Meta'
import { formatAuthorsList } from '@/components/Blog/utils/formatAuthorsList'

export type BlogPostProps = {
  blogPost: BlogPostEntry
}

const BlogPost = ({ blogPost }: BlogPostProps) => {
  const { data: post } = useBlogPost(blogPost.sys.id, blogPost)

  const { title, excerpt, content, coverImage, authors, tags, category, date, relatedPosts, metaTags } = post.fields

  const authorsList = authors.filter(isEntryTypeAuthor)
  const relatedPostsList = relatedPosts?.filter(isEntryTypePost)

  const isPressRelease = containsTag(tags, PRESS_RELEASE_TAG)

  return (
    <BlogLayout metaTags={metaTags}>
      <ProgressBar />
      <Container>
        <BreadcrumbsNav category={category} title={title} />

        <Typography variant="h1" className={css.title}>
          {title}
        </Typography>

        <div className={css.meta}>
          <div className={css.info}>
            <Authors authors={authorsList} />

            <div>
              <Typography variant="body2">{formatAuthorsList(authorsList)}</Typography>

              <Meta post={post} />
            </div>
          </div>

          <Tags tags={tags} />
        </div>

        {isAsset(coverImage) && coverImage.fields.file?.url ? (
          <img src={coverImage.fields.file.url} alt={coverImage.fields.title ?? ''} className={css.coverImage} />
        ) : undefined}

        <div className={css.content}>
          <Grid container columnSpacing={3} sx={{ flexDirection: ['row', , 'row-reverse'] }}>
            <Sidebar content={content} title={title} authors={authorsList} isPressRelease={isPressRelease} />

            <Grid item xs={12} md={8}>
              <Sidebar content={content} title={title} authors={authorsList} isPressRelease={isPressRelease} showInXs />

              <div className={css.postBody}>
                <Typography variant="h5" className={css.excerpt}>
                  {excerpt}
                </Typography>

                <RichText {...content} />

                <Divider sx={{ mt: 7, mb: 7 }} />

                <SharingLinks title={title} authors={authorsList} />
              </div>
            </Grid>
          </Grid>
        </div>

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
  isPressRelease,
}: {
  content: ContentfulDocument
  title: string
  authors: Entry<TypeAuthorSkeleton, undefined, string>[]
  showInXs?: boolean
  isPressRelease?: boolean
}) => (
  <Grid item xs={12} md={4} className={showInXs ? css.showInXs : css.showInMd}>
    <aside className={css.sidebar}>
      <ContentsTable content={content} />

      <div className={css.sidebarLinks}>
        <SharingLinks title={title} authors={authors} />
      </div>

      {isPressRelease ? (
        <div className={css.questionBox}>
          <Typography>Do you have any questions?</Typography>

          <Button href={`mailto:${COMMS_EMAIL}`} target="_blank" variant="contained" className={css.button}>
            <Typography>Press inquiry</Typography>
          </Button>
        </div>
      ) : null}
    </aside>
  </Grid>
)

const SharingLinks = ({
  title,
  authors,
}: {
  title: string
  authors: Entry<TypeAuthorSkeleton, undefined, string>[]
}) => (
  <div className={css.sharingLinks}>
    <Typography variant="caption" color="text.primary">
      Share this
    </Typography>

    <Socials title={title} authors={authors} />
  </div>
)
