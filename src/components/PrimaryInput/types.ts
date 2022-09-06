import { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { TypographyProps } from '@mui/material';
import { PrimaryInputMessageType } from './utils';

export type PrimaryInputProps = InputUnstyledProps & {
    label?: string,
    message?: string,
    messageType?: PrimaryInputMessageType,
    touched?: boolean,
};

export type MessageProps = TypographyProps & {
    type: PrimaryInputMessageType;
};

export type PrimaryInputStyledProps = InputUnstyledProps & {
    isError: boolean,
};