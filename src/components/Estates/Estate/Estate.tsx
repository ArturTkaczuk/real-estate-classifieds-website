import { Box, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { EstateProps } from '../../../types'
import { addSpaceBetweenNumbers } from '../../../utils/addSpaceBetweenNumbers'
import styles from './Estate.module.css'

export const Estate = (props: EstateProps): JSX.Element => {
  const navigate = useNavigate()
  const { offerId, images, offerTitle, city, province, price, squareMeters, type, rooms } = props

  return (
    <Paper
      onClick={() => navigate(`offers/${offerId}`)}
      elevation={4}
      sx={{ cursor: 'pointer', marginBottom: '10px' }}
    >
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}>
        <Box
          sx={{
            width: { xs: '100%', lg: '250px' },
            height: { xs: '150px', lg: '150px' },
            objectFit: 'cover',
            borderRadius: { xs: '5px 5px 0 0', lg: '5px 0 0 5px' },
          }}
          component='img'
          src={images[0]}
        />
        <Box sx={{ padding: '10px' }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }} className={styles.hover}>
            {offerTitle}
          </Typography>
          <Typography sx={{ fontSize: '0.9rem' }}>
            {city}, {province}
          </Typography>
          <Box
            sx={{ display: { lg: 'flex' }, alignItems: 'center', marginTop: '20px', gap: '20px' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Typography sx={{ fontSize: '1.2rem' }}>
                {addSpaceBetweenNumbers(price)} {type === 'sale' ? 'PLN' : 'PLN/mth'}
              </Typography>
              {type === 'sale' && (
                <Typography>
                  {addSpaceBetweenNumbers(price / squareMeters)} PLN/m<sup>2</sup>
                </Typography>
              )}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <Typography>{rooms} rooms</Typography>
              <Typography>
                {squareMeters} m<sup>2</sup>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}
