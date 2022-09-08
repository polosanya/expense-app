import { Box, BoxProps, Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { Reset } from 'pages/Auth/Reset/Reset'
import { SignIn } from 'pages/Auth/SignIn/SignIn'
import { SignUp } from 'pages/Auth/SignUp/SignUp'
import { HomePage } from 'pages/Home/HomePage/HomePage'
import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from 'routes/PrivateRoute/PrivateRoute'
import { User } from 'routes/PrivateRoute/types'
import { PublicRoute } from 'routes/PublicRoute/PublicRoute'

export const DistributingRoute: FC = () => {
  const [user, setUser] = useLocalStorage<User>('user', null)

  const handleLogin = () => {
    setUser({
      id: 1,
      name: 'Test User'
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <AuthComponent>
      {user ? (
        <StyledButton onClick={handleLogout}>Sign out</StyledButton>
      ) : (
        <StyledButton onClick={handleLogin}>Sign In</StyledButton>
      )}

      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute user={user} />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="*" element={<Navigate to="/sign-in" />} />
          </Route>

          <Route element={<PrivateRoute user={user} />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthComponent>
  )
}

const AuthComponent = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.black
}))

const StyledButton = styled(Button)<ButtonProps>({
  position: 'absolute'
})
