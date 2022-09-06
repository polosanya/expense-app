import { AuthContainer } from 'components/AuthContainer/AuthContainer'
import { FC } from 'react'
import womanImage from '../../../assets/images/woman.png'
import successIcon from '../../../assets/icons/success.svg'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { ButtonPrimary } from 'components/ButtonPrimary/ButtonPrimary'
import { SuccessProps } from './types'

export const Success: FC<SuccessProps> = ({
    children = 'Success!',
    buttonLabel = '',
    ...props
}) => {
    return (
        <AuthContainer image={womanImage}>
            <StyledBox>
                <StyledIcon />
                <StyledCaption variant='h5'>
                    {children}
                </StyledCaption>
                {buttonLabel && <ButtonPrimary {...props}>{buttonLabel}</ButtonPrimary>}
            </StyledBox>
        </AuthContainer>
    )
}

const StyledBox = styled(Box)<BoxProps>({
    width: '330px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const StyledIcon = styled(Box)<BoxProps>({
    backgroundImage: `url(${successIcon})`,
    backgroundRepeat: 'no-repeat',
    width: '220px',
    height: '200px',
    paddingBottom: '24px',
})

const StyledCaption = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.white,
    width: 'fit-content',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '155%',
    paddingBottom: '32px',
}))