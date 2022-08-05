import { CircularProgress, Container, Paper, Typography } from '@mui/material'
import { EstateProps } from '../../types'
import { Estate } from './Estate/Estate'

interface EstatesProps {
  offers: EstateProps[]
  backendOffersFetchStatus: boolean
}

export const Estates = ({ offers, backendOffersFetchStatus }: EstatesProps): JSX.Element => {
  return (
    <Container>
      <Paper sx={{ marginBottom: '10px' }}>
        <Typography sx={{ textAlign: 'center', padding: '20px 0' }} variant='h4' component='h2'>
          All offers:
        </Typography>
      </Paper>

      {backendOffersFetchStatus ? (
        offers.map((offer, index) => {
          return <Estate key={index} {...offer} />
        })
      ) : (
        <Paper
          sx={{
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Typography variant='h5' component='h2'>
            Offers Loading
          </Typography>
          <CircularProgress color='success' />
        </Paper>
      )}
    </Container>
  )
}
