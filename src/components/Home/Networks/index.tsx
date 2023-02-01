import { BaseBlock } from '@/components/Home/types'
import { Typography } from '@mui/material'

import css from './styles.module.css'

const Networks = ({ title, text, icon }: BaseBlock) => {
  return (
    <div>
      <Typography variant="h2" textAlign="center" mb={{ xs: 5, md: 8 }}>
        {title}
      </Typography>
      <div className={css.gradient}>{icon}</div>
      <Typography color="border.main" textAlign="center" mt={{ xs: 4, md: 5 }}>
        {text}
      </Typography>
    </div>
  )
}

export default Networks
