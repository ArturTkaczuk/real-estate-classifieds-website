import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { FilterInputChangeEvent, FilterObjectKeysAsString, FilterSettings } from '../../../types'

type TypeSelectProps = {
  filterSettings: FilterSettings
  handleFilterSettingsChange: (
    event: FilterInputChangeEvent,
    filterObjectKey: FilterObjectKeysAsString,
  ) => void
}

export const CityInput = ({
  filterSettings,
  handleFilterSettingsChange,
}: TypeSelectProps): JSX.Element => {
  return (
    <TextField
      sx={{ width: '100%' }}
      id='city'
      label='City'
      variant='outlined'
      value={filterSettings.city || ''}
      onChange={(event) => handleFilterSettingsChange(event, 'city')}
    />
  )
}

export const PriceMinInput = ({
  filterSettings,
  handleFilterSettingsChange,
}: TypeSelectProps): JSX.Element => {
  return (
    <TextField
      sx={{ width: '50%' }}
      id='priceMin'
      label='Min price (PLN)'
      variant='outlined'
      value={filterSettings.priceMin || ''}
      onChange={(event) => handleFilterSettingsChange(event, 'priceMin')}
      inputProps={{
        type: 'number',
      }}
    />
  )
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
