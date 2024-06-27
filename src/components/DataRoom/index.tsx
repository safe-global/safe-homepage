import CEXesComparison from '@/components/DataRoom/CEXesComparison'
import CryptoPunks from '@/components/DataRoom/CryptoPunks'
import DuneBoards from '@/components/DataRoom/DuneBoards'
import ExternalReports from '@/components/DataRoom/ExternalReports'
import Hero from '@/components/DataRoom/Hero'
import IndustryComparison from '@/components/DataRoom/IndustryComparison'
import SeeMore from '@/components/DataRoom/SeeMore'
import TransactionsOnChain from '@/components/DataRoom/TransactionsOnChain'
import TVLComparison from '@/components/DataRoom/TVLComparison'
import USDCStorage from '@/components/DataRoom/USDCStorage'
import VolumeTransferred from '@/components/DataRoom/VolumeTransferred'
import WorldGDP from '@/components/DataRoom/WorldGDP'

export const DataRoom = () => (
  <>
    <Hero />
    <WorldGDP />
    <USDCStorage />
    <CryptoPunks />
    <VolumeTransferred />
    <TransactionsOnChain />
    <IndustryComparison />
    <CEXesComparison />
    <TVLComparison />
    <SeeMore />
    <DuneBoards />
    <ExternalReports />
  </>
)
