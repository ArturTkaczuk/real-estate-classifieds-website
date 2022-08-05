import { createContext } from 'react'
import { MUIColorType } from '../types'

export const ThemeColorContext = createContext<MUIColorType>(undefined)

//Only visible in Chrome React Developer Tools extension - for debugging
ThemeColorContext.displayName = 'ThemeColorContext'
