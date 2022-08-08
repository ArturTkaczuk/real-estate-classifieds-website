import { TextField } from '@mui/material'
import { memo } from 'react'

type PriceMinInputProps = {
  filterSettingPriceMin: number | string
  setFilterSettingPriceMin: React.Dispatch<React.SetStateAction<string | number>>
}

const PriceMinInput = ({
  filterSettingPriceMin,
  setFilterSettingPriceMin,
}: PriceMinInputProps): JSX.Element => {
  return (
    <TextField
      sx={{ width: '50%' }}
      id='priceMin'
      label='Min price (PLN)'
      variant='outlined'
      value={filterSettingPriceMin || ''}
      onChange={(event) => setFilterSettingPriceMin(event.target.value)}
      inputProps={{
        type: 'number',
      }}
    />
  )
}

export const MemoizedPriceMinInput = memo(PriceMinInput)
