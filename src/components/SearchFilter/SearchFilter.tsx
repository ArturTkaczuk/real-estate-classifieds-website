import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { ThemeColorContext } from '../../context/ThemeColorContext'
import { FilterSettings, FilterInputChangeEvent, FilterObjectKeysAsString } from '../../types'
import {
  CityInput,
  PriceMaxInput,
  PriceMinInput,
  ProvinceInput,
  RoomsInput,
  SpaceMaxInput,
  SpaceMinInput,
} from './InputElements/InputElements'
import { TypeInput } from './InputElements/TypeInput'

interface SearchFilterProps {
  searchHandler: (filterSettings: FilterSettings) => void
}

export const SearchFilter = ({ searchHandler }: SearchFilterProps): JSX.Element => {
  const [filterSettings, setFilterSettings] = useState<FilterSettings>({})

  const [filterSettingType, setFilterSettingType] = useState<string>('')

  const themeColor = useContext(ThemeColorContext)

  const handleFilterSettingsChange = (
    event: FilterInputChangeEvent,
    filterObjectKey: FilterObjectKeysAsString,
  ) => {
    setFilterSettings({ ...filterSettings, ...{ [filterObjectKey]: event.target.value } })
  }

  return (
    <Container sx={{ marginBottom: '100px' }}>
      <Paper sx={{ padding: '0 20px 20px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6} lg={2}>
            <TypeInput
              filterSettingType={filterSettingType}
              setFilterSettingType={setFilterSettingType}
            />
          </Grid>
          <Grid item xs={6} lg={2}>
            <RoomsInput
              handleFilterSettingsChange={handleFilterSettingsChange}
              filterSettings={filterSettings}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <ProvinceInput
              handleFilterSettingsChange={handleFilterSettingsChange}
              filterSettings={filterSettings}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <CityInput
              handleFilterSettingsChange={handleFilterSettingsChange}
              filterSettings={filterSettings}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={{ display: 'flex' }}>
              <PriceMinInput
                handleFilterSettingsChange={handleFilterSettingsChange}
                filterSettings={filterSettings}
              />
              <Typography sx={{ fontSize: '2rem', margin: '0 3.5px' }}>-</Typography>

              <PriceMaxInput
                handleFilterSettingsChange={handleFilterSettingsChange}
                filterSettings={filterSettings}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={{ display: 'flex' }}>
              <SpaceMinInput
                handleFilterSettingsChange={handleFilterSettingsChange}
                filterSettings={filterSettings}
              />
              <Typography sx={{ fontSize: '2rem', margin: '0 3.5px' }}>-</Typography>
              <SpaceMaxInput
                handleFilterSettingsChange={handleFilterSettingsChange}
                filterSettings={filterSettings}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Button
              sx={{ width: '100%', height: '56px' }}
              color={themeColor}
              size='large'
              variant='contained'
              onClick={() => searchHandler(filterSettings)}
            >
              Search
            </Button>
          </Grid>

          {/* <p>{JSON.stringify(filterSettings)}</p> */}
        </Grid>
      </Paper>
    </Container>
  )
}
