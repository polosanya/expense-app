import { BoxProps } from '@mui/material/Box'
import { ReactNode } from 'react'

export type AuthContainerProps = {
  image: string
  children: ReactNode
}

export type ImageComponentProps = BoxProps & {
  image: string
}
