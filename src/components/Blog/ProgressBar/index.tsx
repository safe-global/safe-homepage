import useScrollProgress from '@/hooks/useScrollProgress'
import { LinearProgress } from '@mui/material'
import css from '../styles.module.css'

const ProgressBar = () => {
  const readProgress = useScrollProgress()

  return (
    <div className={css.progressBar}>
      <LinearProgress variant="determinate" color="primary" value={readProgress} />
    </div>
  )
}

export default ProgressBar
