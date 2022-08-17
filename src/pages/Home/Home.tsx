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

import {
  Box,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'

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

enum SortValues {
  RECENT_TO_OLDEST = 'recentToOldest',
  OLDEST_TO_RECENT = 'oldestToRecent',
  PRICE_LOW_TO_HIGH = 'priceLowToHigh',
  PRICE_HIGH_TO_LOW = 'priceHighToLow',
  SPACE_LOW_TO_HIGH = 'spaceLowToHigh',
  SPACE_HIGH_TO_LOW = 'spaceHighToLow',
}

export const Home = (): JSX.Element => {
  const [fetchedBackendOffers, setFetchedBackendOffers] = useState<EstateProps[]>([])
  const [displayedOffers, setDisplayedOffers] = useState<EstateProps[]>([])
  const [backendOffersFetchStatus, setBackendOffersFetchStatus] = useState<'fetching' | 'fetched'>(
    'fetching',
  )
  const [sortBy, setSortBy] = useState<SortValues>(SortValues.RECENT_TO_OLDEST)

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

  const sortHandler = (e: SelectChangeEvent<SortValues>) => {
    const selectedSortValue = e.target.value
    setSortBy(selectedSortValue as SortValues)

    let sortedOffers: EstateProps[] = []

    switch (selectedSortValue) {
      case SortValues.PRICE_LOW_TO_HIGH:
        sortedOffers = displayedOffers.sort((a, b) => a.price - b.price)
        break
      case SortValues.PRICE_HIGH_TO_LOW:
        sortedOffers = displayedOffers.sort((a, b) => b.price - a.price)
        break
      case SortValues.SPACE_LOW_TO_HIGH:
        sortedOffers = displayedOffers.sort((a, b) => a.squareMeters - b.squareMeters)
        break
      case SortValues.SPACE_HIGH_TO_LOW:
        sortedOffers = displayedOffers.sort((a, b) => b.squareMeters - a.squareMeters)
        break

      default:
        break
    }

    setDisplayedOffers(sortedOffers)
  }

  return (
    <Container>
      <HeadingPaper />

      <SearchFilter searchHandler={searchHandler} />

      <Paper
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginBottom: '20px',
          padding: '20px',
          gap: '20px',
        }}
      >
        <Typography
          sx={{ width: { xs: '100%', sm: 'fit-content' }, textAlign: 'center' }}
          variant='h4'
          component='h2'
        >
          All offers:
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Typography variant='h6' component='h3'>
            Sort by:
          </Typography>
          <FormControl size='small'>
            <Select
              id='demo-simple-select'
              value={sortBy}
              onChange={(e) => sortHandler(e)}
              autoWidth
            >
              <MenuItem disabled value={SortValues.RECENT_TO_OLDEST}>
                Recent to Oldest
              </MenuItem>
              <MenuItem disabled value={SortValues.OLDEST_TO_RECENT}>
                Oldest to Recent
              </MenuItem>

              <Divider sx={{ margin: '0 !important' }} />

              <MenuItem value={SortValues.PRICE_LOW_TO_HIGH}>Price: low to high</MenuItem>
              <MenuItem value={SortValues.PRICE_HIGH_TO_LOW}>Price: high to low</MenuItem>

              <Divider sx={{ margin: '0 !important' }} />

              <MenuItem value={SortValues.SPACE_LOW_TO_HIGH}>Space: low to high</MenuItem>
              <MenuItem value={SortValues.SPACE_HIGH_TO_LOW}>Space: high to low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>

      <Estates offers={displayedOffers} backendOffersFetchStatus={backendOffersFetchStatus} />
    </Container>
  )
}
