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
import { OfferDetailsFetching } from '../../components/UI/Fetching/OfferDetailsFetching'
import { Tables } from './InputElements/Tables'

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
    description,
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
          {backendOfferFetchStatus === 'fetching' ? (
            <OfferDetailsFetching />
          ) : (
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
              <Tables
                price={price}
                squareMeters={squareMeters}
                rooms={rooms}
                city={city}
                province={province}
              />

              <Typography component='h2' variant='h4' sx={{ margin: '20px 0' }}>
                Description
              </Typography>
              <Typography>{description}</Typography>

              <Typography component='h2' variant='h4' sx={{ margin: '20px 0' }}>
                Contact
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{authorName}</Typography>
              <Typography>Email: {contactEmail}</Typography>
              <Typography>Phone number: {contactPhone}</Typography>
            </>
          )}
        </Paper>
      </Container>
    </>
  )
}
