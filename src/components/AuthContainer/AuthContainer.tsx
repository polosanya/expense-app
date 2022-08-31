import { FC, ReactNode } from 'react';
import { Grid, Box, BoxProps, Link, LinkProps } from '@mui/material';
import { styled } from '@mui/system';
import logo from 'assets/logos/logo.svg';

type Props = {
    image: string
    children: ReactNode
}

const AuthContainer: FC<Props> = ({ image, children }) => {
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

type ImageComponentProps = {
    image: string;
} & BoxProps

const ImageComponent = styled(Box)<ImageComponentProps>(({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
}));

const TopLogoLink = styled(Link)<LinkProps>({
    position: 'absolute',
    top: '48px',
    left: '60px',
});

const FormComponent = styled(Box)<BoxProps>({
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
});

export default AuthContainer;