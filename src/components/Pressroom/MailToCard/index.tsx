import { Typography } from '@mui/material'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import commonCss from '../styles.module.css'

const MailToCard = () => {
  return (
    <a href="mailto:comms@safe.global" target="_blank" rel="noreferrer" className={commonCss.card}>
      <div className={commonCss.spacedBetween}>
        <Typography variant="h4">comms@safe.global</Typography>
        <ArrowIcon className={commonCss.icon} />
      </div>
      <Typography color="primary.light">For Media Inquiries</Typography>
    </a>
  )
}

export default MailToCard
