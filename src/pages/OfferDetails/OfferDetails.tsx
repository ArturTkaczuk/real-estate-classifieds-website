import {
  Box,
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import ReactImageGallery from 'react-image-gallery'
import { useParams } from 'react-router-dom'
import image11 from '../../assets/images/offer1-1.jpg'
import image12 from '../../assets/images/offer1-2.jpg'
import image13 from '../../assets/images/offer1-3.jpg'

import 'react-image-gallery/styles/css/image-gallery.css'
import { EstateProps } from '../../types'

const offerFromBackend: EstateProps = {
  offerId: 1,
  author: 'Joe Kowalski',
  contactEmail: 'Joe.Kowalski@gmail.com',
  contactPhone: '+48 389 391 832',
  images: [image11, image12, image13],
  offerTitle: 'Modern apartment, high standard',
  city: 'Warsaw',
  province: 'Masovian',
  price: 470_000,
  squareMeters: 78,
  type: 'sale',
  rooms: 2,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolore. Molestias, rerum facilis provident nobis perspiciatis sapiente labore beatae architecto blanditiis tempore aperiam nam corrupti minus numquam ea, perferendis ducimus eum sunt ipsam mollitia tempora. Sed, voluptates eaque iusto culpa consequuntur sunt, minus omnis dolore, sint fuga vitae? Similique dolorum explicabo fugiat sed suscipit vitae, in saepe minima eos, consequuntur eligendi cum repellat. Ad corrupti, tenetur sunt distinctio reprehenderit ipsum architecto adipisci placeat, dolor eaque inventore beatae, similique illum quam accusamus. Tempora, dolorem nostrum explicabo hic tenetur at laborum dolore, harum dignissimos impedit ut? Praesentium repellendus amet officia eius dolore.',
}

export const OfferDetails = (): JSX.Element => {
  const [backendOfferFetchStatus, setBackendOfferFetchStatus] = useState<'fetching' | 'fetched'>(
    'fetching',
  )

  const {
    offerId,
    author,
    contactEmail,
    contactPhone,
    images,
    offerTitle,
    city,
    province,
    price,
    squareMeters,
    type,
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
        {backendOfferFetchStatus === 'fetched' ? (
          <Paper sx={{ padding: '20px 20px 50px 20px', marginTop: '10px' }}>
            <Typography component='h2' variant='h4' sx={{ marginBottom: '10px' }}>
              {offerTitle}
            </Typography>
            <ReactImageGallery
              showIndex={true}
              slideInterval={5000}
              items={mappedImagesForReactImageGallery}
            />
            <Typography component='h2' variant='h4' sx={{ margin: '20px 0' }}>
              Offer Details
            </Typography>
            <Box sx={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
              <Table sx={{ maxWidth: '500px', height: 'fit-content' }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: '1.2rem' }}>Basic information</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Price:</TableCell>
                    <TableCell>2000PLN</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Area:</TableCell>
                    <TableCell>60 sqm</TableCell>
                  </TableRow>
                  <TableRow sx={{ 'td, th': { border: 0 } }}>
                    <TableCell>Rooms:</TableCell>
                    <TableCell>3</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table sx={{ maxWidth: '500px', height: 'fit-content' }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: '1.2rem' }}>Location</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>City:</TableCell>
                    <TableCell>Kraków</TableCell>
                  </TableRow>
                  <TableRow sx={{ 'td, th': { border: 0 } }}>
                    <TableCell>Province:</TableCell>
                    <TableCell>małopolskie</TableCell>
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
              has never been rented. All furniture made to measure with high-class fittings. Heating
              and hot water from the MPEC municipal network - low maintenance costs. Housing estate
              from 2015 with monitoring. The estate is fenced, the gate is opened with a remote
              control. Within the estate there are bicycle stands and a playground. The apartment is
              located at ul. Grzegórzecka 77 in close proximity to the Variete Theater and the
              Vistula boulevards. To the tram stop, it is less than 5 minutes on foot. Nearby, there
              are service premises, shops such as Żabka or Biedronka, as well as nurseries, a
              hairdresser, a kindergarten, a bakery, a medical center, etc. An ideal place for
              people who want to live in a well-connected place, in the city center, yet in peace
              and quiet. The flat in full ownership - perpetual usufruct has been fully purchased.
              You can buy one or two parking spaces in the underground garage and a storage room.
            </Typography>
            <Typography component='h2' variant='h4' sx={{ margin: '20px 0' }}>
              Contact
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Joe Kowalski</Typography>
            <Typography>Email: Joe.Kowalski@gmail.com</Typography>
            <Typography>Phone number: +48 389 391 832</Typography>
          </Paper>
        ) : (
          <p>Fetching</p>
        )}
      </Container>
    </>
  )
}
