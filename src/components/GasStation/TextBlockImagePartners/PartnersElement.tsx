import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const PartnersElement = ({ image }: { image: BaseBlock['image'] }) => (
  <div className={css.imageWrapper}>{image ? <img src={image.src} alt={image.alt} className={css.image} /> : null}</div>
)

export default PartnersElement
