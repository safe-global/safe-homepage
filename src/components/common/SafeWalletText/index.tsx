import SafeWalletType from '@/public/images/safewallet.svg'
import css from '@/components/common/styles.module.css'
import type { TypographyProps } from '@mui/material'

const SafeWalletText = ({ variant = 'body1' }: { variant: TypographyProps['variant'] }) => {
  return <SafeWalletType className={`${css[`${variant}SafeType`]}`} />
}

export default SafeWalletText
