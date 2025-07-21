import { Box, Typography } from '@mui/material'
import { type Asset } from 'contentful'
import css from './styles.module.css'
import { isAsset } from '@/lib/typeGuards'

const Investors = ({ investors }: { investors: Asset<undefined, string>[] }) => {
  return (
    <Box component="div" mt="140px">
      <Typography variant="h2">Backed by</Typography>
      <div className={css.logos}>
        {investors.map((logo, index) => {
          return isAsset(logo) && logo.fields.file?.url ? (
            <img key={index} src={logo.fields.file.url} alt={logo.fields.title} />
          ) : null
        })}
      </div>
    </Box>
  )
}

export default Investors
