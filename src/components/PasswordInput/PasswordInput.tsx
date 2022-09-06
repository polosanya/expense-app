import { ButtonUnstyled, ButtonUnstyledProps } from '@mui/base';
import { styled } from '@mui/material/styles';
import { ReactComponent as EyeOffSVG } from 'assets/icons/eye-off.svg';
import { ReactComponent as EyeOnSVG } from 'assets/icons/eye-on.svg';
import { PrimaryInput } from 'components/PrimaryInput/PrimaryInput';
import { PrimaryInputProps } from 'components/PrimaryInput/types';
import { FC, useState } from 'react';

export const PasswordInput: FC<PrimaryInputProps> = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <PrimaryInput
            componentsProps={{
                input: {
                    type: showPassword ? 'text' : 'password'
                }
            }}
            endAdornment={
                <IconButton onClick={handlePasswordVisibility} >
                    {
                        !showPassword
                            ? <EyeOffIcon />
                            : <EyeOnIcon />
                    }
                </IconButton>
            }
            {...props}
        />
    );
};

const IconButton = styled(ButtonUnstyled)<ButtonUnstyledProps>({
    background: 0,
    border: 0,
    ':hover': {
        cursor: 'pointer',
    }
});

const EyeOnIcon = styled(EyeOnSVG)(({ theme }) => ({
    stroke: theme.palette.white,
    ':hover': {
        stroke: theme.palette.green.main,
    },
}));

const EyeOffIcon = styled(EyeOffSVG)(({ theme }) => ({
    stroke: theme.palette.white,
    ':hover': {
        stroke: theme.palette.green.main,
    },
}));