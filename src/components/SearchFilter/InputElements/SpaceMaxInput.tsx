import { TextField } from '@mui/material'
import { memo } from 'react'

type SpaceMaxInputProps = {
  filterSettingSpaceMax: number | string
  setFilterSettingSpaceMax: React.Dispatch<React.SetStateAction<string | number>>
}

const SpaceMaxInput = ({
  filterSettingSpaceMax,
  setFilterSettingSpaceMax,
}: SpaceMaxInputProps): JSX.Element => {
  return (
    <TextField
      sx={{ width: '50%' }}
      id='spaceMax'
      label='Max space (&#13217;)'
      variant='outlined'
      value={filterSettingSpaceMax || ''}
      onChange={(event) => setFilterSettingSpaceMax(event.target.value)}
      inputProps={{
        type: 'number',
      }}
    />
  )
}

export const MemoizedSpaceMaxInput = memo(SpaceMaxInput)
