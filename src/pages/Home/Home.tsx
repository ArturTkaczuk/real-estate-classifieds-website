import { useEffect, useState } from 'react'
import { Estates } from '../../components/Estates/Estates'
import { HeadingPaper } from '../../components/HeadingPaper/HeadingPaper'
import { SearchFilter } from '../../components/SearchFilter/SearchFilter'
import { EstateProps, FilterSettings } from '../../types'
import { filterObjectArrayWithObject } from '../../utils/filterFunction'
import offerOne from '../../assets/images/offer1.jpg'
import offerTwo from '../../assets/images/offer2.jpg'
import offerThree from '../../assets/images/offer3.jpg'
import { Box } from '@mui/material'

const offersFromBackend = [
  {
    id: 1,
    imgLink: offerOne,
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
    id: 2,
    imgLink: offerTwo,
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
    id: 3,
    imgLink: offerThree,
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
    <Box>
      <HeadingPaper />
      <SearchFilter searchHandler={searchHandler} />
      <Estates offers={displayedOffers} backendOffersFetchStatus={backendOffersFetchStatus} />
    </Box>
  )
}