import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { ThemeColorContext } from '../../context/ThemeColorContext'
import { FilterSettings, FilterInputChangeEvent, FilterObjectKeysAsString } from '../../types'
import { MemoizedCityInput } from './InputElements/CityInput'
import { MemoizedPriceMaxInput } from './InputElements/PriceMaxInput'
import { MemoizedPriceMinInput } from './InputElements/PriceMinInput'
import { MemoizedProvinceInput } from './InputElements/ProvinceInput'
import { MemoizedRoomsInput } from './InputElements/RoomsInput'
import { MemoizedSpaceMaxInput } from './InputElements/SpaceMaxInput'
import { MemoizedSpaceMinInput } from './InputElements/SpaceMinInput'
import { MemoizedTypeInput } from './InputElements/TypeInput'

interface SearchFilterProps {
  searchHandler: (filterSettings: FilterSettings) => void
}

export const SearchFilter = ({ searchHandler }: SearchFilterProps): JSX.Element => {
  const [filterSettingType, setFilterSettingType] = useState<string>('')
  const [filterSettingRooms, setFilterSettingRooms] = useState<number | string>('')
  const [filterSettingProvince, setFilterSettingProvince] = useState<string>('')
  const [filterSettingCity, setFilterSettingCity] = useState<string>('')
  const [filterSettingPriceMin, setFilterSettingPriceMin] = useState<number | string>('')
  const [filterSettingPriceMax, setFilterSettingPriceMax] = useState<number | string>('')
  const [filterSettingSpaceMin, setFilterSettingSpaceMin] = useState<number | string>('')
  const [filterSettingSpaceMax, setFilterSettingSpaceMax] = useState<number | string>('')

  const themeColor = useContext(ThemeColorContext)

  return (
    <Container sx={{ marginBottom: '100px' }}>
      <Paper sx={{ padding: '0 20px 20px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={6} lg={2}>
            <MemoizedTypeInput
              filterSettingType={filterSettingType}
              setFilterSettingType={setFilterSettingType}
            />
          </Grid>
          <Grid item xs={6} lg={2}>
            <MemoizedRoomsInput
              filterSettingRooms={filterSettingRooms}
              setFilterSettingRooms={setFilterSettingRooms}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <MemoizedProvinceInput
              filterSettingProvince={filterSettingProvince}
              setFilterSettingProvince={setFilterSettingProvince}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <MemoizedCityInput
              filterSettingCity={filterSettingCity}
              setFilterSettingCity={setFilterSettingCity}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={{ display: 'flex' }}>
              <MemoizedPriceMinInput
                filterSettingPriceMin={filterSettingPriceMin}
                setFilterSettingPriceMin={setFilterSettingPriceMin}
              />
              <Typography sx={{ fontSize: '2rem', margin: '0 3.5px' }}>-</Typography>

              <MemoizedPriceMaxInput
                filterSettingPriceMax={filterSettingPriceMax}
                setFilterSettingPriceMax={setFilterSettingPriceMax}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Box sx={{ display: 'flex' }}>
              <MemoizedSpaceMinInput
                filterSettingSpaceMin={filterSettingSpaceMin}
                setFilterSettingSpaceMin={setFilterSettingSpaceMin}
              />
              <Typography sx={{ fontSize: '2rem', margin: '0 3.5px' }}>-</Typography>
              <MemoizedSpaceMaxInput
                filterSettingSpaceMax={filterSettingSpaceMax}
                setFilterSettingSpaceMax={setFilterSettingSpaceMax}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Button
              sx={{ width: '100%', height: '56px' }}
              color={themeColor}
              size='large'
              variant='contained'
              onClick={() => searchHandler({})}
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
