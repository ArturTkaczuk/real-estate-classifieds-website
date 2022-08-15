export interface EstateProps {
  offerId: number
  authorName: string
  contactEmail: string
  contactPhone: string
  images: string[]
  offerTitle: string
  city: string
  province: string
  price: number
  squareMeters: number
  type: string
  rooms: number
  description: string
}

export interface FilterSettings {
  type?: string
  rooms?: number | string
  province?: string
  city?: string
  priceMin?: number | string
  priceMax?: number | string
  spaceMin?: number | string
  spaceMax?: number | string
}

export type MUIColorType =
  | 'success'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'warning'
  | undefined
