import NetworkChip, { NetworkChipProps } from '@/components/Wallet/NetworkChip'
import { Box, Container, Typography } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'

export type AvailableNetworksProps = {
  networks: NetworkChipProps[][]
}

const AvailableNetworks = ({ networks }: AvailableNetworksProps) => (
  <Container className={layoutCss.container}>
    <Typography variant="h2" mb={5} align="center">
      Available on 10+ networks
    </Typography>
    <Box className={css.networksWrapper}>
      <div className={css.gradientBase} />
      {networks.map((networksRow, index) => (
        <Box key={index} display="flex" gap="8px" overflow="hidden">
          {networksRow.map(({ name, textColor, icon, chainColor }) => (
            <NetworkChip key={name} icon={icon} name={name} textColor={textColor} chainColor={chainColor} />
          ))}
        </Box>
      ))}
      <div className={clsx(css.gradientBase, css.gradientFlipped)} />
    </Box>
    <Typography className={css.secondaryText} variant="body1">
      And more networks, including testnets.
    </Typography>
  </Container>
)

export default AvailableNetworks
