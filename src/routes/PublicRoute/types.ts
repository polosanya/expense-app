import { User } from 'features/login/loginSlice'
import { ReactNode } from 'react'

export type PublicRouteProps = {
  children?: ReactNode
  user: User
  redirectPath?: string
}
