import { Box, Skeleton } from '@mui/material'

export const OfferDetailsFetching = (): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <Skeleton animation='wave' variant='text' sx={{ fontSize: '34px' }} />
      <Skeleton animation='wave' variant='rectangular' sx={{ width: '100%', height: '35vw' }} />
      <Skeleton animation='wave' variant='text' sx={{ fontSize: '34px', width: '200px' }} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px 50px' }}>
        <Skeleton
          animation='wave'
          variant='rectangular'
          sx={{
            width: '500px',
            maxWidth: '500px',
            height: '230px',
          }}
        />
        <Skeleton
          animation='wave'
          variant='rectangular'
          sx={{
            width: '500px',
            maxWidth: '500px',
            height: '170px',
          }}
        />
      </Box>
      <Skeleton animation='wave' variant='text' sx={{ fontSize: '34px', width: '200px' }} />
      <Skeleton animation='wave' variant='rectangular' sx={{ width: '100%', height: '300px' }} />
      <Skeleton animation='wave' variant='text' sx={{ fontSize: '34px', width: '200px' }} />
      <Skeleton animation='wave' variant='rectangular' sx={{ width: '200px', height: '100px' }} />
    </Box>
  )
}
