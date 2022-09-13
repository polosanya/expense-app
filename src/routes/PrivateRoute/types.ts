import { User } from 'app/store'
import { ReactNode } from 'react'

export type PrivateRouteProps = {
  children?: ReactNode
  user: User
  redirectPath?: string
}
