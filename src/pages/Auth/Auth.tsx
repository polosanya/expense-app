import { FC } from 'react';
import { styled } from '@mui/material/styles';
// import { SignIn } from './SignIn/SignIn';
import { Box, BoxProps } from '@mui/material';
import { SignUp } from './SignUp/SignUp';

const Auth: FC = () => {
  return (
    <AuthComponent>
      <SignUp />
    </AuthComponent>
  );
}

const AuthComponent = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.black,
}));

export default Auth;