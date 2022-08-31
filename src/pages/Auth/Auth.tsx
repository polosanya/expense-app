import { FC } from 'react';
import { styled } from '@mui/system';
import SignIn from './SignIn/SignIn';
import { Box, BoxProps } from '@mui/material';

const Auth: FC = () => {
  return (
    <AuthComponent>
      <SignIn />
    </AuthComponent>
  );
}

const AuthComponent = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.black,
}));

export default Auth;