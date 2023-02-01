import type { ReactElement } from 'react'

import Community from '@/components/Home/Community'
import Security from '@/components/Home/Security'
import TrustedBy from '@/components/Home/TrustedBy'
import SafeCoreWallet from '@/components/Home/SafeCoreWallet'
import Ecosystem from '@/components/Home/Ecosystem'
import WalletDownload from '@/components/common/WalletDownload'
import Governance from '@/components/Home/Governance'
import Contact from '@/components/Home/Contact'
import Intro from '@/components/Home/Intro'
import {
  IntroContent,
  ScaleContent,
  TrustedByContent,
  SafeCoreWalletContent,
  EcosystemContent,
  SecurityContent,
  GovernanceContent,
  ContactContent,
  WalletDownloadContent,
  NetworksContent,
} from '@/components/Home/content'
import Networks from '@/components/Home/Networks'

export const Home = (): ReactElement => {
  return (
    <>
      <Intro {...IntroContent} />
      <Community {...ScaleContent} />
      <Networks {...NetworksContent} />
      <TrustedBy {...TrustedByContent} />
      <SafeCoreWallet {...SafeCoreWalletContent} />
      <Ecosystem {...EcosystemContent} />
      <Security {...SecurityContent} />
      <Governance {...GovernanceContent} />
      <Contact {...ContactContent} />
      <WalletDownload {...WalletDownloadContent} />
    </>
  )
}
