import { Link, LinkProps, styled } from '@mui/material';
import { FC } from 'react';

export const CustomLink: FC<LinkProps> = (props) => {
    return (
        <StyledLink {...props} />
    )
}

const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
    color: theme.palette.blue, 
    fontSize: '12px',
    fontWeight: '400', 
    textDecoration: 'none',
}));
