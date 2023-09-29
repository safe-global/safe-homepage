import { Avatar, Container, Grid, IconButton, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@/public/images/twitter-icon.svg'
import DiscordIcon from '@/public/images/discord-icon.svg'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import { shortenAddress } from '@/lib/shortenAddress'
import HeaderCTA from '@/components/common/HeaderCTA'
import layoutCss from '@/components/common/styles.module.css'

type Delegate =
  | {
      name: string
      address: string
      ens: string | null
      image: string
      reason: string
      contribution: string
    } & {
      twitter?: string
      discord?: string
    }

// TODO: this data is to be provided by Andre
const delegatesData: Delegate[] = [
  {
    name: 'Malik El Bay 1',
    address: '0x34ceE420dE818Fc67dE4C4adA06CF598B2d2e3A3',
    ens: 'malikelbay.eth',
    image: '/images/punk.png',
    reason: 'Safe is an important public good. As delegate my focus lies with...',
    contribution: 'Very important contribution',
    twitter: 'https://twitter.com/malikelbay',
    discord: 'https://discord.com',
  },
  {
    name: 'Malik El Bay 2',
    address: '0x34ceE420dE818Fc67dE4C4adA06CF598B2d2e3A3',
    ens: null,
    image: '/images/punk.png',
    reason:
      "Deposit ETH into StakeWise, to participate in Ethereum's Proof-of-Stake consensus mechanism and receive ETH rewards in return",
    contribution: 'Very important contribution',
    twitter: 'https://twitter.com/malikelbay',
  },
  {
    name: 'Malik El Bay 3',
    address: '0x34ceE420dE818Fc67dE4C4adA06CF598B2d2e3A3',
    ens: 'malikelbay.eth',
    image: '/images/punk.png',
    reason: 'Safe is an important public good. As delegate my focus lies with...',
    contribution: 'Very important contribution',
    twitter: 'https://twitter.com/malikelbay',
  },
  {
    name: 'Malik El Bay 4',
    address: '0x34ceE420dE818Fc67dE4C4adA06CF598B2d2e3A3',
    ens: 'malikelbay.eth',
    image: '/images/punk.png',
    reason: 'Safe is an important public good. As delegate my focus lies with...',
    contribution: 'Very important contribution',
    twitter: 'https://twitter.com/malikelbay',
  },
  {
    name: 'Malik El Bay 5',
    address: '0x34ceE420dE818Fc67dE4C4adA06CF598B2d2e3A3',
    ens: 'malikelbay.eth',
    image: '/images/punk.png',
    reason: 'Safe is an important public good. As delegate my focus lies with...',
    contribution: 'Very important contribution',
    twitter: 'https://twitter.com/malikelbay',
  },
  {
    name: 'Malik El Bay 6',
    address: '0x34ceE420dE818Fc67dE4C4adA06CF598B2d2e3A3',
    ens: 'malikelbay.eth',
    image: '/images/punk.png',
    reason: 'Safe is an important public good. As delegate my focus lies with...',
    contribution: 'Very important contribution',
    twitter: 'https://twitter.com/malikelbay',
  },
  {
    name: 'Malik El Bay 7',
    address: '0x34ceE420dE818Fc67dE4C4adA06CF598B2d2e3A3',
    ens: 'malikelbay.eth',
    image: '/images/punk.png',
    reason: 'Safe is an important public good. As delegate my focus lies with...',
    contribution: 'Very important contribution',
    twitter: 'https://twitter.com/malikelbay',
  },
  {
    name: 'Malik El Bay 8',
    address: '0x34ceE420dE818Fc67dE4C4adA06CF598B2d2e3A3',
    ens: 'malikelbay.eth',
    image: '/images/punk.png',
    reason: 'Safe is an important public good. As delegate my focus lies with...',
    contribution: 'Very important contribution',
    twitter: 'https://twitter.com/malikelbay',
  },
  {
    name: 'Malik El Bay 9',
    address: '0x34ceE420dE818Fc67dE4C4adA06CF598B2d2e3A3',
    ens: 'malikelbay.eth',
    image: '/images/punk.png',
    reason: 'Safe is an important public good. As delegate my focus lies with...',
    contribution: 'Very important contribution',
    twitter: 'https://twitter.com/malikelbay',
  },
]

const DelegateCard = (props: Delegate) => (
  <div className={css.card}>
    <div className={css.cardHeader}>
      <Avatar className={css.avatar} src={props.image}>
        &nbsp;
      </Avatar>

      <div>
        <Typography variant="h4">{props.name}</Typography>

        <Typography variant="body1" color="primary.light">
          {props.ens || shortenAddress(props.address)}
        </Typography>
      </div>
    </div>

    <Typography variant="body1" className={css.description}>
      {props.reason}
    </Typography>

    <div className={css.socials}>
      {props.twitter && (
        <IconButton aria-label="Twitter link" href={props.twitter} target="_blank" rel="noreferrer" size="small">
          <SvgIcon component={TwitterIcon} fontSize="inherit" color="inherit" inheritViewBox />
        </IconButton>
      )}
      {props.discord && (
        <IconButton aria-label="Discord link" href={props.discord} target="_blank" rel="noreferrer" size="small">
          <SvgIcon component={DiscordIcon} fontSize="inherit" color="inherit" inheritViewBox />
        </IconButton>
      )}
    </div>
  </div>
)

const Delegates = (props: BaseBlock & { footer: { text: string; highlight: string } }) => {
  return (
    <Container className={layoutCss.containerMedium}>
      <HeaderCTA {...props} />

      {/* TODO: Refactor both elements to SpacedGridFooter */}
      {/* Table */}
      <Grid container position="relative" className={css.cardGrid} spacing={{ xs: '16px', md: '30px', xl: '50px' }}>
        {delegatesData.map((item, index) => (
          <Grid key={index} item xs={12} md={4}>
            <DelegateCard {...item} />
          </Grid>
        ))}
        <div className={css.gradient} />
      </Grid>

      {/* Footer */}
      <div className={css.footer}>
        <Typography variant="body1" color="primary.light" textAlign="center">
          {props.footer.text}
          <span>{props.footer.highlight}</span>
        </Typography>
      </div>
    </Container>
  )
}

export default Delegates
