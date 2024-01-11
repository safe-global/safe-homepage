import RichText from '@/components/Campaign/RichText'
import { type getStaticProps } from '@/pages/blog/[slug]'
import {
  Avatar,
  AvatarGroup,
  Breadcrumbs,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Link,
  Typography,
} from '@mui/material'
import { type InferGetStaticPropsType } from 'next'
import css from '../styles.module.css'
import { formatBlogDate } from '@/components/Blog/utils/formatBlogDate'
import { calculateReadingTime } from '@/components/Blog/utils/calculateReadingTime'
import React, { useEffect, useState } from 'react'
import { scrollToElement } from '@/lib/scrollSmooth'
import kebabCase from 'lodash/kebabCase'
import BlogLayout from '@/components/Blog/Layout'
import Card from '@/components/Blog/Card'
import Tags from '@/components/Blog/Tags'

const BlogPost = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('BlogPost props', props)

  const { title, excerpt, content, coverImage, authors, tags, category, date } = props.blogPost.fields
  const { relatedPosts } = props

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

  const headings: { id: string; text: string }[] = content.content
    .filter((item: any) => item.nodeType === 'heading-3')
    .map((item: any) => ({
      id: item.content[0].value,
      text: item.content[0].value,
    }))

  const handleContentMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()

    scrollToElement(`#${target}`, 100)
  }

  const [readProgress, setReadProgress] = useState(0)

  // move to a useScrollProgress hook
  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100

    setReadProgress(scrollPercent)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <BlogLayout>
      <div className={css.progressBar}>
        <LinearProgress variant="determinate" color="primary" value={readProgress} />
      </div>
      <Container className={css.post}>
        <Breadcrumbs separator=">" className={css.breadcrumbs}>
          {breadcrumbs}
        </Breadcrumbs>

        <img src={image.src} alt={image.alt} />

        <div className={css.meta}>
          <div className={css.metaStart}>
            <Typography variant="h4">#{category}</Typography>
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

        <Tags tags={tags} />

        <div className={css.authors}>
          <AvatarGroup className={css.avatarGroup} max={3}>
            {authors.map((author: any) => {
              const { name, picture } = author.fields

              return <Avatar key={name} src={picture.fields.file.url} alt={picture.fields.title} />
            })}
          </AvatarGroup>

          <span className={css.authorNames}>
            {authors.map((author: any, index: number) => {
              const { name } = author.fields

              return (
                <Typography key={name} variant="caption" color="text.primary">
                  {`${index !== 0 ? ' &' : ''} ${name}`}
                </Typography>
              )
            })}
          </span>
        </div>

        <Divider />
        <Grid container className={css.content}>
          <Grid item xs={12} md={8}>
            <RichText {...content} />
          </Grid>

          <Grid item xs={12} md={4}>
            <ul className={css.tableContent}>
              {headings.map((heading) => {
                const headingKey = kebabCase(heading.id)

                return (
                  <li key={headingKey}>
                    <a onClick={(e) => handleContentMenuClick(e, headingKey)} href={`#${headingKey}`}>
                      {heading.text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </Grid>
        </Grid>

        <Typography variant="h3" mt={15} mb={4}>
          Read more
        </Typography>
        <Grid container spacing={2}>
          {relatedPosts.slice(0, 3).map((post: any) => (
            <Grid key={post.fields.slug} item xs={12} md={4}>
              <Card {...post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </BlogLayout>
  )
}

export default BlogPost
