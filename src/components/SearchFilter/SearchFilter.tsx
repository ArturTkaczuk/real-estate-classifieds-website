import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

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
    event: SelectChangeEvent<string | number>,
    objectKey: 'propertyStatus' | 'rooms' | 'province' | 'city' | 'priceMin' | 'priceMax',
  ) => {
    setFilterData({ ...filterData, ...{ [objectKey]: event.target.value } })
  }

  return (
    <Container>
      <Paper sx={{ padding: '300px 50px' }}>
        <Box sx={{ minWidth: '120px' }}>
          <FormControl fullWidth>
            <InputLabel id='property-status-select-label'>Property status</InputLabel>
            <Select
              labelId='property-status-select-label'
              id='property-status-select'
              value={filterData.propertyStatus || ''}
              label='property-status'
              onChange={(event) => handleChange(event, 'propertyStatus')}
            >
              <MenuItem value='both'>Both</MenuItem>
              <MenuItem value='rentals'>Rentals</MenuItem>
              <MenuItem value='sales'>Sales</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: '120px' }}>
          <FormControl fullWidth>
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

        {/* <Box sx={{ minWidth: '120px' }}>
          <FormControl fullWidth>
            <InputLabel id='property-status-select-label'>Property status</InputLabel>
            <Select
              labelId='property-status-select-label'
              id='property-status-select'
              value={filterData.propertyStatus || ''}
              label='property-status'
              onChange={(event) => handleChange(event, 'propertyStatus')}
            >
              <MenuItem value='both'>Both</MenuItem>
              <MenuItem value='rentals'>Rentals</MenuItem>
              <MenuItem value='sales'>Sales</MenuItem>
            </Select>
          </FormControl>
        </Box> */}

        <p>{JSON.stringify(filterData)}</p>
      </Paper>
    </Container>
  )
}
