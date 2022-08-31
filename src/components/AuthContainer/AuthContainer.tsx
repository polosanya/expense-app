import { FC, ReactNode } from 'react';
import { Grid, Box, BoxProps } from '@mui/material';
import { styled } from '@mui/system';
import LogoLink from '../LogoLink/LogoLink';

type Props = {
    image: string
    children: ReactNode
}

const AuthContainer: FC<Props> = ({ image, children }) => {
    return (
        <Grid container>
            <Grid item xs={6} container direction='column'>
                <LogoLink />

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

const ImageComponent = styled((props: ImageComponentProps) => <Box {...props} />)(({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
}));

const FormComponent = styled(Box)({
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
});

export default AuthContainer;