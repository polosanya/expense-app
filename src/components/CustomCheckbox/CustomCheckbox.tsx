import { Checkbox, CheckboxProps } from '@mui/material';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { styled } from '@mui/system';
import uncheckedIcon from '../../assets/icons/unchecked.svg';
import checkedIcon from '../../assets/icons/checked.svg';

export const CustomCheckbox = () => {
    return (
        <CustomCheckboxLabel
            control={<CustomCheck icon={<UncheckedIcon />} checkedIcon={<CheckedIcon />} />}
            label="Remember me"
        />
    );
};

const CustomCheck = styled(Checkbox)<CheckboxProps>(({ theme }) => ({
    color: theme.palette.red,
}));

const CustomCheckboxLabel = styled(FormControlLabel)<FormControlLabelProps>(({
    '& .MuiFormControlLabel-label': {
        fontFamily: 'Montserrat, sans-serif',
        color: '#F5F5F5',
        opacity: '0.8',
        fontSize: '12px',
        fontWeight: '400',
    }
}));

const UncheckedIcon = styled('span')({
    width: '16px',
    height: '16px',
    backgroundImage: `url(${uncheckedIcon})`,
});

const CheckedIcon = styled('span')(({ theme }) => ({
    width: '16px',
    height: '16px',
    backgroundImage: `url(${checkedIcon})`,
    backgroundColor: theme.palette.green.darker,
    borderRadius: '2px',
}));