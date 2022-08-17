import { EstateProps } from '../types'
import { SortValues } from '../types/sortingTypes'

export function sortOffers(objectArrayToSort: EstateProps[], sortValue: SortValues) {
  let sortedOffers: EstateProps[] = []

  switch (sortValue) {
    case SortValues.PRICE_LOW_TO_HIGH:
      sortedOffers = objectArrayToSort.sort((a, b) => a.price - b.price)
      break
    case SortValues.PRICE_HIGH_TO_LOW:
      sortedOffers = objectArrayToSort.sort((a, b) => b.price - a.price)
      break
    case SortValues.SPACE_LOW_TO_HIGH:
      sortedOffers = objectArrayToSort.sort((a, b) => a.squareMeters - b.squareMeters)
      break
    case SortValues.SPACE_HIGH_TO_LOW:
      sortedOffers = objectArrayToSort.sort((a, b) => b.squareMeters - a.squareMeters)
      break
    case SortValues.RECENT_TO_OLDEST:
      sortedOffers = objectArrayToSort.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      break
    case SortValues.OLDEST_TO_RECENT:
      sortedOffers = objectArrayToSort.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
      break
  }

  return sortedOffers
}
