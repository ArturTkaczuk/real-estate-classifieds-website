import { Container, Paper, Typography } from '@mui/material'
import { EstateProps } from '../../types'
import { OffersLoading } from '../UI/LoadingOffers/OffersLoading'
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
        <OffersLoading />
      )}
    </Container>
  )
}
