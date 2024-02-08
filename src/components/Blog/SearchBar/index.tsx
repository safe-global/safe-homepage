import { IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@/public/images/search.svg'
import CloseIcon from '@/public/images/close.svg'
import type { Dispatch, SetStateAction } from 'react'

const SearchBar = ({ query, setQuery }: { query: string; setQuery: Dispatch<SetStateAction<string>> }) => {
  return (
    <TextField
      sx={{ backgroundColor: 'white', borderRadius: '8px', mt: '20px' }}
      variant="outlined"
      placeholder="Search by name, description or category"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: query ? (
          <InputAdornment position="end">
            <IconButton onClick={() => setQuery('')} sx={{ color: 'primary.light' }}>
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      fullWidth
    />
  )
}

export default SearchBar
