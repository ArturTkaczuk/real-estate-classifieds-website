import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { FilterInputChangeEvent, FilterObjectKeysAsString, FilterSettings } from '../../../types'

type TypeSelectProps = {
  filterSettings: FilterSettings
  handleFilterSettingsChange: (
    event: FilterInputChangeEvent,
    filterObjectKey: FilterObjectKeysAsString,
  ) => void
}

export const RoomsInput = ({
  filterSettings,
  handleFilterSettingsChange,
}: TypeSelectProps): JSX.Element => {
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id='rooms-select-label'>Rooms</InputLabel>
      <Select
        labelId='rooms-select-label'
        id='rooms-select'
        value={filterSettings.rooms || ''}
        label='rooms'
        onChange={(event) => handleFilterSettingsChange(event, 'rooms')}
      >
        <MenuItem value=''>All</MenuItem>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((room) => {
          return (
            <MenuItem key={room} value={room}>
              {room}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export const ProvinceInput = ({
  filterSettings,
  handleFilterSettingsChange,
}: TypeSelectProps): JSX.Element => {
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id='province-select-label'>Province</InputLabel>
      <Select
        labelId='province-select-label'
        id='province-select'
        value={filterSettings.province || ''}
        label='province'
        onChange={(event) => handleFilterSettingsChange(event, 'province')}
      >
        <MenuItem value=''>All</MenuItem>
        {[
          'Lower Silesian',
          'Kuyavian-Pomeranian',
          'Lublin',
          'Lubusz',
          'Łódź',
          'Lesser Poland',
          'Masovian',
          'Opole',
          'Subcarpathian',
          'Podlaskie',
          'Pomeranian',
          'Silesian',
          'Holy Cross',
          'Warmian-Masurian',
          'Greater Poland',
          'West Pomeranian',
        ].map((province, idx) => {
          return (
            <MenuItem key={idx} value={province}>
              {province}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
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
