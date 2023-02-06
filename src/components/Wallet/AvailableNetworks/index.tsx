import NetworkChip, { NetworkChipProps } from '@/components/Wallet/NetworkChip'
import { Box, Container, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'

export type AvailableNetworksProps = {
  networks: NetworkChipProps[][]
}

const AvailableNetworks = ({ networks }: AvailableNetworksProps) => (
  <Container className={layoutCss.container}>
    <Typography variant="h2" mb={5} align="center">
      AvailableNetworks
    </Typography>
    <Box display="flex" flexDirection="column" gap="24px">
      {networks.map((networksRow, index) => (
        <Box key={index} display="flex" gap="8px" overflow="hidden">
          {networksRow.map(({ name, textColor, icon, chainColor }) => (
            <NetworkChip key={name} icon={icon} name={name} textColor={textColor} chainColor={chainColor} />
          ))}
        </Box>
      ))}
    </Box>
    <Typography mt="40px" variant="body1" color="primary.light" align="center">
      And more networks, including testnets.
    </Typography>
  </Container>
)

export default AvailableNetworks
