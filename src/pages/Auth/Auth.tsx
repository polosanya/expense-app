import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { Box, BoxProps } from '@mui/material';
import { HomePage } from 'pages/Home/HomePage/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NewPassword } from './NewPassword/NewPassword';
import { Reset } from './Reset/Reset';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';
import { Success } from './Success/Success';
import { User } from 'components/ProtectedRoute/types';
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute';
import { useLocalStorage } from 'hooks/useLocalStorage';

const Auth: FC = () => {
  const [user, setUser] = useLocalStorage<User>('user', null);

  const handleLogin = () => {
    setUser({
      id: 1,
      name: 'Test User',
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <AuthComponent>
      {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}

      <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="*" element={<Navigate to='/sign-in' />} />
        <Route path='/home' element={
          <ProtectedRoute user={user}>
            <HomePage />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
    </AuthComponent>
  );
}

const AuthComponent = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.black,
}));

export default Auth;