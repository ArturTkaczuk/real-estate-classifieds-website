import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { memo } from 'react'

type RoomsInputProps = {
  filterSettingRooms: number | string
  setFilterSettingRooms: React.Dispatch<React.SetStateAction<number | string>>
}

const RoomsInput = ({
  filterSettingRooms,
  setFilterSettingRooms,
}: RoomsInputProps): JSX.Element => {
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id='rooms-select-label'>Rooms</InputLabel>
      <Select
        labelId='rooms-select-label'
        id='rooms-select'
        value={filterSettingRooms || ''}
        label='rooms'
        onChange={(event) => setFilterSettingRooms(event.target.value)}
      >
        <MenuItem value=''>All</MenuItem>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((room) => {
          return (
            <MenuItem key={room} value={room}>
              {room}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export const MemoizedRoomsInput = memo(RoomsInput)
