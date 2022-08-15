import { Box, Container, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ReactImageGallery from 'react-image-gallery'
import { useParams } from 'react-router-dom'
import image11 from '../../assets/images/offer1-1.jpg'
import image12 from '../../assets/images/offer1-2.jpg'
import image13 from '../../assets/images/offer1-3.jpg'

import 'react-image-gallery/styles/css/image-gallery.css'

const offerFromBackend = {
  id: 1,
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

  const { id, images, offerTitle, city, province, price, squareMeters, type, rooms } =
    offerFromBackend
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
          <Paper sx={{ padding: '20px 20px 10px 20px', marginTop: '10px' }}>
            <Typography component='h2' variant='h4' sx={{ marginBottom: '10px' }}>
              {offerTitle}
            </Typography>
            <ReactImageGallery
              showIndex={true}
              autoPlay={true}
              slideInterval={5000}
              items={mappedImagesForReactImageGallery}
            />
            <Typography component='h2' variant='h4' sx={{ margin: '10px 0' }}>
              Offer Details
            </Typography>
          </Paper>
        ) : (
          <p>Fetching</p>
        )}
      </Container>
    </>
  )
}
