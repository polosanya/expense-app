import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { FC } from 'react'

export const CustomTitle: FC<TypographyProps> = (props) => {
  return <StyledTitle {...props} />
}

const StyledTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.white,
  fontSize: '56px',
  lineHeight: '1',
  fontWeight: '700',
  textAlign: 'center',
  paddingBottom: '32px'
}))
