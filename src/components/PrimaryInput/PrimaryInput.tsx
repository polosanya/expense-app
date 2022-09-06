import { InputUnstyled } from '@mui/base';
import { Box, BoxProps, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { MessageProps, PrimaryInputProps, PrimaryInputStyledProps } from './types';
import { PrimaryInputMessageType } from './utils';

export const PrimaryInput: FC<PrimaryInputProps> = ({
    label = '',
    messageType = PrimaryInputMessageType.Text,
    message = '',
    touched = false,
    ...props
}) => {
    return (
        <InputBox>
            {label && <Label>{label}</Label>}

            <PrimaryInputStyled isError={touched && message.length > 0} {...props} />

            {touched && message && <Message type={messageType} >{message}</Message>}
        </InputBox>
    )
};

const InputBox = styled(Box)<BoxProps>({
    paddingBottom: '24px',
});

const PrimaryInputStyled = styled(InputUnstyled)<PrimaryInputStyledProps>(({ theme, isError }) => ({
    borderBottom: '1px solid',
    borderColor: theme.palette.white,
    display: 'flex',
    justifyContent: 'space-between',
    '&:hover': {
        borderColor: theme.palette.green.main,
    },

    ...(isError && {
        borderColor: theme.palette.red,
    }),

    '&.Mui-focused': {
        borderColor: theme.palette.green.darker,
        borderSize: '2px',
    },

    '& .MuiInput-input': {
        backgroundColor: theme.palette.black,
        color: theme.palette.white,
        border: 0,
        paddingLeft: '0',
        width: '100%',
        paddingBottom: '5px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '1.5',
        opacity: '0.7',

        ...(isError && {
            color: theme.palette.red,
        }),

        '&::placeholder': {
            color: theme.palette.white
        },

        //Style below prevents default Chrome styles while autofilling form
        '&:-webkit-autofill': {
            transition: 'background-color 600000s 0s, color 600000s 0s',
            '-webkit-text-fill-color': theme.palette.white,
            ...(isError && {
                '-webkit-text-fill-color': theme.palette.red,
            }),
        },

        '&:focus': {
            outline: 0,
        }
    },
}));

const Label = styled(Typography)<TypographyProps>(({ theme }) => ({
    paddingBottom: '4px',
    color: theme.palette.white,
    fontWeight: '400',
    fontSize: '14px',
}));

const Message = styled(Typography)<MessageProps>(({ theme, type }) => ({
    color: theme.palette.white,
    fontWeight: '400',
    fontSize: '12px',
    position: 'absolute',
    paddingTop: '4px',

    ...(type === PrimaryInputMessageType.Error && {
        color: theme.palette.red,
    }),
}));
