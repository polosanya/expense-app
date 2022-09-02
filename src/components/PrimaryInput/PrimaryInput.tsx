import { InputUnstyled, InputUnstyledProps } from '@mui/base';
import { Box, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/system';
import { FC } from 'react';
import { MessageProps, PrimaryInputProps } from './types';
import { PrimaryInputMessageType } from './utils';

export const PrimaryInput: FC<PrimaryInputProps> = ({
    label = '',
    messageType = PrimaryInputMessageType.Text,
    message = '',
    ...props
}) => {
    return (
        <Box>
            {label && <Label>{label}</Label>}

            <PrimaryInputStyled {...props} />

            {message && <Message type={messageType} >{message}</Message>}
        </Box>
    )
};

const PrimaryInputStyled = styled(InputUnstyled)<InputUnstyledProps>(({ theme }) => ({
    borderBottom: '1px solid white',
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
        borderColor: theme.palette.green.main,
    },

    '&.Mui-focused': {
        borderColor: theme.palette.green.darker,
        borderSize: '2px',
    },

    '& .MuiInput-input': {
        backgroundColor: theme.palette.black,
        color: theme.palette.white,
        border: 0,
        width: '80%',
        paddingBottom: '5px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '400',
        fontSize: '14px',

        '&:focus': {
            outline: 0,
        }
    },
}));

const Label = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.white,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '400',
    fontSize: '14px',
}));

const Message = styled(Typography)<MessageProps>(({ theme, type }) => ({
    color: theme.palette.white,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',

    ...(type === PrimaryInputMessageType.Error && {
        color: theme.palette.red,
    }),
}));