import React from 'react';
import './Auth.css';
import SignIn from './SignIn/SignIn';
// import SignUp from './SignUp/SignUp';

const Auth: React.FC = () => {
  return (
    <div className="Auth">
        <SignIn />
    </div>
  );
}

export default Auth;