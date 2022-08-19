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
import { AuthActionType } from './types/authTypes'
import { Route, Routes } from 'react-router-dom'
import { OfferDetails } from './pages/OfferDetails/OfferDetails'
import { ScrollToTopScript } from './utils/scrollToTopScript'
import { Error404 } from './pages/404/404'
import { SignUp } from './pages/SignUp/SignUp'
import { Profile } from './pages/Profile/Profile'
import { MyOffers } from './pages/MyOffers/MyOffers'

function App() {
  const [authState, dispatch] = useReducer(authReducer, authInitialState)
  const { isLoggedIn } = authState

  const themeColor: MUIColorType = 'success'

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        logIn: () => dispatch({ type: AuthActionType.LOGIN }),
        logOut: () => dispatch({ type: AuthActionType.LOGOUT }),
      }}
    >
      <ThemeContext.Provider value={themeColor}>
        <Box sx={{ minHeight: '100vh', position: 'relative' }}>
          <BackgroundImage />
          <Header />

          <ScrollToTopScript />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='offers/:id' element={<OfferDetails />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='profile' element={<Profile />} />
            <Route path='my-offers' element={<MyOffers />} />
            <Route path='*' element={<Error404 />} />
          </Routes>

          <Box sx={{ height: '150px' }} />
          <Footer />
        </Box>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
