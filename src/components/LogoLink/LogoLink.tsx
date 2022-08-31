import { FC } from 'react';
import { styled } from '@mui/material/styles';
import logo from '../../assets/logos/logo.svg';
import Link from '@mui/material/Link';

const LogoLink: FC = () => {
    return (
        <LogoComponent href={process.env.REACT_APP_BASE_URL} >
            <img src={logo} alt='Incode Group logo' />
        </LogoComponent>
    )
};

const LogoComponent = styled(Link)({
    position: 'absolute',
    top: '48px',
    left: '60px',
});

export default LogoLink;