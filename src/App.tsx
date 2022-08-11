import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { useReducer } from 'react'
import { MUIColorType } from './types'
import { ThemeContext } from './context/ThemeContext'
import { BackgroundImage } from './components/BackgroundImage/BackgroundImage'
import { Box } from '@mui/material'
import { Home } from './pages/Home/Home'
import { AuthContext } from './context/AuthContext'
import { authInitialState, authReducer } from './reducers/authReducer'

function App() {
  const [authState, dispatch] = useReducer(authReducer, authInitialState)
  const { isLoggedIn } = authState

  const themeColor: MUIColorType = 'success'

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        dispatch,
      }}
    >
      <ThemeContext.Provider value={themeColor}>
        <Box>
          <BackgroundImage />
          <Header />
          <Home />
          <Footer />
        </Box>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
