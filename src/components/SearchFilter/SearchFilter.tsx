import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { FilterSettings, FilterInputChangeEvent, FilterObjectKeysAsString } from '../../types'
import {
  CityInput,
  PriceMaxInput,
  PriceMinInput,
  ProvinceInput,
  RoomsInput,
  SpaceMaxInput,
  SpaceMinInput,
  TypeInput,
} from './InputElements/InputElements'

interface SearchFilterProps {
  searchHandler: (filterSettings: FilterSettings) => void
}

export const SearchFilter = ({ searchHandler }: SearchFilterProps): JSX.Element => {
  const [filterSettings, setFilterSettings] = useState<FilterSettings>({})

  const handleFilterSettingsChange = (
    event: FilterInputChangeEvent,
    filterObjectKey: FilterObjectKeysAsString,
  ) => {
    setFilterSettings({ ...filterSettings, ...{ [filterObjectKey]: event.target.value } })
  }

  return (
    <Container sx={{ marginBottom: '100px' }}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          gap: '10px',
          padding: '20px',
          width: { md: '700px', lg: '100%' },
          margin: '0 auto',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px', width: '100%' }}>
          <TypeInput
            handleFilterSettingsChange={handleFilterSettingsChange}
            filterSettings={filterSettings}
          />
          <RoomsInput
            handleFilterSettingsChange={handleFilterSettingsChange}
            filterSettings={filterSettings}
          />
        </Box>

        <ProvinceInput
          handleFilterSettingsChange={handleFilterSettingsChange}
          filterSettings={filterSettings}
        />

        <CityInput
          handleFilterSettingsChange={handleFilterSettingsChange}
          filterSettings={filterSettings}
        />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            minWidth: { xs: '100%', lg: '300px' },
          }}
        >
          <PriceMinInput
            handleFilterSettingsChange={handleFilterSettingsChange}
            filterSettings={filterSettings}
          />
          <Typography sx={{ fontSize: '2rem' }}>-</Typography>

          <PriceMaxInput
            handleFilterSettingsChange={handleFilterSettingsChange}
            filterSettings={filterSettings}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            minWidth: { xs: '100%', lg: '300px' },
          }}
        >
          <SpaceMinInput
            handleFilterSettingsChange={handleFilterSettingsChange}
            filterSettings={filterSettings}
          />
          <Typography sx={{ fontSize: '2rem' }}>-</Typography>
          <SpaceMaxInput
            handleFilterSettingsChange={handleFilterSettingsChange}
            filterSettings={filterSettings}
          />
        </Box>

        <Button
          color='success'
          sx={{ minWidth: { xs: '100%', lg: '100px' }, height: '56px' }}
          size='large'
          variant='contained'
          onClick={() => searchHandler(filterSettings)}
        >
          Search
        </Button>

        {/* <p>{JSON.stringify(filterSettings)}</p> */}
      </Paper>
    </Container>
  )
}
