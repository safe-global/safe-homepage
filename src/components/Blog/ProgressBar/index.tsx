import useReadProgress from '@/hooks/useReadProgress'
import { LinearProgress } from '@mui/material'
import css from '../styles.module.css'

const ProgressBar = () => {
  const readProgress = useReadProgress()

  return (
    <div className={css.progressBar}>
      <LinearProgress variant="determinate" value={readProgress} className={css.progressBar} />
    </div>
  )
}

export default ProgressBar
