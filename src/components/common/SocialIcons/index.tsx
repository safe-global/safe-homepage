import { IconButton, SvgIcon } from '@mui/material'
import css from './styles.module.css'

export type SocialsIconProps = {
  label: string
  url: string
  icon: any
}

const SocialIcons = ({ items }: { items: Array<SocialsIconProps> }) => (
  <div className={css.socials}>
    {items.map(({ label, url, icon }, index) => (
      <IconButton
        aria-label={`Share on ${label}`}
        sx={{ color: 'inherit' }}
        href={url}
        target="_blank"
        rel="noreferrer"
        size="small"
        key={index}
      >
        <SvgIcon component={icon} fontSize="inherit" color="inherit" inheritViewBox />
      </IconButton>
    ))}
  </div>
)

export default SocialIcons
