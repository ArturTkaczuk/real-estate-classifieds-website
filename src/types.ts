import { SelectChangeEvent } from '@mui/material'
import { ChangeEvent } from 'react'

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
  spaceMin?: number
  spaceMax?: number
}

export type FilterInputChangeEvent =
  | SelectChangeEvent<string | number>
  | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export type FilterObjectKeysAsString =
  | 'type'
  | 'rooms'
  | 'province'
  | 'city'
  | 'priceMin'
  | 'priceMax'
  | 'spaceMin'
  | 'spaceMax'

export type MUIColorType =
  | 'success'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'warning'
  | undefined

export type handleFilterSettingsChangeType = (
  event: FilterInputChangeEvent,
  filterObjectKey: FilterObjectKeysAsString,
) => void
