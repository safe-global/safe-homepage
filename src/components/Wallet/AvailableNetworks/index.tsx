import NetworkChip, { NetworkChipProps } from '@/components/Wallet/NetworkChip'
import { Box, Container, Typography } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import useChainsData from '@/hooks/useChainsData'

const defaultThemeColors = {
  backgroundColor: '#E8E7E6',
  textColor: '#000000',
}

export type AvailableNetworksProps = {
  networks: NetworkChipProps[][]
}

const AvailableNetworks = ({ networks }: AvailableNetworksProps) => {
  const chainsData = useChainsData()

  return (
    <Container className={layoutCss.container}>
      <Typography variant="h2" mb={5} align="center">
        Available on 10+ networks
      </Typography>
      <div className={css.networksWrapper}>
        <div className={css.gradientBase} />
        {networks.map((networksRow, index) => (
          <Box key={index} display="flex" gap="8px" overflow="hidden">
            {networksRow.map(({ name, icon }) => {
              const chainColors = chainsData.find((chain) => chain.chainName === name) || defaultThemeColors
              return <NetworkChip key={name} icon={icon} name={name} {...chainColors} />
            })}
          </Box>
        ))}
        <div className={clsx(css.gradientBase, css.gradientFlipped)} />
      </div>
      <Typography className={css.secondaryText} variant="body1">
        And more networks, including testnets.
      </Typography>
    </Container>
  )
}

export default AvailableNetworks
