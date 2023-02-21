import SafeCoreType from '@/public/images/safecore.svg'
import type { TypographyProps } from '@mui/material'

const SafeCoreText = ({ variant = 'body1' }: { variant: TypographyProps['variant'] }) => {
  return <SafeCoreType className={`${variant}SafeType`} />
}

export default SafeCoreText
