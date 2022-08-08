import { TextField } from '@mui/material'
import { memo } from 'react'

type SpaceMinInputProps = {
  filterSettingSpaceMin: number | string
  setFilterSettingSpaceMin: React.Dispatch<React.SetStateAction<string | number>>
}

const SpaceMinInput = ({
  filterSettingSpaceMin,
  setFilterSettingSpaceMin,
}: SpaceMinInputProps): JSX.Element => {
  return (
    <TextField
      sx={{ width: '50%' }}
      id='spaceMin'
      label='Min space (&#13217;)'
      variant='outlined'
      value={filterSettingSpaceMin || ''}
      onChange={(event) => setFilterSettingSpaceMin(event.target.value)}
      inputProps={{
        type: 'number',
      }}
    />
  )
}

export const MemoizedSpaceMinInput = memo(SpaceMinInput)
