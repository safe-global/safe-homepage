import RichText from '@/components/Campaign/RichText'
import { type getStaticProps } from '@/pages/blog/[slug]'
import { Avatar, AvatarGroup, Breadcrumbs, Chip, Container, Link, Typography } from '@mui/material'
import { type InferGetStaticPropsType } from 'next'
import css from './styles.module.css'
import { formatBlogDate } from '@/components/Blog/utils/formatBlogDate'
import { calculateReadingTime } from '@/components/Blog/utils/calculateReadingTime'

const BlogPost = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('BlogPost props', props)

  const { title, excerpt, content, coverImage, authors, tags, category, date } = props.fields

  const image = {
    src: coverImage.fields.file.url,
    alt: coverImage.fields.title,
  }

  const breadcrumbs = [
    <Typography key="1" variant="caption">
      <Link href="/blog" underline="hover">
        Blog
      </Link>
    </Typography>,
    <Typography key="2" variant="caption" color="text.primary">
      #{category}
    </Typography>,
    <Typography key="3" variant="caption" color="text.primary">
      {title}
    </Typography>,
  ]

  return (
    <Container className={css.post}>
      <Breadcrumbs separator=">" className={css.breadcrumbs}>
        {breadcrumbs}
      </Breadcrumbs>
      <img src={image.src} alt={image.alt} />
      <div className={css.meta}>
        <div className={css.metaStart}>
          <Typography variant="h4" display="inline-block">
            #{category}
          </Typography>
          <Typography variant="caption">{calculateReadingTime(content)}min</Typography>
        </div>
        <Typography variant="caption">{formatBlogDate(date)}</Typography>
      </div>
      <Typography variant="h2" mb="24px">
        {title}
      </Typography>
      <Typography variant="h4" mb="24px">
        {excerpt}
      </Typography>
      <div className={css.tags}>
        {tags.map((tag: any) => {
          const { name } = tag.fields

          return <Chip key={name} label={name} className={css.chip} />
        })}
      </div>
      <AvatarGroup className={css.avatarGroup} max={3}>
        {authors.map((author: any) => {
          const { name, picture } = author.fields

          return <Avatar key={name} src={picture.fields.file.url} alt={picture.fields.title} />
        })}
      </AvatarGroup>
      <section className={css.content}>
        <RichText {...content} />
      </section>

      <h1>Similar Posts</h1>
      {/* TODO: Card (max. 3) */}
    </Container>
  )
}

export default BlogPost
