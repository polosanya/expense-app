import React from 'react';
import './AuthBackground.css';
import logo from '../../assets/logos/logo.svg';

type Props = {
    image: string,
}

const AuthBackground: React.FC<Props> = ({ image }) => {
    return (
        <div className='AuthBackground'>
            <img src={logo} alt='Incode Group logo' className='AuthBackground__logo'/>
            <img src={image} alt='Woman image' className='AuthBackground__image'/>
        </div>
    );
};

export default AuthBackground;