import ShieldIcon from '@/public/images/Wallet/shield.svg'
import CheckIcon from '@/public/images/Wallet/check.svg'
import SettingsIcon from '@/public/images/Wallet/settings.svg'
import type { UspBlockProps } from '@/components/Wallet/UspBlock'

export const YourKeysContent: UspBlockProps = {
  title: 'Your keys. Your coins.',
  items: [
    {
      icon: ShieldIcon,
      title: 'Battle Tested Security',
      text: 'Top notch security and custom access control for you and for your users.',
    },
    {
      icon: CheckIcon,
      title: 'Co-ownership',
      text: 'Multi-sig based trustless group ownership ownership and asset co-ordination.',
    },
    {
      icon: SettingsIcon,
      title: 'Self-custody',
      text: 'We never own any of the assets stored in user accounts. We never will.',
    },
  ],
}
