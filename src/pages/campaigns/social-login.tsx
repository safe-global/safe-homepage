import { Container } from '@mui/material'
import type { InferGetStaticPropsType, NextPage } from 'next'
import layoutCss from '@/components/common/styles.module.css'
import client from '@/lib/contentful'
import Hero from '@/components/Campaign/Hero'
import TextBlockListCentered from '@/components/Campaign/TextBlockListCentered'
import LogoTextBlockCentered from '@/components/Campaign/LogoTextBlockCentered'
import StepListImage from '@/components/Campaign/StepListImage'
import type {
  TypeHeroSkeleton,
  TypeTextBlockListCenteredSkeleton,
  TypeLogoTextBlockSkeleton,
  TypeStepListImageSkeleton,
} from '@/contentful/types'

const Campaigns: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <Container className={layoutCss.containerTiny}>
      <Hero {...props.hero} />
      <TextBlockListCentered {...props.textBlockList} />
      <LogoTextBlockCentered {...props.logoTextBlock} />
      <StepListImage {...props.stepListImage} />
    </Container>
  )
}

export const getStaticProps = async () => {
  const [hero, textBlockList, logoTextBlock, stepListImage] = await Promise.all([
    client.getEntries<TypeHeroSkeleton>({ content_type: 'hero' }),
    client.getEntries<TypeTextBlockListCenteredSkeleton>({ content_type: 'textBlockListCentered' }),
    client.getEntries<TypeLogoTextBlockSkeleton>({ content_type: 'logoTextBlock' }),
    client.getEntries<TypeStepListImageSkeleton>({ content_type: 'stepListImage' }),
  ])

  return {
    props: {
      hero: hero.items[0],
      textBlockList: textBlockList.items[0],
      logoTextBlock: logoTextBlock.items[0],
      stepListImage: stepListImage.items[0],
    },
  }
}

export default Campaigns
