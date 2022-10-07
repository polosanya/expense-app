import { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled'
import { ReactNode } from 'react'

export type SuccessProps = ButtonUnstyledProps & {
  children?: ReactNode
  buttonLabel?: string
}
