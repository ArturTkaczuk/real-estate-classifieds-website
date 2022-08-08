import { TextField } from '@mui/material'
import { memo } from 'react'

type PriceMaxInputProps = {
  filterSettingPriceMax: number | string
  setFilterSettingPriceMax: React.Dispatch<React.SetStateAction<string | number>>
}

export const PriceMaxInput = ({
  filterSettingPriceMax,
  setFilterSettingPriceMax,
}: PriceMaxInputProps): JSX.Element => {
  return (
    <TextField
      sx={{ width: '50%' }}
      id='priceMax'
      label='Max price (PLN)'
      variant='outlined'
      value={filterSettingPriceMax || ''}
      onChange={(event) => setFilterSettingPriceMax(event.target.value)}
      inputProps={{
        type: 'number',
      }}
    />
  )
}

export const MemoizedPriceMaxInput = memo(PriceMaxInput)
