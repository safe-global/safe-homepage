import type { NetworkChipProps } from '@/components/common/NetworkChip'
import NetworkChip from '@/components/common/NetworkChip'
import { Typography } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import { type ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import { useContext } from 'react'
import ChainsContext from '@/contexts/ChainsContext'

export type ChainProps = {
  chainName: ChainInfo['chainName']
  textColor: ChainInfo['theme']['textColor']
  backgroundColor: ChainInfo['theme']['backgroundColor']
}

const defaultThemeColors = {
  backgroundColor: '#E8E7E6',
  textColor: '#000000',
}

type NetworksProps = {
  title: string
  text: string
  networks: NetworkChipProps[]
  chainsData: ChainProps[]
}

const NetworksRow = ({ networksRow, chainsData }: { networksRow: NetworkChipProps[]; chainsData: ChainProps[] }) => {
  return (
    <>
      {networksRow.map(({ name, icon, textColor, backgroundColor, isNew }, i) => {
        const chainData = chainsData?.find((chain) => chain.chainName === name)
        const chainColors = {
          textColor: textColor || chainData?.textColor || defaultThemeColors.textColor,
          backgroundColor: backgroundColor || chainData?.backgroundColor || defaultThemeColors.backgroundColor,
        }
        return <NetworkChip key={`${name}_${i}`} icon={icon} name={name} isNew={isNew} {...chainColors} />
      })}
    </>
  )
}

const Networks = ({ title, text, networks }: NetworksProps) => {
  const chainsData = useContext(ChainsContext)
  const shuffledNetworks = networks.slice(2, 8).reverse().concat(networks.slice(8).reverse(), networks.slice(0, 2))

  return (
    <div className={layoutCss.containerMedium}>
      <Typography variant="h2" mb={5} align="center">
        {title}
      </Typography>
      <div className={css.networksWrapper}>
        <div className={css.gradientBase} />
        <div className={css.animation}>
          <div className={css.slider}>
            <NetworksRow networksRow={networks} chainsData={chainsData} />
            <NetworksRow networksRow={networks} chainsData={chainsData} />
          </div>
        </div>
        <div className={clsx(css.animation, css.animationReverse)}>
          <div className={css.slider}>
            <NetworksRow networksRow={shuffledNetworks} chainsData={chainsData} />
            <NetworksRow networksRow={shuffledNetworks} chainsData={chainsData} />
          </div>
        </div>
        <div className={clsx(css.gradientBase, css.gradientFlipped)} />
      </div>
      <Typography className={css.secondaryText}>{text}</Typography>
    </div>
  )
}

export default Networks
