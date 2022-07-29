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

type SearchFilterProps = {
  // prop: string
}

export const SearchFilter = (/*{ prop }: SearchFilterProps*/): JSX.Element => {
  const [filterData, setFilterData] = useState<{
    propertyStatus?: string
    rooms?: string
    province?: string
    city?: string
    priceMin?: number
    priceMax?: number
  }>({})

  const handleChange = (event: SelectChangeEvent, objectKey: 'propertyStatus') => {
    setFilterData({ [objectKey]: event.target.value })
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
              value={filterData.propertyStatus}
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
              value={filterData.propertyStatus}
              label='rooms'
              onChange={(event) => handleChange(event, 'propertyStatus')}
            >
              <MenuItem value='both'>Both</MenuItem>
              <MenuItem value='rentals'>Rentals</MenuItem>
              <MenuItem value='sales'>Sales</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <p>{JSON.stringify(filterData)}</p>
      </Paper>
    </Container>
  )
}
