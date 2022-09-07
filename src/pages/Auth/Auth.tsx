import { Box, BoxProps, Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';
import { User } from 'components/ProtectedRoute/types';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { HomePage } from 'pages/Home/HomePage/HomePage';
import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NewPassword } from './NewPassword/NewPassword';
import { Reset } from './Reset/Reset';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';
import { Success } from './Success/Success';

const Auth: FC = () => {
  const [user, setUser] = useLocalStorage<User>('user', null);

  const handleLogin = () => {
    setUser({
      id: 1,
      name: 'Test User',
      logout: setUser,
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
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="*" element={<Navigate to='/sign-in' />} />
        <Route element={
          <ProtectedRoute user={user} />
        }>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthComponent>
  );
}

const AuthComponent = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.black,
}));

const StyledButton = styled(Button)<ButtonProps>({
  position: 'absolute',
})

export default Auth;