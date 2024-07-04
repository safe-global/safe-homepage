import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const YourStationElement = ({ image }: { image: BaseBlock['image'] }) => {
  return <>{image ? <img src={image.src} alt={image.alt} className={css.image} /> : null}</>
}

export default YourStationElement
