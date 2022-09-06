import ButtonUnstyled, { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { FC } from 'react';

export const ButtonPrimary: FC<ButtonUnstyledProps> = ({ type, children, ...props }) => {
    return (
        <ButtonPrimaryStyled type={type} {...props}>
            {children}
        </ButtonPrimaryStyled>
    )
};

const ButtonPrimaryStyled = styled(ButtonUnstyled)<ButtonUnstyledProps>(({ theme }) => ({
    color: theme.palette.white,
    backgroundColor: theme.palette.green.darker,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    padding: '9.5px',
    borderRadius: '2px',
    border: `1px solid ${theme.palette.green.darker}`,
    ':hover': {
        borderColor: theme.palette.green.main,
    },
    ':active': {
        backgroundColor: theme.palette.green.main,
        borderColor: theme.palette.bgr,
    }
}));
