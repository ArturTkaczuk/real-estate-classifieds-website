import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import { ChangeEvent, useState } from 'react'

export const SearchFilter = (): JSX.Element => {
  const [filterData, setFilterData] = useState<{
    propertyStatus?: string
    rooms?: number
    province?: string
    city?: string
    priceMin?: number
    priceMax?: number
  }>({})

  const handleChange = (
    event: SelectChangeEvent<string | number> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    objectKey: 'propertyStatus' | 'rooms' | 'province' | 'city' | 'priceMin' | 'priceMax',
  ) => {
    setFilterData({ ...filterData, ...{ [objectKey]: event.target.value } })
  }

  return (
    <Container>
      <Paper sx={{ padding: '100px 50px' }}>
        <Box>
          <FormControl sx={{ width: '50%' }}>
            <InputLabel id='property-status-select-label'>Property status</InputLabel>
            <Select
              labelId='property-status-select-label'
              id='property-status-select'
              value={filterData.propertyStatus || ''}
              label='property-status'
              onChange={(event) => handleChange(event, 'propertyStatus')}
            >
              <MenuItem value='Both'>Both</MenuItem>
              <MenuItem value='Rentals'>Rentals</MenuItem>
              <MenuItem value='Sales'>Sales</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: '50%' }}>
            <InputLabel id='rooms-select-label'>Rooms</InputLabel>
            <Select
              labelId='rooms-select-label'
              id='rooms-select'
              value={filterData.rooms || ''}
              label='rooms'
              onChange={(event) => handleChange(event, 'rooms')}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((room) => {
                return (
                  <MenuItem key={room} value={room}>
                    {room}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>

        <FormControl sx={{ width: '220px' }}>
          <InputLabel id='province-select-label'>Province</InputLabel>
          <Select
            labelId='province-select-label'
            id='province-select'
            value={filterData.province || ''}
            label='province'
            onChange={(event) => handleChange(event, 'province')}
          >
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

        <TextField
          sx={{ minWidth: '220px' }}
          id='city'
          label='City'
          variant='outlined'
          value={filterData.city || ''}
          onChange={(event) => handleChange(event, 'city')}
        />

        {/* Prevent text input in TextFields below
https://bobbyhadz.com/blog/react-only-number-input
        */}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <TextField
            sx={{ minWidth: '220px' }}
            id='priceMin'
            label='Min price (PLN)'
            variant='outlined'
            value={filterData.priceMin || ''}
            onChange={(event) => handleChange(event, 'priceMin')}
            inputProps={{
              type: 'number',
            }}
          />
          <Typography sx={{ fontSize: '2.5rem' }}>-</Typography>
          <TextField
            sx={{ minWidth: '220px' }}
            id='priceMax'
            label='Max price (PLN)'
            variant='outlined'
            value={filterData.priceMax || ''}
            onChange={(event) => handleChange(event, 'priceMax')}
            inputProps={{
              type: 'number',
            }}
          />
        </Box>

        <p>{JSON.stringify(filterData)}</p>
      </Paper>
    </Container>
  )
}
