import React from 'react';
import AuthBackground from '../../components/AuthBackground/AuthBackground';
import womanImage from '../../assets/images/woman.png';
import './Auth.css';
// import SignIn from './SignIn/SignIn';
// import SignUp from './SignUp/SignUp';

const Auth: React.FC = () => {
  return (
    <div className="Auth">
        <AuthBackground image={womanImage} />
        {/* <SignIn />
        <SignUp /> */}
    </div>
  );
}

export default Auth;