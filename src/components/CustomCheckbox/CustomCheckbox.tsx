import { Checkbox, Typography, TypographyProps } from '@mui/material';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import checkedIcon from '../../assets/icons/checked.svg';
import uncheckedIcon from '../../assets/icons/unchecked.svg';
import { CustomCheckboxProps } from './types';

export const CustomCheckbox: FC<CustomCheckboxProps> = ({ label='', ...props }) => {
    return (
        <CustomCheckboxLabel
            control={<Checkbox {...props} icon={<UncheckedIcon />} checkedIcon={<CheckedIcon />} />}
            label={label}
        />
    );
};

const CustomCheckboxLabel = styled(FormControlLabel)<FormControlLabelProps>(({ theme }) => ({
    marginLeft: 0,

    '& .MuiButtonBase-root': {
        paddingLeft: 0,
    },

    '& .MuiFormControlLabel-label': {
        color: theme.palette.bgr,
        opacity: '0.8',
        fontSize: '12px',
        fontWeight: '400',
    }
}));

const UncheckedIcon = styled(Typography)<TypographyProps>({
    width: '16px',
    height: '16px',
    backgroundImage: `url(${uncheckedIcon})`,
});

const CheckedIcon = styled(Typography)<TypographyProps>(({ theme }) => ({
    width: '16px',
    height: '16px',
    backgroundImage: `url(${checkedIcon})`,
    backgroundColor: theme.palette.green.darker,
    borderRadius: '2px',
}));