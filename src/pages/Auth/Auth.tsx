import { FC } from 'react';
import { styled } from '@mui/material/styles';
// import { SignIn } from './SignIn/SignIn';
import { Box, BoxProps } from '@mui/material';
import { SignUp } from './SignUp/SignUp';
// import { Success } from './Success/Success';
// import { Reset } from './Reset/Reset';
// import { NewPassword } from './NewPassword/NewPassword';

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