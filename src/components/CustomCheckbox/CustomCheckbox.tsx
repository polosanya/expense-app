import { Checkbox, CheckboxProps, Typography, TypographyProps } from '@mui/material';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { styled } from '@mui/material';
import uncheckedIcon from '../../assets/icons/unchecked.svg';
import checkedIcon from '../../assets/icons/checked.svg';
import { FC } from 'react';

export const CustomCheckbox: FC<CheckboxProps> = ({ ...props}) => {
    return (
        <CustomCheckboxLabel
            control={<Checkbox {...props} icon={<UncheckedIcon />} checkedIcon={<CheckedIcon />} />}
            label="Remember me"
        />
    );
};

const CustomCheckboxLabel = styled(FormControlLabel)<FormControlLabelProps>(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
        fontFamily: 'Montserrat, sans-serif',
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