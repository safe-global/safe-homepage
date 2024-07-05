import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const PartnersElement = ({ image }: { image: BaseBlock['image'] }) => (
  <>
    {image ? (
      <div className={css.imageWrapper}>
        <img src={image.src} alt={image.alt} className={css.image} />
      </div>
    ) : null}
  </>
)

export default PartnersElement
