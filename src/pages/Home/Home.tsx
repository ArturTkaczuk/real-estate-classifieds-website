import { useEffect, useState } from 'react'
import { Estates } from '../../components/Estates/Estates'
import { HeadingPaper } from '../../components/HeadingPaper/HeadingPaper'
import { SearchFilter } from '../../components/SearchFilter/SearchFilter'
import { EstateProps, FilterSettings } from '../../types'
import { filterObjectArrayWithObject } from '../../utils/filterFunction'
import image11 from '../../assets/images/offer1-1.jpg'
import image12 from '../../assets/images/offer1-2.jpg'
import image13 from '../../assets/images/offer1-3.jpg'
import image21 from '../../assets/images/offer2-1.jpg'
import image22 from '../../assets/images/offer2-2.jpg'
import image23 from '../../assets/images/offer2-3.jpg'
import image31 from '../../assets/images/offer3-1.jpg'
import image32 from '../../assets/images/offer3-2.jpg'
import image33 from '../../assets/images/offer3-3.jpg'

import { Box, Container } from '@mui/material'

const offersFromBackend = [
  {
    offerId: 1,
    authorName: 'Joe Kowalski',
    contactEmail: 'joekowalski@gmail.com',
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
  },
  {
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
  },
  {
    offerId: 3,
    authorName: 'Bob Bobson',
    contactEmail: 'bob.bobson2@gmail.com',
    contactPhone: '+48 264 754 119',
    images: [image31, image32, image33],
    offerTitle: 'I am renting a 2-room flat - available immediately!',
    city: 'Kraków',
    province: 'Lesser Poland',
    price: 2_000,
    squareMeters: 53,
    type: 'rental',
    rooms: 2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, dolore. Molestias, rerum facilis provident nobis perspiciatis sapiente labore beatae architecto blanditiis tempore aperiam nam corrupti minus numquam ea, perferendis ducimus eum sunt ipsam mollitia tempora. Sed, voluptates eaque iusto culpa consequuntur sunt, minus omnis dolore, sint fuga vitae? Similique dolorum explicabo fugiat sed suscipit vitae, in saepe minima eos, consequuntur eligendi cum repellat. Ad corrupti, tenetur sunt distinctio reprehenderit ipsum architecto adipisci placeat, dolor eaque inventore beatae, similique illum quam accusamus. Tempora, dolorem nostrum explicabo hic tenetur at laborum dolore, harum dignissimos impedit ut? Praesentium repellendus amet officia eius dolore.',
  },
]

export const Home = (): JSX.Element => {
  const [fetchedBackendOffers, setFetchedBackendOffers] = useState<EstateProps[]>([])
  const [displayedOffers, setDisplayedOffers] = useState<EstateProps[]>([])
  const [backendOffersFetchStatus, setBackendOffersFetchStatus] = useState<'fetching' | 'fetched'>(
    'fetching',
  )

  useEffect(() => {
    const fetchOffersOnAppLoad = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setFetchedBackendOffers(offersFromBackend)
      setDisplayedOffers(offersFromBackend)

      setBackendOffersFetchStatus('fetched')
    }

    fetchOffersOnAppLoad()
  }, [])

  const searchHandler = (filterSettings: FilterSettings) => {
    const filteredOffers = filterObjectArrayWithObject(fetchedBackendOffers, filterSettings)
    setDisplayedOffers(filteredOffers)
  }

  return (
    <Container>
      <HeadingPaper />
      <SearchFilter searchHandler={searchHandler} />
      <Estates offers={displayedOffers} backendOffersFetchStatus={backendOffersFetchStatus} />
    </Container>
  )
}
