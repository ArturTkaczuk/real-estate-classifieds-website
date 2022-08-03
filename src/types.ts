export interface EstateProps {
  imgLink: string
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
  rooms?: number
  province?: string
  city?: string
  priceMin?: number
  priceMax?: number
}
