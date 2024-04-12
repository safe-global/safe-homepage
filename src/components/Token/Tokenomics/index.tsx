import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import RichText from '@/components/common/RichText'
import { type BaseBlockEntry } from '@/components/Home/types'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'

const items = [
  {
    title: 'Ticker',
    text: 'SAFE',
  },
  {
    title: 'Contract Address',
    text: '0x5aFE3855358E112B5647B952709E6165e1c1eEEe',
  },
  {
    title: 'Fixed total supply',
    text: '1,000,000,000 (1 billion)',
  },
  {
    title: 'Initial circulating supply',
    text: '450,000,000',
  },
  {
    title: 'Token format',
    text: 'Native ERC20 ',
  },
  {
    title: 'Sector',
    text: 'Smart Accounts Infrastructure, Account Abstraction ',
  },
]

const CardEntry = ({ title, text }: { title: string; text: string }) => {
  return (
    <div>
      <Typography color="primary.light">{title}</Typography>
      <Typography className={css.entryText}>{text}</Typography>
    </div>
  )
}

const Tokenomics = (props: BaseBlockEntry) => {
  const { title } = props.fields

  return (
    <div className={css.bg}>
      <Container className={`${layoutCss.containerMedium} ${css.container}`}>
        <Grid container columnSpacing={2} rowGap="30px">
          <Grid item xs={12} md={6} className={css.tokenWrapper}>
            <img src="/images/img-token.png" alt="Safe token" />
            <RichText {...title} />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={css.card}>
              <div className={css.cardBody}>
                {items.map((item) => (
                  <CardEntry title={item.title} text={item.text} key={item.title} />
                ))}
              </div>
              <div className={css.cardFooter}>
                <LinkButton>Read tokenomics</LinkButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Tokenomics
