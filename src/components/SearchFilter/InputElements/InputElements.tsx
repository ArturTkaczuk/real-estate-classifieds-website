import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { FilterInputChangeEvent, FilterObjectKeysAsString, FilterSettings } from '../../../types'

type TypeSelectProps = {
  filterSettings: FilterSettings
  handleFilterSettingsChange: (
    event: FilterInputChangeEvent,
    filterObjectKey: FilterObjectKeysAsString,
  ) => void
}

export const PriceMaxInput = ({
  filterSettings,
  handleFilterSettingsChange,
}: TypeSelectProps): JSX.Element => {
  return (
    <TextField
      sx={{ width: '50%' }}
      id='priceMax'
      label='Max price (PLN)'
      variant='outlined'
      value={filterSettings.priceMax || ''}
      onChange={(event) => handleFilterSettingsChange(event, 'priceMax')}
      inputProps={{
        type: 'number',
      }}
    />
  )
}

export const SpaceMinInput = ({
  filterSettings,
  handleFilterSettingsChange,
}: TypeSelectProps): JSX.Element => {
  return (
    <TextField
      sx={{ width: '50%' }}
      id='spaceMin'
      label='Min space (&#13217;)'
      variant='outlined'
      value={filterSettings.spaceMin || ''}
      onChange={(event) => handleFilterSettingsChange(event, 'spaceMin')}
      inputProps={{
        type: 'number',
      }}
    />
  )
}

export const SpaceMaxInput = ({
  filterSettings,
  handleFilterSettingsChange,
}: TypeSelectProps): JSX.Element => {
  return (
    <TextField
      sx={{ width: '50%' }}
      id='spaceMax'
      label='Max space (&#13217;)'
      variant='outlined'
      value={filterSettings.spaceMax || ''}
      onChange={(event) => handleFilterSettingsChange(event, 'spaceMax')}
      inputProps={{
        type: 'number',
      }}
    />
  )
}
