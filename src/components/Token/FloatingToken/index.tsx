import type { Asset } from 'contentful'
import { motion } from 'framer-motion'

const FloatingToken = ({ image }: { image: Asset<undefined, string> }) => (
  <motion.div
    animate={{ y: ['0%', '-5%', '0%'], rotateY: [0, -35, 0] }}
    transition={{
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    }}
  >
    {image.fields.file?.url ? <img src={image.fields.file.url} alt={image.fields.title ?? ''} /> : null}
  </motion.div>
)

export default FloatingToken
