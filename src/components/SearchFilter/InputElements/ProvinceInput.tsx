import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { memo } from 'react'

type ProvinceInputProps = {
  filterSettingProvince: string
  setFilterSettingProvince: React.Dispatch<React.SetStateAction<string>>
}

const ProvinceInput = ({
  filterSettingProvince,
  setFilterSettingProvince,
}: ProvinceInputProps): JSX.Element => {
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id='province-select-label'>Province</InputLabel>
      <Select
        labelId='province-select-label'
        id='province-select'
        value={filterSettingProvince || ''}
        label='province'
        onChange={(event) => setFilterSettingProvince(event.target.value)}
      >
        <MenuItem value=''>All</MenuItem>
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
  )
}

export const MemoizedProvinceInput = memo(ProvinceInput)
