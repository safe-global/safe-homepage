import SafeWalletType from '@/public/images/safewallet.svg'
import type { TypographyProps } from '@mui/material'

const SafeWalletText = ({ variant = 'body1' }: { variant: TypographyProps['variant'] }) => {
  return <SafeWalletType className={`${variant}SafeType`} />
}

export default SafeWalletText
