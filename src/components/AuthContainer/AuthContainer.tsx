import { FC } from 'react';
import { Grid, Box, BoxProps, Link, LinkProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from 'assets/icons/logo.svg';
import { AuthContainerProps, ImageComponentProps } from './types';

export const AuthContainer: FC<AuthContainerProps> = ({ image, children }) => {
    return (
        <Grid container>
            <TopLogoLink href={process.env.REACT_APP_BASE_URL}>
                <img src={logo} alt='Incode Group logo' />
            </TopLogoLink>

            <Grid item xs={6} container direction='column'>
                <FormComponent>
                    {children}
                </FormComponent>
            </Grid>

            <Grid item xs={6} >
                <ImageComponent image={image} />
            </Grid>
        </Grid >
    );
};

const ImageComponent = styled(Box)<ImageComponentProps>(({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
}));

const TopLogoLink = styled(Link)<LinkProps>({
    position: 'absolute',
    top: '48px',
    left: '60px',
});

const FormComponent = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.black,
}));
