import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react'
import { MUIColorType } from './types'
import { ThemeContext } from './context/ThemeContext'
import { BackgroundImage } from './components/BackgroundImage/BackgroundImage'
import { Box } from '@mui/material'
import { Home } from './pages/Home/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)

  const themeColor: MUIColorType = 'success'

  return (
    <ThemeContext.Provider value={themeColor}>
      <Box>
        <BackgroundImage />
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Home />
        <Footer />
      </Box>
    </ThemeContext.Provider>
  )
}

export default App
