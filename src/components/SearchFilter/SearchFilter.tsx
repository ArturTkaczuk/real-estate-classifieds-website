import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import { ChangeEvent, useState } from 'react'

export const SearchFilter = (): JSX.Element => {
  const [filterData, setFilterData] = useState<{
    type?: string
    rooms?: number
    province?: string
    city?: string
    priceMin?: number
    priceMax?: number
  }>({})

  const handleChange = (
    event: SelectChangeEvent<string | number> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    objectKey: 'type' | 'rooms' | 'province' | 'city' | 'priceMin' | 'priceMax',
  ) => {
    setFilterData({ ...filterData, ...{ [objectKey]: event.target.value } })
  }

  return (
    <Container>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          gap: '10px',
          padding: '20px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px', width: '100%' }}>
          <FormControl sx={{ width: '50%', minWidth: '120px' }}>
            <InputLabel id='type-select-label'>Type</InputLabel>
            <Select
              labelId='type-select-label'
              id='type-select'
              value={filterData.type || ''}
              label='type'
              onChange={(event) => handleChange(event, 'type')}
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

        <FormControl sx={{ minWidth: { xs: '100%', lg: '200px' } }}>
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
          sx={{ width: '100%' }}
          id='city'
          label='City'
          variant='outlined'
          value={filterData.city || ''}
          onChange={(event) => handleChange(event, 'city')}
        />

        {/* Prevent text input in TextFields below
https://bobbyhadz.com/blog/react-only-number-input
        */}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            minWidth: { xs: '100%', lg: '300px' },
          }}
        >
          <TextField
            sx={{ width: '50%' }}
            id='priceMin'
            label='Min price (PLN)'
            variant='outlined'
            value={filterData.priceMin || ''}
            onChange={(event) => handleChange(event, 'priceMin')}
            inputProps={{
              type: 'number',
            }}
          />
          <Typography sx={{ fontSize: '2rem' }}>-</Typography>
          <TextField
            sx={{ width: '50%' }}
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

        <Button
          color='success'
          sx={{ minWidth: { xs: '100%', lg: '100px' }, height: '56px' }}
          size='large'
          variant='contained'
        >
          Search
        </Button>

        {/* <p>{JSON.stringify(filterData)}</p> */}
      </Paper>
    </Container>
  )
}
