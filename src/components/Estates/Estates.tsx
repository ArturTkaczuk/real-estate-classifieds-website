import { Box } from '@mui/material'
import { EstateProps } from '../../types'
import { OffersFetching } from '../UI/Fetching/OffersFetching'
import { Estate } from './Estate/Estate'

interface EstatesProps {
  offers: EstateProps[]
  backendOffersFetchStatus: 'fetching' | 'fetched'
}

export const Estates = ({ offers, backendOffersFetchStatus }: EstatesProps): JSX.Element => {
  return (
    <Box>
      {backendOffersFetchStatus === 'fetching' ? (
        <OffersFetching />
      ) : (
        offers.map((offer, index) => {
          return <Estate key={index} {...offer} />
        })
      )}
    </Box>
  )
}
