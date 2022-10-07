import { InputUnstyledProps } from '@mui/base/InputUnstyled'
import { TypographyProps } from '@mui/material'

export type PrimaryInputProps = InputUnstyledProps & {
  label?: string
  message?: string
  messageType?: PrimaryInputMessageType
  hasError?: boolean
}

export type MessageProps = TypographyProps & {
  type: PrimaryInputMessageType
}

export type PrimaryInputMessageType = 'info' | 'error'

export type PrimaryInputStyledProps = InputUnstyledProps & {
  hasError: boolean
}
