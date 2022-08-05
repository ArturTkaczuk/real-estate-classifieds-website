import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { handleFilterSettingsChangeType } from '../../../types'

type TypeInputProps = {
  type?: string
  handleFilterSettingsChange: handleFilterSettingsChangeType
}

export const TypeInput = ({ type, handleFilterSettingsChange }: TypeInputProps): JSX.Element => {
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id='type-select-label'>Type</InputLabel>
      <Select
        labelId='type-select-label'
        id='type-select'
        value={type || ''}
        label='type'
        onChange={(event) => handleFilterSettingsChange(event, 'type')}
      >
        <MenuItem value=''>Both</MenuItem>
        <MenuItem value='rental'>Rentals</MenuItem>
        <MenuItem value='sale'>Sales</MenuItem>
      </Select>
    </FormControl>
  )
}
