import {
  Box,
  Divider,
  FormControl,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { SortValues } from '../../../types/sortingTypes'

type EstatesHeadingProps = {
  sortByValue: SortValues
  changeSortByValueHandler: (e: SelectChangeEvent<SortValues>) => void
}

export const EstatesHeading = ({
  sortByValue,
  changeSortByValueHandler,
}: EstatesHeadingProps): JSX.Element => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: '20px',
        padding: '20px',
        gap: '20px',
      }}
    >
      <Typography
        sx={{ width: { xs: '100%', sm: 'fit-content' }, textAlign: 'center' }}
        variant='h4'
        component='h2'
      >
        All offers:
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Typography variant='h6' component='h3'>
          Sort by:
        </Typography>
        <FormControl size='small'>
          <Select
            id='demo-simple-select'
            value={sortByValue}
            onChange={changeSortByValueHandler}
            autoWidth
          >
            <MenuItem value={SortValues.RECENT_TO_OLDEST}>Recent to Oldest</MenuItem>
            <MenuItem value={SortValues.OLDEST_TO_RECENT}>Oldest to Recent</MenuItem>

            <Divider sx={{ margin: '0 !important' }} />

            <MenuItem value={SortValues.PRICE_LOW_TO_HIGH}>Price: low to high</MenuItem>
            <MenuItem value={SortValues.PRICE_HIGH_TO_LOW}>Price: high to low</MenuItem>

            <Divider sx={{ margin: '0 !important' }} />

            <MenuItem value={SortValues.SPACE_LOW_TO_HIGH}>Space: low to high</MenuItem>
            <MenuItem value={SortValues.SPACE_HIGH_TO_LOW}>Space: high to low</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Paper>
  )
}
