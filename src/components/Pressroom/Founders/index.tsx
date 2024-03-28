import { Grid, Typography } from '@mui/material'
import commonCss from '@/components/common/styles.module.css'

const Founders = () => {
  return (
    <Grid container spacing="28px" mt="140px">
      <Grid item xs={12} md={6}>
        <img src="/images/founders.png" alt="Safe founders" />
      </Grid>
      <Grid item xs={12} md={6} className={commonCss.centeredContent}>
        <Typography variant="h2">Founding team</Typography>
        <Grid container spacing={4} mt={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Christoph Simmchen</Typography>
            <Typography color="primary.light">
              Co-Founder <br />
              Governance &amp; Operations
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Richard Meissner</Typography>
            <Typography color="primary.light">
              Co-Founder <br />
              Safe{'{Core}'}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Lukas Schor</Typography>
            <Typography color="primary.light">
              Co-Founder <br />
              Ecosystem &amp; Marketing
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Tobias Schubotz</Typography>
            <Typography color="primary.light">
              Co-Founder <br />
              Safe{'{Wallet}'}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Founders
