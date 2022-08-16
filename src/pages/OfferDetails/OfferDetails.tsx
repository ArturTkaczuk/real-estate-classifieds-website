import {
  Box,
  Container,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import ReactImageGallery from 'react-image-gallery'
import { useParams } from 'react-router-dom'
import { EstateProps } from '../../types'
import image21 from '../../assets/images/offer2-1.jpg'
import image22 from '../../assets/images/offer2-2.jpg'
import image23 from '../../assets/images/offer2-3.jpg'

import 'react-image-gallery/styles/css/image-gallery.css'
import './Gallery.css'
import { addSpaceBetweenNumbers } from '../../utils/addSpaceBetweenNumbers'

const offerFromBackend: EstateProps = {
  offerId: 2,
  authorName: 'Cristine Noi',
  contactEmail: 'cristinenoi@gmail.com',
  contactPhone: '+48 547 645 582',
  images: [image21, image22, image23],
  offerTitle: 'Spacious 3-room apartment, Warsow - great location',
  city: 'Warsaw',
  province: 'Masovian',
  price: 607_000,
  squareMeters: 93,
  type: 'sale',
  rooms: 3,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolore. Molestias, rerum facilis provident nobis perspiciatis sapiente labore beatae architecto blanditiis tempore aperiam nam corrupti minus numquam ea, perferendis ducimus eum sunt ipsam mollitia tempora. Sed, voluptates eaque iusto culpa consequuntur sunt, minus omnis dolore, sint fuga vitae? Similique dolorum explicabo fugiat sed suscipit vitae, in saepe minima eos, consequuntur eligendi cum repellat. Ad corrupti, tenetur sunt distinctio reprehenderit ipsum architecto adipisci placeat, dolor eaque inventore beatae, similique illum quam accusamus. Tempora, dolorem nostrum explicabo hic tenetur at laborum dolore, harum dignissimos impedit ut? Praesentium repellendus amet officia eius dolore.',
}

export const OfferDetails = (): JSX.Element => {
  const [backendOfferFetchStatus, setBackendOfferFetchStatus] = useState<'fetching' | 'fetched'>(
    'fetching',
  )

  const {
    authorName,
    contactEmail,
    contactPhone,
    images,
    offerTitle,
    city,
    province,
    price,
    squareMeters,
    rooms,
  } = offerFromBackend
  const mappedImagesForReactImageGallery = images.map((image) => {
    return {
      original: image,
      thumbnail: image,
    }
  })

  const urlParams = useParams()

  useEffect(() => {
    const fetchOfferOnAppLoad = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setBackendOfferFetchStatus('fetched')
    }

    fetchOfferOnAppLoad()
  }, [])

  return (
    <>
      <Container>
        <Paper sx={{ padding: { xs: '20px 15px 50px', md: '20px 40px 50px' }, marginTop: '10px' }}>
          {backendOfferFetchStatus === 'fetched' ? (
            <>
              <Typography component='h2' variant='h4' sx={{ marginBottom: '10px' }}>
                {offerTitle}
              </Typography>
              <ReactImageGallery
                showIndex={true}
                slideInterval={2500}
                items={mappedImagesForReactImageGallery}
              />
              <Typography component='h2' variant='h4' sx={{ margin: '20px 0' }}>
                Offer Details
              </Typography>
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
                      <TableCell sx={{ width: '150px' }}>
                        {addSpaceBetweenNumbers(price)} PLN
                      </TableCell>
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
              <Typography component='h2' variant='h4' sx={{ margin: '20px 0' }}>
                Description
              </Typography>
              <Typography>
                The apartment is located on the top floor of a building with an elevator. The
                apartment has windows on 3 sides of the world - very nicely lit. There are only two
                other apartments on the first floor. The terrace faces west and south and has no
                neighbor. The apartment is fully finished, equipped with an air-conditioning system,
                electric sunshade on the terrace, roof over the balcony, all built-in household
                appliances. Finishing the apartment for yourself - inhabited from the beginning and
                has never been rented. All furniture made to measure with high-class fittings.
                Heating and hot water from the MPEC municipal network - low maintenance costs.
                Housing estate from 2015 with monitoring. The estate is fenced, the gate is opened
                with a remote control. Within the estate there are bicycle stands and a playground.
                The apartment is located at ul. Grzegórzecka 77 in close proximity to the Variete
                Theater and the Vistula boulevards. To the tram stop, it is less than 5 minutes on
                foot. Nearby, there are service premises, shops such as Żabka or Biedronka, as well
                as nurseries, a hairdresser, a kindergarten, a bakery, a medical center, etc. An
                ideal place for people who want to live in a well-connected place, in the city
                center, yet in peace and quiet. The flat in full ownership - perpetual usufruct has
                been fully purchased. You can buy one or two parking spaces in the underground
                garage and a storage room.
              </Typography>
              <Typography component='h2' variant='h4' sx={{ margin: '20px 0' }}>
                Contact
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{authorName}</Typography>
              <Typography>Email: {contactEmail}</Typography>
              <Typography>Phone number: {contactPhone}</Typography>
            </>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <Skeleton animation='wave' variant='text' sx={{ fontSize: '34px' }} />
              <Skeleton
                animation='wave'
                variant='rectangular'
                sx={{ width: '100%', height: '35vw' }}
              />
              <Skeleton animation='wave' variant='text' sx={{ fontSize: '34px', width: '200px' }} />
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Skeleton
                  animation='wave'
                  variant='rectangular'
                  sx={{
                    width: '500px',
                    maxWidth: '500px',
                    height: '230px',
                    margin: '0 50px 10px 0',
                  }}
                />
                <Skeleton
                  animation='wave'
                  variant='rectangular'
                  sx={{
                    width: '500px',
                    maxWidth: '500px',
                    height: '230px',
                  }}
                />
              </Box>
              <Skeleton animation='wave' variant='text' sx={{ fontSize: '34px', width: '200px' }} />
              <Skeleton
                animation='wave'
                variant='rectangular'
                sx={{ width: '100%', height: '300px' }}
              />
              <Skeleton animation='wave' variant='text' sx={{ fontSize: '34px', width: '200px' }} />
              <Skeleton
                animation='wave'
                variant='rectangular'
                sx={{ width: '200px', height: '100px' }}
              />
            </Box>
          )}
        </Paper>
      </Container>
    </>
  )
}
