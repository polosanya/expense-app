import { Box, BoxProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { stateUser } from 'app/store'
import { Reset } from 'pages/Auth/Reset/Reset'
import { SignIn } from 'pages/Auth/SignIn/SignIn'
import { SignUp } from 'pages/Auth/SignUp/SignUp'
import { HomePage } from 'pages/Home/HomePage/HomePage'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from 'routes/PrivateRoute/PrivateRoute'
import { PublicRoute } from 'routes/PublicRoute/PublicRoute'

export const DistributingRoute: FC = () => {
  const user = useSelector(stateUser)

  return (
    <AuthComponent>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute user={user.user} />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="*" element={<Navigate to="/sign-in" />} />
          </Route>

          <Route element={<PrivateRoute user={user.user} />}>
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
