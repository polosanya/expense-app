import { User } from 'features/login/loginSlice'
import { ReactNode } from 'react'

export type PrivateRouteProps = {
  children?: ReactNode
  user: User
  redirectPath?: string
}
