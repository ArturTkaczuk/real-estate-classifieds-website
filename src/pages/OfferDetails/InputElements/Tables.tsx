import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { EstateProps } from '../../../types'
import { addSpaceBetweenNumbers } from '../../../utils/addSpaceBetweenNumbers'

type TablesProps = {
  price: EstateProps['price']
  squareMeters: EstateProps['squareMeters']
  rooms: EstateProps['rooms']
  city: EstateProps['city']
  province: EstateProps['province']
}

export const Tables = ({
  price,
  squareMeters,
  rooms,
  city,
  province,
}: TablesProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px 50px' }}>
      <Table
        sx={{
          width: '500px',
          maxWidth: '500px',
          height: 'fit-content',
        }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '1.2rem' }}>Basic information</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Price:</TableCell>
            <TableCell sx={{ width: '150px' }}>{addSpaceBetweenNumbers(price)} PLN</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Area:</TableCell>
            <TableCell sx={{ width: '150px' }}>
              {squareMeters} m<sup>2</sup>
            </TableCell>
          </TableRow>
          <TableRow sx={{ 'td, th': { border: 0 } }}>
            <TableCell>Rooms:</TableCell>
            <TableCell sx={{ width: '150px' }}>{rooms}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table sx={{ maxWidth: '500px', height: 'fit-content' }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '1.2rem' }}>Location</TableCell>
            <TableCell sx={{ width: '150px' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>City:</TableCell>
            <TableCell sx={{ width: '150px' }}>{city}</TableCell>
          </TableRow>
          <TableRow sx={{ 'td, th': { border: 0 } }}>
            <TableCell>Province:</TableCell>
            <TableCell sx={{ width: '150px' }}>{province}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  )
}
