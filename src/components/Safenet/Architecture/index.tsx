import { Container, Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import GradientChip from '@/components/Safenet/GradientChip'
import LinkButton from '@/components/common/LinkButton'

const GradientStep = ({ stepNumber }: { stepNumber: number }) => {
  return <div className={css.stepCircle}>{stepNumber}</div>
}

const Architecture = () => {
  return (
    <div className={css.anchor}>
      <div className={css.arc} />

      <Container className={css.container}>
        <div className={css.contentWrapper}>
          <GradientChip caption="Safenet Architecture" />

          <Typography className={css.title}>
            <>
              <span className={css.titleGradient}>Reimagining</span> onchain transactions
            </>
          </Typography>
        </div>

        <Grid container justifyContent="space-between" className={css.gridContainer}>
          <img src="/images/Safenet/Architecture/shapes-md.png" alt="Block shapes" className={css.shapes} />

          <Grid item md={4} className={css.blockItem}>
            <img src="/images/Safenet/Architecture/processor.png" alt="Safe processor" className={css.blockImage} />
            <Typography className={css.blockTitle}>Processors</Typography>
            <ul>
              <li>Connect to user accounts and orchestrate optimal execution of transaction intents.</li>
              <li>Provide execution guarantees like security checks and custom policies.</li>
              <li>
                Execute transactions instantly by locking user assets (resource-lock) and providing liquidity
                optimistically.
              </li>
            </ul>
          </Grid>

          <Grid item md={4} className={css.midItem}>
            <Typography className={css.midItemTitle}>USER</Typography>

            <Grid container className={css.midItemContainer}>
              <Grid item md={12} className={css.step}>
                <div className={css.stepContent}>
                  <GradientStep stepNumber={1} />
                  <Typography className={css.stepText}>User signs transaction intent</Typography>
                </div>
              </Grid>

              <Grid item md={12} className={css.step}>
                <div className={css.stepContent}>
                  <GradientStep stepNumber={2} />
                  <Typography className={css.stepText}>Checks policies and issues resource-lock</Typography>
                </div>
              </Grid>

              <Grid item md={12} className={css.step}>
                <div className={css.stepContent}>
                  <GradientStep stepNumber={3} />
                  <Typography className={css.stepText}>Provides liquidity</Typography>
                </div>
              </Grid>

              <Grid item md={12} className={css.step}>
                <div className={css.stepContent}>
                  <GradientStep stepNumber={4} />
                  <Typography className={css.stepText}>Executes transaction intent</Typography>
                </div>
              </Grid>

              <Grid item md={12} className={css.step}>
                <div className={css.stepContent}>
                  <GradientStep stepNumber={5} />
                  <Typography className={css.stepText}>
                    Debits user by providing a validity proof of executed intent
                  </Typography>
                </div>
              </Grid>

              <Grid item md={12} className={css.step}>
                <div className={css.stepContent}>
                  <GradientStep stepNumber={6} />
                  <Typography className={css.stepText}>Returns liquidity</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={4} className={css.blockItem}>
            <img src="/images/Safenet/Architecture/mesh.png" alt="Safe net" className={css.blockImage} />
            <Typography className={css.blockTitle}>Liquid Network</Typography>
            <ul>
              <li>Provides Safenet Processors with liquidity to execute transaction intents</li>
              <li>Aggregates existing DeFi primitives</li>
            </ul>
          </Grid>
        </Grid>

        <div className={css.buttonWrapper}>
          <LinkButton>Read docs</LinkButton>
        </div>
      </Container>
    </div>
  )
}

export default Architecture
