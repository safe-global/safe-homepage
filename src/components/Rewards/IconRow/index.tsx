import { type BaseBlockEntry } from '@/config/types'
import { isAsset } from '@/lib/typeGuards'
import RichText from '@/components/common/RichText'
import css from './styles.module.css'

const IconRow = ({ items }: { items: BaseBlockEntry[] }) => (
  <>
    {items.map((item, index) => {
      const { title, image } = item.fields

      return (
        <div className={css.iconWrapper} key={index}>
          <div className={css.icon}>
            {isAsset(image) && image.fields.file?.url ? (
              <img src={image.fields.file.url} alt={image.fields.title ?? ''} width={64} height={64} />
            ) : null}
          </div>

          <RichText {...title} />
        </div>
      )
    })}
  </>
)

export default IconRow
