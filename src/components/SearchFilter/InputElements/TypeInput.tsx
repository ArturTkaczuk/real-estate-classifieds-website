import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { memo } from 'react'

type TypeInputProps = {
  filterSettingType: string
  setFilterSettingType: React.Dispatch<React.SetStateAction<string>>
}

const TypeInput = ({ filterSettingType, setFilterSettingType }: TypeInputProps): JSX.Element => {
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id='type-select-label'>Type</InputLabel>
      <Select
        labelId='type-select-label'
        id='type-select'
        value={filterSettingType || ''}
        label='type'
        onChange={(event) => setFilterSettingType(event.target.value)}
      >
        <MenuItem value=''>Both</MenuItem>
        <MenuItem value='rental'>Rentals</MenuItem>
        <MenuItem value='sale'>Sales</MenuItem>
      </Select>
    </FormControl>
  )
}

export const MemoizedTypeInput = memo(TypeInput)
