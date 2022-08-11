import { createContext } from 'react'
import { MUIColorType } from '../types'

export const ThemeContext = createContext<MUIColorType>(undefined)

//Only visible in Chrome React Developer Tools extension - for debugging
ThemeContext.displayName = 'ThemeContext'
