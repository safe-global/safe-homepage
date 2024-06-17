import { Typography } from '@mui/material'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'
import commonCss from '../styles.module.css'
import { COMMS_EMAIL } from '@/config/constants'

const MailToCard = () => {
  return (
    <a href={`mailto:${COMMS_EMAIL}`} target="_blank" rel="noreferrer" className={commonCss.card}>
      <div className={commonCss.spacedBetween}>
        <Typography variant="h4">{COMMS_EMAIL}</Typography>
        <ArrowIcon className={commonCss.icon} />
      </div>
      <Typography color="primary.light">For Media Inquiries</Typography>
    </a>
  )
}

export default MailToCard
