import FrameImage from '@/public/images/Governance/Parallaxes/GovernanceProcess/background.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import { Typography } from '@mui/material'
import { type Entry } from 'contentful'
import { type TypeBaseBlockSkeleton } from '@/contentful/types'
import css from './styles.module.css'

const blockClassNames = ['stepZero', 'stepOne', 'stepTwo', 'stepThree', 'stepFour', 'stepFive', 'stepSix']
const depths = [0, 1, 2] as const

const trailingShadow = (
  <>
    <div className={`${css.shadow} ${css.first}`} />
    <div className={`${css.shadow} ${css.second}`} />
  </>
)

const ParallaxGovernanceProcessElement = ({ items }: { items: Entry<TypeBaseBlockSkeleton, undefined, string>[] }) => (
  <div className={css.parallaxWrapper}>
    <FrameImage className={css.baseImage} />

    {items.map((_, index) => {
      const className = blockClassNames[index] || ''
      const depth = depths[index % 2]

      return (
        <ParallaxWrapper translateX={0} translateY={0} depth={depth} direction={-1} key={index}>
          <div className={`${css.movingElement} ${css[className]}`}>
            <Typography>{items[index].fields.caption}</Typography>
            {trailingShadow}
          </div>
        </ParallaxWrapper>
      )
    })}
  </div>
)

export default ParallaxGovernanceProcessElement
