import { TextField } from '@mui/material'
import { memo } from 'react'

type CityInputProps = {
  filterSettingCity: string
  setFilterSettingCity: React.Dispatch<React.SetStateAction<string>>
}

const CityInput = ({ filterSettingCity, setFilterSettingCity }: CityInputProps): JSX.Element => {
  return (
    <TextField
      sx={{ width: '100%' }}
      id='city'
      label='City'
      variant='outlined'
      value={filterSettingCity || ''}
      onChange={(event) => setFilterSettingCity(event.target.value)}
    />
  )
}

export const MemoizedCityInput = memo(CityInput)
