import SafeCoreType from '@/public/images/safecore.svg'
import css from '@/components/common/styles.module.css'
import type { TypographyProps } from '@mui/material'

const SafeCoreText = ({ variant = 'body1' }: { variant: TypographyProps['variant'] }) => {
  return <SafeCoreType className={`${css[`${variant}SafeType`]}`} />
}

export default SafeCoreText
