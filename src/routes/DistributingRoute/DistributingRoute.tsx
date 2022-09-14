import { Box, BoxProps, Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { clearUser, setUser } from 'features/login/loginSlice'
import { Reset } from 'pages/Auth/Reset/Reset'
import { SignIn } from 'pages/Auth/SignIn/SignIn'
import { SignUp } from 'pages/Auth/SignUp/SignUp'
import { HomePage } from 'pages/Home/HomePage/HomePage'
import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from 'routes/PrivateRoute/PrivateRoute'
import { PublicRoute } from 'routes/PublicRoute/PublicRoute'

export const DistributingRoute: FC = () => {
  const user = useAppSelector((state) => state.login.user)
  const dispatch = useAppDispatch()

  return (
    <AuthComponent>
      {user ? (
        <StyledButton onClick={() => dispatch(clearUser())}>
          Sign out
        </StyledButton>
      ) : (
        <StyledButton
          onClick={() =>
            dispatch(
              setUser({
                id: 2,
                username: 'test',
                displayName: 'Test User',
                admin: false
              })
            )
          }
        >
          Sign In
        </StyledButton>
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
