import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Suspense, useReducer, lazy } from 'react'
import { MUIColorType } from './types'
import { ThemeContext } from './context/ThemeContext'
import { BackgroundImage } from './components/BackgroundImage/BackgroundImage'
import { Box } from '@mui/material'
import { AuthContext } from './context/AuthContext'
import { authInitialState, authReducer } from './reducers/authReducer'
import { AuthActionType } from './types/authTypes'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToTopScript } from './utils/scrollToTopScript'

const OfferDetails = lazy(() => import('./pages/OfferDetails/OfferDetails'))
const Home = lazy(() => import('./pages/Home/Home'))
const Error404 = lazy(() => import('./pages/404/404'))
const SignUp = lazy(() => import('./pages/SignUp/SignUp'))

import { Profile } from './pages/Profile/Profile'
import { MyOffers } from './pages/MyOffers/MyOffers'
import { Login } from './pages/Login/Login'

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
          <Suspense fallback={<p>Loading</p>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='offers/:id' element={<OfferDetails />} />
              <Route path='login' element={<Login />} />
              <Route path='sign-up' element={<SignUp />} />
              <Route path='profile' element={isLoggedIn ? <Profile /> : <Navigate to='/login' />} />
              <Route path='my-offers' element={<MyOffers />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
          </Suspense>

          <Box sx={{ height: '150px' }} />
          <Footer />
        </Box>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
